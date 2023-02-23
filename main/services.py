from apscheduler.schedulers.background import BackgroundScheduler
from django.contrib.auth.models import User
from django.core.mail import send_mail
from mnemonic import Mnemonic
from datetime import datetime
from web3 import Web3
from bit import Key

from .models import *

import blockcypher
import datetime
import requests
import hashlib
import pandas
import json


def get_user(user_id):
    return User.objects.get(id=user_id)


def connect_web3():
    eth = 'https://goerli.infura.io/v3/5ff537030ba246268ee78aab10282262'
    w3 = Web3(Web3.HTTPProvider(eth))
    w3.isConnected()
    return w3


def in_dollars():
    url = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH'
    request = requests.get(url)
    src = request.text
    currency = json.loads(src)
    return currency


def send_message(name, private_key, user):
    if user.email:
        send_mail('Secret key',
                  f'Your private key for "{name}":\n{private_key}',
                  'cutrys69@gmail.com',
                  [user.email],
                  fail_silently=False)


def create_new_wallet(name, address, private_key, user, block_number=0, token=1):
    Wallet.objects.create(name=name,
                          public_key=address,
                          private_key=private_key,
                          user=user,
                          block_number=block_number,
                          cryptocurrency=token)


def get_seed(key_words):
    mnemo = Mnemonic('english')
    random = mnemo.generate(256)

    my_seed   = hashlib.sha256(key_words.encode('utf-8')).hexdigest()
    rand_seed = hashlib.sha256(random.encode('utf-8')).hexdigest()

    return my_seed if key_words else rand_seed


def wallets_current_user(user_id=None):
    if user_id is None:
        return None
    dollar_balances = list()
    conversion      = in_dollars()
    balances        = 0
    w3              = connect_web3()

    if not Wallet.objects.filter(user=user_id):
        return None
    wallets = Wallet.objects.filter(user=user_id)

    for wallet in wallets:
        if wallet.cryptocurrency == Token.objects.get(id=1):
            # Ethereum
            wallet.balance_eth = w3.eth.get_balance(wallet.public_key) / 10 ** 18
            wallet.dollar_balance_eth = wallet.balance_eth / conversion['ETH']
            dollar_balances.append(wallet.dollar_balance_eth)
            balances += wallet.dollar_balance_eth
        else:
            # Bitcoin
            account = Key(wallet.private_key)
            wallet.balance_btc = float(account.get_balance())
            wallet.dollar_balance_btc = wallet.balance_btc / conversion['BTC']
            dollar_balances.append(wallet.dollar_balance_btc)
            balances += wallet.dollar_balance_btc

    current_wallets = wallets.values()
    dataframe = pandas.DataFrame(current_wallets)

    dollar_balances_format = ['{0:.2f}'.format(elem) for elem in dollar_balances]

    wallets.name = dataframe.name.tolist()
    wallets.dollar_balances = dollar_balances_format
    wallets.balances = balances

    return wallets


def do_eth_transaction(sender, receiver, amount):
    w3 = connect_web3()
    date = datetime.datetime.now()
    wallet = Wallet.objects.get(public_key=sender)
    nonce = w3.eth.getTransactionCount(sender)

    tx = {
        'nonce': nonce,
        'to': receiver,
        'value': w3.toWei(amount, 'ether'),
        'gas': 21000,
        'gasPrice': w3.eth.gas_price
    }

    signed_tx = w3.eth.account.signTransaction(tx, wallet.private_key)
    tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
    result = w3.toHex(tx_hash)

    wallet.block_number = w3.eth.block_number
    wallet.save()

    Transaction.objects.create(from_wallet=sender,
                               to_wallet=receiver,
                               amount=amount,
                               transaction_id=result,
                               data_created=date)


def do_btc_transactions(sender, receiver, amount):
    date = datetime.datetime.now()
    wallet = Wallet.objects.get(public_key=sender)
    key = Key(wallet.private_key)

    result = key.create_transaction(receiver, amount, 'btc')
    Transaction.objects.create(from_wallet=sender,
                               to_wallet=receiver,
                               amount=amount,
                               transaction_id=result,
                               data_created=date)


# def start():
#     scheduler = BackgroundScheduler()
#     scheduler.add_job(get_transactions, 'interval', seconds=60)
#     scheduler.start()


def btc_transactions(token):
    wallets = Wallet.objects.filter(cryptocurrency=token)

    conversion = in_dollars()

    for wallet in wallets:
        url = f'https://blockchain.info/rawaddr/{wallet.public_key}'
        dataframe = pandas.read_json(url)
        transactions = dataframe['txs']

        trans = Transaction.objects.filter()

        senders        = []
        receivers      = []

        if not transactions.empty:
            for transaction in transactions:
                if transaction['hash'] == '2d4206f4a9fd4e80af744e6e22b31327abf655c8da99871a4b5eeb9365951762':
                    transaction_hash = transaction['hash']
                    # block_number = transaction['block_index']
                    current_date = datetime.datetime.fromtimestamp(transaction['time'])
                    sender = transaction['inputs'][0]['prev_out']['addr']
                    value = transaction['inputs'][0]['prev_out']['value'] / conversion['BTC']
                    receiver = transaction['out'][0]['addr']

                    for i in range(len(transaction['inputs'])):
                        for key, words in transaction['inputs'][i]['prev_out'].items():
                            if key == 'addr':
                                senders.append(words)
                            if key == 'value':
                                senders.append(words)

                    # print('\nReceivers: ')
                    for i in range(len(transaction['out'])):
                        for key, words in transaction['out'][i].items():
                            if key == 'addr':
                                receivers.append(words)
                            if key == 'value':
                                receivers.append(words)

                    if not Transaction.objects.filter(transaction_id=transaction_hash) or \
                            not Transaction.objects.all():
                        Transaction.objects.create(from_wallet=sender,
                                                   to_wallet=receiver,
                                                   amount=value,
                                                   transaction_id=transaction_hash,
                                                   data_created=current_date)
        trans.senders = senders
        trans.receivers = receivers[::-1]

        wallet.block_number = blockcypher.get_latest_block_height()
        wallet.save()
        return trans


def eth_transactions(token):

    w3 = connect_web3()
    tx_dictionary = {}
    wallets = Wallet.objects.filter(cryptocurrency=token)

    for wallet in wallets:

        start_num = wallet.block_number if wallet.block_number < w3.eth.block_number else wallet.block_number + 1
        end_num = w3.eth.block_number

        address = wallet.public_key

        for i in range(start_num, end_num):
            block = w3.eth.getBlock(i, True)
            for transaction in block.transactions:

                if transaction['to'] == address or transaction['from'] == address:

                    transaction_id = transaction['hash'].hex()
                    block_hash     = transaction['blockHash'].hex()
                    current_block  = w3.eth.getBlock(block_hash)
                    current_date   = datetime.datetime.fromtimestamp(current_block['timestamp'])

                    tx_dictionary[transaction_id] = transaction

                    for transaction_hash, attribute in tx_dictionary.items():
                        sender   = attribute['from']
                        receiver = attribute['to']
                        value    = attribute['value'] / 10 ** 18

                        if not Transaction.objects.filter(transaction_id=transaction_hash) or \
                                not Transaction.objects.all():
                            Transaction.objects.create(from_wallet=sender,
                                                       to_wallet=receiver,
                                                       amount=value,
                                                       transaction_id=transaction_hash,
                                                       data_created=current_date)
        wallet.block_number = end_num
        wallet.save()


def get_transactions():
    tokens = Token.objects.all()
    eth_transactions(tokens[0])
    # btc_transactions(tokens[1])


def wallet_history(current_wallet_id=None):
    if current_wallet_id is None:
        return None

    transaction_details = []
    current_wallet      = Wallet.objects.get(id=current_wallet_id)
    transactions        = Transaction.objects.order_by('-data_created')
    conversion          = in_dollars()

    tokens = Token.objects.all()
    token = tokens[0] if current_wallet.cryptocurrency == tokens[0] else tokens[1]

    if not transactions.filter(from_wallet=current_wallet.public_key) | transactions.filter(to_wallet=current_wallet.public_key):
        return None
    transactions = transactions.filter(from_wallet=current_wallet.public_key) | transactions.filter(to_wallet=current_wallet.public_key)

    for transaction in transactions:
        if transaction.to_wallet == current_wallet.public_key:
            transaction.from_wallet = transaction.from_wallet[:39] + '...' if len(transaction.from_wallet) > 42 else transaction.from_wallet
            json_transaction_details = {
                'amount': '{0:.6f}'.format(transaction.amount),
                'amount_dollars_eth': '{0:.2f}'.format(transaction.amount / conversion['ETH']),
                'amount_dollars_btc': '{0:.2f}'.format(transaction.amount / conversion['BTC']),
                'from': transaction.from_wallet,
                'date': str(transaction.data_created.strftime('%d/%m/%Y')),
                'time': str(transaction.data_created.strftime('%H:%M')),
                'cryptocurrency': token.abbreviation
            }
            transaction_details.append(json_transaction_details)
        else:
            transaction.to_wallet = transaction.to_wallet[:39] + '...' if len(transaction.to_wallet) > 42 else transaction.to_wallet
            json_transaction_details = {
                'amount': '{0:.6f}'.format(transaction.amount),
                'amount_dollars_eth': '{0:.2f}'.format(transaction.amount / conversion['ETH']),
                'amount_dollars_btc': '{0:.2f}'.format(transaction.amount / conversion['BTC']),
                'to': transaction.to_wallet,
                'date': str(transaction.data_created.strftime('%d/%m/%Y')),
                'time': str(transaction.data_created.strftime('%H:%M')),
                'cryptocurrency': token.abbreviation,
            }
            transaction_details.append(json_transaction_details)
    return transaction_details


def nft_tokens(current_wallet_id):
    if current_wallet_id is None:
        return None

    nft_details = []
    wallet      = Wallet.objects.get(id=current_wallet_id)
    token       = Token.objects.get(id=1)

    if wallet.cryptocurrency == token:
        nfts = NFT.objects.filter(owner_wallet_nft=wallet)

        for nft in nfts:
            json_nft_details = {
                'name': nft.nft_name,
                'token': nft.token,
                'image': f'media/{nft.image}',
                'description': nft.description
            }
            nft_details.append(json_nft_details)

    return nft_details

from django.conf import settings
from bit import Key

from main.nft_services.creation_nft import pin_img_to_pinata, pin_metadata_to_pinata, handle_transaction
from main.services import get_seed, connect_web3, in_dollars
from main.models import Token, Wallet, Transaction, NFT
from .calendar import *
from .menu import *

import blockcypher
import datetime
import pandas
import os


# Global variables
w3         = connect_web3()
tokens     = Token.objects.all()
conversion = in_dollars()


def get_all_nfts(update, context, current_user):
    user_chat_id  = update.effective_chat.id

    current_wallet = Wallet.objects.get(name=current_user.last_message)

    if NFT.objects.filter(owner_wallet_nft=current_wallet):
        nfts = NFT.objects.filter(owner_wallet_nft=current_wallet)
        for nft in nfts:
            context.bot.send_photo(chat_id=user_chat_id,
                                   photo=nft.image,
                                   caption=f'{nft.nft_name}\n\n'
                                           f'{nft.description}')
    else:
        context.bot.send_message(user_chat_id, f'There are no NFTs for {current_wallet.name} wallet')


def set_nft_description_and_mint_nft(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    # NFT
    nft = NFT.objects.get(id=current_user.last_message)

    current_user.last_message = nft.owner_wallet_nft.name
    current_user.save()

    if user_msg_text == '⬅ Back':
        nft.delete()
        current_user.status = USES_ETH_WALLET
        current_user.save()
        return

    nft.description = user_msg_text
    nft.save()
    context.bot.send_message(user_chat_id, 'Okay 👌, now wait a minute...')

    # Owner wallet nft
    current_wallet = nft.owner_wallet_nft

    # Pin img for metadata
    pin_img_to_pinata(nft.nft_name, nft.description, f'media/{nft.image}')
    metadata_hash = pin_metadata_to_pinata(nft.nft_name, 'main/nft_services/metadata.json')

    # Do transaction  |  mint NFT
    token_uri = f'https://gateway.pinata.cloud/ipfs/{metadata_hash}'
    hash_nft_transaction = handle_transaction("createNFT",
                                              [token_uri],
                                              current_wallet.public_key,
                                              current_wallet.private_key)

    nft.token = f'https://goerli.etherscan.io/tx/{hash_nft_transaction}'
    nft.save()

    context.bot.send_message(user_chat_id, '🥳    Your nft ready!    🥳')

    current_user.last_message = current_wallet.name
    current_user.status = AFK_STATUS
    current_user.save()


# Set name for nft
def set_nft_name(update, context, current_user):

    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    nft = NFT.objects.get(id=current_user.last_message)

    current_user.last_message = nft.owner_wallet_nft.name
    current_user.save()
    if user_msg_text == '⬅ Back':
        nft.delete()
        current_user.last_message = nft.owner_wallet_nft.name
        current_user.status = USES_ETH_WALLET
        current_user.save()
        return

    nft.nft_name = user_msg_text
    nft.save()

    context.bot.send_message(user_chat_id, '✅    All right😉    ✅\n\nNow write the description for NFT:')

    current_user.last_message = nft.id
    current_user.status = CHOOSES_NFT_DESCRIPTION
    current_user.save()


# Set picture for nft
def set_nft_image(update, context, current_user):
    user_chat_id = update.effective_chat.id

    if update.message.text == '⬅ Back':
        current_user.status = USES_ETH_WALLET
        current_user.save()
        return

    file = context.bot.get_file(update.message.photo[-1])

    nft_image_path = file.file_path
    nft_image_name = nft_image_path[87:]
    if not NFT.objects.filter(image=f'img/{nft_image_name}'):
        with open(os.path.join(settings.MEDIA_ROOT, f'img/{nft_image_name}'), 'wb') as f:
            file.download(out=f)

    current_wallet = Wallet.objects.get(name=current_user.last_message)

    nft = NFT.objects.create(image=f'img/{nft_image_name}',
                             owner_wallet_nft=current_wallet)
    context.bot.send_message(user_chat_id, '✅    Perfectly😏    ✅\n\nNow write the name for NFT:')

    current_user.last_message = nft.id
    current_user.status = CHOOSES_NFT_NAME
    current_user.save()


def set_day_for_transaction_history(update, context, current_user):
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    current_wallet = Wallet.objects.get(name=current_user.last_message)

    if user_msg_text == '⬅ Back':
        current_user.status = USES_ETH_WALLET if current_wallet.cryptocurrency == tokens[0] else USES_BTC_WALLET
        current_user.save()
        return
    reply = reply_markup_eth_wallet if current_wallet.cryptocurrency == tokens[0] else reply_markup_btc_wallet
    context.bot.send_message(chat_id=user_chat_id,
                             text=f'Transaction for selected date:\n{current_user.selected_date}.{user_msg_text}',
                             reply_markup=reply)

    current_user.selected_date += f'.{user_msg_text}'
    current_user.status = USES_ETH_WALLET if current_wallet.cryptocurrency == tokens[0] else USES_BTC_WALLET
    current_user.save()

    # Show all transaction for selected date
    get_all_transaction(update, context, current_user, selected_date=current_user.selected_date)


# Set month for transaction history
def set_month_for_transaction_history(update, context, current_user):
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    current_wallet = Wallet.objects.get(name=current_user.last_message)

    if user_msg_text == '⬅ Back':
        current_user.status = USES_ETH_WALLET if current_wallet.cryptocurrency == tokens[0] else USES_BTC_WALLET
        current_user.save()
        return

    response = date(user_msg_text)
    context.bot.send_message(chat_id=user_chat_id,
                             text=f'Selected date:\n{current_user.selected_date}.{response["selected_month_number"]}'
                                  f'\n\nChoose a day:',
                             reply_markup=response['reply_markup_date'])
    current_user.selected_date += f'.{response["selected_month_number"]}'
    current_user.status = CHOOSES_DAY
    current_user.save()


# Set year for transaction history
def set_year_for_transaction_history(update, context, current_user):
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    current_wallet = Wallet.objects.get(name=current_user.last_message)

    if user_msg_text == '⬅ Back':
        current_user.status = USES_ETH_WALLET if current_wallet.cryptocurrency == tokens[0] else USES_BTC_WALLET
        current_user.save()
        return

    context.bot.send_message(chat_id=user_chat_id,
                             text=f'Selected date:\n{user_msg_text}\n\nChoose a month:',
                             reply_markup=reply_markup_months)
    current_user.selected_date = user_msg_text
    current_user.status = CHOOSES_MONTH
    current_user.save()


# Get transaction history for current wallet
def get_all_transaction(update, context, current_user, quantity=9999, selected_date=None):
    # User
    user_chat_id  = update.effective_chat.id

    # Current wallet
    current_wallet = Wallet.objects.get(name=current_user.last_message)
    transactions   = Transaction.objects.order_by('data_created')

    # Verification of current wallet transactions
    if not transactions.filter(from_wallet=current_wallet.public_key) | transactions.filter(to_wallet=current_wallet.public_key):
        if current_wallet.cryptocurrency == tokens[0]:
            context.bot.send_message(chat_id=user_chat_id,
                                     text=f'😔  There are no transactions for {current_wallet.name} wallet  😔',
                                     reply_markup=reply_markup_eth_wallet)
        elif current_wallet.cryptocurrency == tokens[1]:
            context.bot.send_message(chat_id=user_chat_id,
                                     text=f'😔  There are no transactions for {current_wallet.name} wallet  😔',
                                     reply_markup=reply_markup_btc_wallet)
        return

    transactions = transactions.filter(from_wallet=current_wallet.public_key) | transactions.filter(to_wallet=current_wallet.public_key)

    transactions_date = list()
    if selected_date is not None:
        for transaction in transactions:
            if transaction.data_created.strftime('%Y.%m.%d') == selected_date:
                transactions_date.append(transaction)
        if len(transactions_date) > 0:
            transactions = transactions_date
        else:
            context.bot.send_message(user_chat_id, f'😨    No transactions on this date    😨')
            return
    # Show last 5 transactions
    if len(transactions) > quantity:
        transactions = transactions[:quantity]

    # Iterating each transaction
    for transaction in transactions:
        if current_wallet.public_key == transaction.from_wallet:

            if current_wallet.cryptocurrency == tokens[0]:
                context.bot.send_message(chat_id=user_chat_id,
                                         text=f'📤     To:     📤\n{transaction.to_wallet}\n' +
                                              '{0:.6f} | '.format(transaction.amount) +
                                              '{0:.2f}$\n'.format(transaction.amount / conversion['ETH']) +
                                              f'{transaction.data_created.strftime("%H:%M  %d.%m.%Y")}\n'
                                              f'{transaction.transaction_id}',
                                         reply_markup=reply_markup_back)
            elif current_wallet.cryptocurrency == tokens[1]:
                context.bot.send_message(chat_id=user_chat_id,
                                         text=f'📤     To:     📤\n{transaction.to_wallet}\n' +
                                              '{0:.6f} | '.format(transaction.amount) +
                                              '{0:.2f}$\n'.format(transaction.amount / conversion['BTC']) +
                                              f'{transaction.data_created.strftime("%H:%M  %d.%m.%Y")}\n'
                                              f'{transaction.transaction_id}',
                                         reply_markup=reply_markup_back)

        elif current_wallet.public_key == transaction.to_wallet:
            if current_wallet.cryptocurrency == tokens[0]:
                context.bot.send_message(chat_id=user_chat_id,
                                         text=f'📥     From:     📥\n{transaction.from_wallet}\n' +
                                              '{0:.6f}  |  '.format(transaction.amount) +
                                              '{0:.2f}$\n'.format(transaction.amount / conversion['ETH']) +
                                              f'{transaction.data_created.strftime("%H:%M  %d.%m.%Y")}\n'
                                              f'{transaction.transaction_id}',
                                         reply_markup=reply_markup_back)
            elif current_wallet.cryptocurrency == tokens[1]:
                context.bot.send_message(chat_id=user_chat_id,
                                         text=f'📥     From:     📥\n{transaction.from_wallet}\n' +
                                              '{0:.6f}  |  '.format(transaction.amount) +
                                              '{0:.2f}$\n'.format(transaction.amount / conversion['BTC']) +
                                              f'{transaction.data_created.strftime("%H:%M   %d.%m.%Y")}\n'
                                              f'{transaction.transaction_id}',
                                         reply_markup=reply_markup_back)


# Set amount from bitcoin wallet for transaction
def set_btc_amount_and_do_transaction(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    # Transaction initialization
    transaction = Transaction.objects.get(id=int(current_user.last_message))
    wallet_sender = Wallet.objects.get(public_key=transaction.from_wallet)
    current_user.last_message = wallet_sender.name
    current_user.save()

    if user_msg_text == '⬅ Back':
        transaction.delete()
        current_user.status = USES_BTC_WALLET
        current_user.save()
        return

    elif ',' in user_msg_text:
        context.bot.send_message(user_chat_id, f'❌  Not the correct amount  ❌\n\n'
                                               f'Uncorrect amount  -->  " 0,001 "'
                                               f'Correct amount    -->  " 0.001 "\n\n'
                                               f'Try again:')
    elif float(user_msg_text) > 0:
        # Send transaction
        account = Key(wallet_sender.private_key)
        amount = float(user_msg_text)
        balance = float(account.get_balance())
        if amount > balance:
            context.bot.send_message(user_chat_id, 'The amount is more than the balance')
        result = account.create_transaction(transaction.to_wallet, amount, 'btc')

        transaction.amount = float(amount)
        transaction.data_created = datetime.datetime.now()
        transaction.transaction_id = result
        transaction.save()

        # Successful response
        context.bot.send_message(chat_id=user_chat_id,
                                 text=f'😎  The transaction was completed successfully  😎\n\n'
                                      f'To:\n{transaction.to_wallet}\n\n'
                                      f'Transaction id:\n{result}\n'
                                      f'🕒    {transaction.data_created.strftime("%d.%m.%Y  %H:%M")}    🕘',
                                 reply_markup=reply_markup_btc_wallet)
        # User status
        current_user.status = USES_BTC_WALLET
        current_user.save()
    else:
        context.bot.send_message(chat_id=user_chat_id,
                                 text=f'❌  Not the correct amount  ❌\n\n'
                                      f'Uncorrect amount  -->  " 0,001 "'
                                      f'Correct amount    -->  " 0.001 "\n\n'
                                      f'Try again:')


# Set amount from ethereum wallet for transaction
def set_eth_amount_and_do_transaction(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    # Transaction and wallet
    transaction = Transaction.objects.get(id=int(current_user.last_message))
    wallet_sender = Wallet.objects.get(public_key=transaction.from_wallet)
    current_user.last_message = wallet_sender.name
    current_user.save()

    if user_msg_text == '⬅ Back':
        transaction.delete()
        current_user.status = USES_ETH_WALLET
        current_user.save()
        return

    if ',' in user_msg_text or float(user_msg_text) < 0:
        context.bot.send_message(user_chat_id, f'❌  Not the correct amount  ❌\n\n'
                                               f'Uncorrect amount  -->  " 0,001 "'
                                               f'Correct amount    -->  " 0.001 "\n\n'
                                               f'Try again:')
    elif float(user_msg_text) > w3.eth.get_balance(wallet_sender.public_key) / 10 ** 18:
        context.bot.send_message(user_chat_id, 'The amount is more than the balance')
    else:
        # Send transaction
        transaction.amount = user_msg_text
        transaction.data_created = datetime.datetime.now()

        amount = float(user_msg_text)
        nonce = w3.eth.getTransactionCount(wallet_sender.public_key)

        tx = {
            'nonce': nonce,
            'to': transaction.to_wallet,
            'value': w3.toWei(amount, 'ether'),
            'gas': 21000,
            'gasPrice': w3.eth.gas_price
        }

        signed_tx = w3.eth.account.signTransaction(tx, wallet_sender.private_key)
        tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
        result = w3.toHex(tx_hash)

        transaction.transaction_id = result
        transaction.save()

        # Successful response
        context.bot.send_message(chat_id=user_chat_id,
                                 text=f'😎  The transaction was completed successfully  😎\n\n'
                                      f'To:\n{transaction.to_wallet}\n\n'
                                      f'Transaction id:\n{result}\n'
                                      f'🕒    {transaction.data_created.strftime("%d.%m.%Y  %H:%M")}    🕘',
                                 reply_markup=reply_markup_eth_wallet)
        # User status
        current_user.status = USES_ETH_WALLET
        current_user.last_message = wallet_sender.name
        current_user.save()


# Set address receiver for transaction
def set_eth_address_receiver(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    if user_msg_text == '⬅ Back':
        current_user.status = USES_ETH_WALLET
        current_user.save()
        return

    # Checking for the existence of an address
    if user_msg_text == '💼 My wallets':  # user_msg_text
        pass

    elif len(user_msg_text) != 42 or not user_msg_text[:2] == '0x':
        context.bot.send_message(user_chat_id, f'The wallet address is not valid 😅\n\n'
                                               f'The address must contain 42 characters and starts with " 0x "\n\n'
                                               f'Pay attention to this and try again 😉:')
    elif w3.toChecksumAddress(user_msg_text):
        # Transaction
        wallet = Wallet.objects.get(name=current_user.last_message)

        transaction = Transaction.objects.create(from_wallet=wallet.public_key,
                                                 to_wallet=user_msg_text)
        context.bot.send_message(user_chat_id, f'✅  All right! 🙂  ✅\n\n📝 Now set the amount (example  0.001):')

        # User status
        current_user.status = CHOOSES_ETH_TRANSACTION_AMOUNT
        current_user.last_message = str(transaction.id)
        current_user.save()

    else:
        context.bot.send_message(user_chat_id, f'❌  This wallet address does not exist  ❌\n'
                                               f'Check the address and try again:')


# Set address receiver for transaction
def set_btc_address_receiver(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    # Checking for the existence of an address
    if user_msg_text[0] == '1' or user_msg_text[0] == '3' and len(user_msg_text) != 34:
        context.bot.send_message(user_chat_id, f'Oops! 🫤\nThe wallet address is not valid.\n\n'
                                               f'Must be 34 symbols, try again:')

    elif user_msg_text[:4] == 'bc1q' and len(user_msg_text) != 42:
        context.bot.send_message(user_chat_id, f'Oops! 🫤\nThe wallet address is not valid.\n\n'
                                               f'Must be 42 symbols, try again:')

    elif user_msg_text[:4] == 'bc1p' and len(user_msg_text) != 62:
        context.bot.send_message(user_chat_id, f'Oops! 🫤\nThe wallet address is not valid.\n\n'
                                               f'Must be 62 symbols, try again:')

    elif user_msg_text == '⬅ Back':
        current_user.status = USES_BTC_WALLET
        current_user.save()
        return

    url = f'https://blockchain.info/rawaddr/{user_msg_text}'
    dataframe = pandas.read_json(url)
    if dataframe is not None:
        # Transaction
        wallet = Wallet.objects.get(current_user.last_message)
        transaction = Transaction.objects.create(from_wallet=wallet.public_key,
                                                 to_wallet=user_msg_text)
        context.bot.send_message(user_chat_id, f'✅  All right! 🙂  ✅\n\n📝 Now set the amount:')

        # User status
        current_user.status = CHOOSES_BTC_TRANSACTION_AMOUNT
        current_user.last_message = str(transaction.id)
        current_user.save()
    else:
        context.bot.send_message(user_chat_id, f'❌  Something wrong 🙁  ❌\n'
                                               f'Any bitcoin wallet can only start like this:\n\n'
                                               f'with  "  1   "  -  1N4Qbzg6LSXUXyXu2MDuGfzxwMA7do8AyL\n'
                                               f'with  "  3   "  -  3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy\n\n'
                                               f'with  " bc1q "  -  bc1qfg9t7fwn0atn4yf9spca5502vk8dyhq8a9aqd8\n\n'
                                               f'with  " bc1p "  -  bc1peu5hzzyj8cnqm05le6ag7uwry0ysmtf3v4uuxv3v8hqhvsatca8ss2vuwx\n\n'
                                               f'Now let\'s try again 😉:')


# Provides wallet actions for current user
def provide_wallet_actions(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    if user_msg_text == '⬅ Back to menu':
        current_user.status = AFK_STATUS
        current_user.save()
        return

    # Wallet filtering
    current_wallet = Wallet.objects.get(name=user_msg_text)

    if current_wallet.cryptocurrency == tokens[0]:
        context.bot.send_message(user_chat_id,
                                 f"Select an action for the ' {current_wallet.name} ' 🧐",
                                 reply_markup=reply_markup_eth_wallet)
        current_user.status = USES_ETH_WALLET
        current_user.save()
    else:
        context.bot.send_message(user_chat_id,
                                 f"Select an action for the ' {current_wallet.name} ' 🧐",
                                 reply_markup=reply_markup_btc_wallet)
        current_user.status = USES_BTC_WALLET
        current_user.save()

    current_user.last_message = current_wallet.name
    current_user.save()


# Get all wallet for current user
def get_all_wallets(context, current_user):

    # All wallets of the current user
    wallets = Wallet.objects.filter(telegram_user=current_user)
    for wallet in wallets:
        if wallet.public_key is None:
            wallet.delete()

    current_user.status = CHOOSES_WALLET
    current_user.save()

    # Keyboard for each wallet
    wallet_keyboard = list()

    k = 1
    for i in range(len(wallets)):
        if wallets[i].public_key is None:
            continue
        elif i % 2 == 0:
            wallet_keyboard.append([KeyboardButton(f'{wallets[i].name}')])
        else:
            wallet_keyboard[i - k].append(KeyboardButton(f'{wallets[i].name}'))
            k += 1
    wallet_keyboard.append([KeyboardButton('⬅ Back to menu')])
    reply_markup_current_wallets = ReplyKeyboardMarkup(wallet_keyboard, True, False)
    # Send info about wallet to user

    for wallet in wallets:
        if wallet.cryptocurrency == tokens[0]:
            wallet.balance = w3.eth.get_balance(wallet.public_key) / 10 ** 18
            wallet.dollar_balance = wallet.balance / conversion['ETH']
        else:
            account = Key(wallet.private_key)
            wallet.balance = float(account.get_balance())
            wallet.dollar_balance = wallet.balance / conversion['BTC']

        context.bot.send_message(chat_id=current_user.telegram_id,
                                 text=f'{wallet.name} | {wallet.cryptocurrency}  🤑\n\n' +
                                      f'Address:\n{wallet.public_key}\n\n' +
                                      'Balance: {0:.6f} | '.format(wallet.balance) +
                                      '{0:.2f}$'.format(wallet.dollar_balance),
                                 reply_markup=reply_markup_current_wallets)


# Set name for ethereum wallet
def set_eth_wallet_name(update, context, current_user):

    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    # token = Token.objects.get(id=1)

    # Creation wallet
    if not Wallet.objects.filter(name=user_msg_text):
        wallet = Wallet.objects.create(name=user_msg_text, telegram_user=current_user, cryptocurrency=tokens[0])
        wallet.save()

    # User status
    current_user.status = CHOOSES_ETH_WALLET_SEED
    current_user.last_message = user_msg_text
    current_user.save()

    context.bot.send_message(chat_id=user_chat_id,
                             text=f'✅  Greate! 🙂  ✅\nYour wallet name is  -->  {user_msg_text}\n\n'
                                  f'Now you need to set the seed phrase:',
                             reply_markup=reply_markup_back_to_menu)


# Set seed phrase for ethereum wallet
def set_eth_wallet_seed(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    wallet = Wallet.objects.get(name=current_user.last_message)
    if user_msg_text == '⬅ Back to menu':
        wallet.delete()
        current_user.status = AFK_STATUS
        current_user.save()

    else:
        # Wallet data
        private_key = get_seed(user_msg_text)

        account = w3.eth.account.privateKeyToAccount('0x' + private_key)
        address = account.address

        # Wallet initialization
        wallet.public_key = address
        wallet.private_key = private_key
        wallet.block_number = w3.eth.blockNumber
        wallet.save()

        # User status
        current_user.status = AFK_STATUS
        current_user.save()

        context.bot.send_message(chat_id=user_chat_id,
                                 text=f'✅  Greate! 🙂  ✅\n\nYour wallet seed is  -->  {user_msg_text}\n'
                                      f'{wallet.name} | {wallet.cryptocurrency}  🤑\n\n'
                                      f'Address:\n{wallet.public_key}',
                                 reply_markup=reply_markup_eth_wallet)


# Set name for bitcoin wallet
def set_btc_wallet_name(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    # token = Token.objects.get(id=2)

    # Creation wallet
    if not Wallet.objects.filter(name=user_msg_text):
        wallet = Wallet.objects.create(name=user_msg_text, telegram_user=current_user, cryptocurrency=tokens[1])
        wallet.save()

    # User status
    current_user.status = CHOOSES_BTC_WALLET_SEED
    current_user.last_message = user_msg_text
    current_user.save()

    context.bot.send_message(chat_id=user_chat_id,
                             text=f'✅  Cool 🙂  ✅\n\nYour wallet name is  -->  {user_msg_text}\n\n'
                                  f'Write your seed phrase now:',
                             reply_markup=reply_markup_back_to_menu)


# Set seed phrase for bitcoin wallet
def set_btc_wallet_seed(update, context, current_user):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id

    wallet = Wallet.objects.get(name=current_user.last_message)
    if user_msg_text == '⬅ Back to menu':
        wallet.delete()
        current_user.status = AFK_STATUS
        current_user.save()

    else:
        # Wallet data
        wallet_btc = Key()
        address = wallet_btc.address
        private_key = wallet_btc.to_wif()

        # Wallet initialization
        wallet.public_key = address
        wallet.private_key = private_key
        wallet.block_number = blockcypher.get_latest_block_height()
        wallet.save()

        # User status
        current_user.status = AFK_STATUS
        current_user.save()

        context.bot.send_message(chat_id=user_chat_id,
                                 text=f'✅  Greate! 🙂  ✅\n\nYour wallet seed is  -->  {user_msg_text}\n'
                                      f'{wallet.name} | {wallet.cryptocurrency}  🤑\n\n'
                                      f'Address:\n{wallet.public_key}',
                                 reply_markup=reply_markup_btc_wallet)

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseRedirect
from .nft_services.creation_nft import *
from bit import Key

from .services import *
from .models import *
from .forms import *

import blockcypher
import decimal
import json


def main(request):
    tokens = Token.objects.all()
    if request.method == 'POST':

        login_form = CustomLoginForm(request.POST)
        if login_form.is_valid():
            return redirect('/')

        signup_form = CustomSignupForm(request.POST)
        if signup_form.is_valid():
            return redirect('/')

        creation_form = CreationWalletForm(request.POST)
        if creation_form.is_valid():
            creation_form.save()
            return redirect('/')

        transaction_form = TransactionForm(request.POST)
        if transaction_form.is_valid():

            sender   = str(request.POST.get('from_wallet'))
            receiver = request.POST.get('to_wallet')
            amount   = decimal.Decimal(request.POST.get('amount'))

            wallet = Wallet.objects.get(public_key=sender)
            print(wallet.id)
            w3 = connect_web3()
            if w3.eth.get_balance(sender) > float(request.POST.get('amount')) and sender != receiver and amount > 0:
                # if wallet.cryptocurrency == tokens[0]:
                #     do_eth_transaction(sender, receiver, amount)
                # else:
                #     do_btc_transactions(sender, receiver, amount)
                do_eth_transaction(sender, receiver, amount) if wallet.cryptocurrency == tokens[0] else \
                    do_btc_transactions(sender, receiver, amount)
                return redirect('/')
            return HttpResponseBadRequest('Wrong actions.')

        print(request.FILES)  # this variant
        if request.FILES['image']:
            wallet = Wallet.objects.get(public_key=str(request.POST.get('nft_wallet')))
            nft_form = NFTCreationForm(request.POST, request.FILES)
            if nft_form.is_valid():
                nft_form.save()
                nft = NFT.objects.last()

                nft_wallet_address     = wallet.public_key
                nft_wallet_private_key = wallet.private_key

                nft_name        = request.POST.get('nft_name', '')
                nft_image       = f'media/{nft.image}'
                nft_description = request.POST.get('description')
                print(nft_image)

                pin_img_to_pinata(nft_name, nft_description, nft_image)
                metadata_hash = pin_metadata_to_pinata(nft_name, 'main/nft_services/metadata.json')

                token_uri = f'https://gateway.pinata.cloud/ipfs/{metadata_hash}'
                # print(token_uri)
                hash_nft_transaction = handle_transaction("createNFT", [token_uri], nft_wallet_address, nft_wallet_private_key)

                nft.token = f'https://goerli.etherscan.io/tx/{hash_nft_transaction}'
                nft.owner_wallet_nft = wallet
                nft.save()

                return redirect('/')

        return HttpResponseBadRequest('Something wrong with minting nft')

    else:
        nft_form         = NFTCreationForm()
        login_form       = CustomLoginForm()
        signup_form      = CustomSignupForm()
        creation_form    = CreationWalletForm()
        transaction_form = TransactionForm()

    wallets = wallets_current_user(request.user.id) if request.user else None

    transactions = btc_transactions(tokens[1])

    context = {'nft_form': nft_form,
               'login_form': login_form,
               'signup_form': signup_form,
               'creation_form': creation_form,
               'transaction_form': transaction_form,
               'wallets': wallets,
               'tokens': tokens,
               'transactions': transactions}

    return render(request, 'main/main.html', context)


@login_required
def ajax_post(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        w3 = connect_web3()
        if request.method == 'POST':

            data           = json.load(request)
            name           = data.get('name')
            public_key     = data.get('public_key')
            cryptocurrency = data.get('cryptocurrency')

            if cryptocurrency == 'ETH':
                token        = Token.objects.get(abbreviation=cryptocurrency)
                private_key  = get_seed(public_key)

                account      = w3.eth.account.privateKeyToAccount('0x' + private_key)
                address      = account.address
                block_number = w3.eth.blockNumber

            else:
                token = Token.objects.get(abbreviation=cryptocurrency)

                wallet = Key()
                address = wallet.address
                private_key = wallet.to_wif()

                block_number = blockcypher.get_latest_block_height()

            if Wallet.objects.filter(name=name) or Wallet.objects.filter(public_key=address) and name == '':
                return HttpResponseRedirect(request.META['HTTP_REFERER'])

            user = get_user(request.user.id)
            create_new_wallet(name, address, private_key, user, block_number, token)
            # send_message(name, private_key, user)

            response = {'name': name,
                        'public-key': address}
            return JsonResponse(response)

        elif request.method == 'GET':
            wallet_id = request.GET.get('id')
            response  = {'wallet': wallet_history(wallet_id),
                         'nft': nft_tokens(wallet_id)}
            return JsonResponse(response)

    return HttpResponseBadRequest('Invalid request')

# w3 = connect_web3()
    # print(w3.eth.block_number)
    # print(w3.eth.get_transaction('0x7f385dc52b43059fec2d0336880e9ca052f9d93279c44c8c05b181deb8562585'))

from telegram import KeyboardButton, ReplyKeyboardMarkup

from main.models import Token, Wallet, Transaction, NFT
from .models import TelegramUser
from.calendar import *


tokens = Token.objects.all()

# STATUS Wallet selection
AFK_STATUS      = 'does nothing'
CHOOSES_WALLET  = 'chooses a wallet'
USES_ETH_WALLET = 'uses a Ethereum wallet'
USES_BTC_WALLET = 'uses a Bitcoin wallet'

# ETH
CHOOSES_ETH_WALLET_NAME         = 'chooses wallet name for eth wallet'
CHOOSES_ETH_WALLET_SEED         = 'chooses seed phrases for eth wallet'
CHOOSES_ETH_TRANSACTION_ADDRESS = 'chooses receiver address from eth wallet'
CHOOSES_ETH_TRANSACTION_AMOUNT  = 'chooses the quantity from eth wallet'

# BTC
CHOOSES_BTC_WALLET_NAME         = 'chooses wallet name for btc wallet'
CHOOSES_BTC_WALLET_SEED         = 'chooses seed phrases for btc wallet'
CHOOSES_BTC_TRANSACTION_ADDRESS = 'chooses receiver address from btc wallet'
CHOOSES_BTC_TRANSACTION_AMOUNT  = 'chooses the quantity from btc wallet'

# NFT
CHOOSES_NFT_IMAGE       = 'chooses a picture for nft'
CHOOSES_NFT_NAME        = 'chooses a name for nft'
CHOOSES_NFT_DESCRIPTION = 'chooses a description for nft'

# Transaction history
CHOOSES_TYPE_VIEW = 'chooses the type of view transaction history'
CHOOSES_YEAR      = 'chooses a year'
CHOOSES_MONTH     = 'chooses a month'
CHOOSES_DAY       = 'chooses a day'

# Keyboard
keyboard_wallet_menu     = [[KeyboardButton("➕ Add new wallet")], [KeyboardButton("💼 My wallets")]]

keyboard_create_currency = [[KeyboardButton('Create ETH wallet'), KeyboardButton('Create BTC wallet')],
                            [KeyboardButton('⬅ Back to menu')]]

keyboard_eth_wallet      = [[KeyboardButton("Send Transaction"), KeyboardButton("Transaction history")],
                            [KeyboardButton("Create NFT"), KeyboardButton("My NFTs")],
                            [KeyboardButton('⬅ Back to menu')]]

keyboard_btc_wallet      = [[KeyboardButton("Send Transaction"), KeyboardButton("Transaction history")],
                            [KeyboardButton("⬅ Back to menu")]]

keyboard_history         = [[KeyboardButton("Transaction history")],
                            [KeyboardButton("⬅ Back")]]

keyboard_choose_date     = [[KeyboardButton("All"), KeyboardButton("Last 5")],
                            [KeyboardButton("Select manually")],
                            [KeyboardButton('⬅ Back')]]

keyboard_back_to_menu    = [[KeyboardButton("⬅ Back to menu")]]

keyboard_back            = [[KeyboardButton('⬅ Back')]]

# Markup
reply_markup_wallet          = ReplyKeyboardMarkup(keyboard_wallet_menu, True, False)
reply_markup_create_currency = ReplyKeyboardMarkup(keyboard_create_currency, True, False)
reply_markup_eth_wallet      = ReplyKeyboardMarkup(keyboard_eth_wallet, True, False)
reply_markup_btc_wallet      = ReplyKeyboardMarkup(keyboard_btc_wallet, True, False)
reply_markup_history         = ReplyKeyboardMarkup(keyboard_history, True, False)
reply_markup_choose_date     = ReplyKeyboardMarkup(keyboard_choose_date, True, False)
reply_markup_back_to_menu    = ReplyKeyboardMarkup(keyboard_back_to_menu, True, False)
reply_markup_back            = ReplyKeyboardMarkup(keyboard_back, True, False)


def text_menu(usr_msg_text, current_user):

    menu_text_response    = ''
    reply_markup_response = ''

    if "💼 My wallets" == usr_msg_text:
        menu_text_response = 'Your wallets:'

    elif "➕ Add new wallet" == usr_msg_text:
        menu_text_response = 'Choose a wallet cryptocurrency:'
        reply_markup_response = reply_markup_create_currency

    elif "Create ETH wallet" == usr_msg_text:
        menu_text_response = 'Write the name of your wallet:'
        # menu_text_response = 'Enter the passphrase to generate the wallet address and private key.\n\
        #                         Example -> "pea horse car delegation")'

    elif "Create BTC wallet" == usr_msg_text:
        menu_text_response = 'Write the name of your wallet:'
        # menu_text_response = 'Enter the passphrase to generate the wallet address and private key.\n\
        #                         Example -> "pea horse car delegation")'

    elif "⬅ Back to menu" == usr_msg_text:
        menu_text_response = 'Choose one of the options:'
        reply_markup_response = reply_markup_wallet

    elif "Send Transaction" == usr_msg_text:
        menu_text_response = "📄 Write the address of the wallet to which the transfer will be made" \
                             "(address starts with ' 0x '):"
        reply_markup_response = reply_markup_back

    elif "Transaction history" == usr_msg_text:
        current_wallet = Wallet.objects.get(name=current_user.last_message)
        menu_text_response = f'Your {current_wallet.name}\'s transactions:'
        reply_markup_response = reply_markup_choose_date

    elif "Select manually" == usr_msg_text:
        menu_text_response = f'Choose a year:'
        reply_markup_response = reply_markup_years

    elif "Create NFT" == usr_msg_text:
        menu_text_response = 'Send me a photo to create a NFT'
        reply_markup_response = reply_markup_back

    elif "My NFTs" == usr_msg_text:
        current_wallet = Wallet.objects.get(name=current_user.last_message)
        menu_text_response = f'Your {current_wallet.name}\'s NFTs:'
        reply_markup_response = reply_markup_back

    elif '⬅ Back' == usr_msg_text:
        current_wallet = Wallet.objects.get(name=current_user.last_message)
        if current_wallet.cryptocurrency == tokens[0]:
            menu_text_response = f"Select an action for the ' {current_wallet.name} ' 🧐"
            reply_markup_response = reply_markup_eth_wallet

        elif current_wallet.cryptocurrency == tokens[1]:
            menu_text_response = f"Select an action for the ' {current_wallet.name} ' 🧐"
            reply_markup_response = reply_markup_btc_wallet

    return {'menutextresponse': menu_text_response, 'replymarkupresponse': reply_markup_response}

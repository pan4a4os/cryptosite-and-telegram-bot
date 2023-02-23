from django.conf import settings
from telegram.ext import *
from telegram import *

from main.models import Token, Wallet, Transaction, NFT
from .nft_services import *
from .models import TelegramUser
from .menu import *

import logging


telegram_settings = settings.TELEGRAM
updater = Updater(token=telegram_settings['bot_token'])
dispatcher = updater.dispatcher

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# Create User keyboard, resize = true, auto hide = false


# Create models in db for users
def start(update: Update, context: CallbackContext):
    # User data
    telegram_user_id = update.message.from_user.id
    user_nickname = update.message.from_user.name
    user_first_name = update.message.from_user.first_name
    user_last_name = update.message.from_user.last_name if update.message.from_user.last_name else None

    # First message after /start
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text='Welcome to my bot!',
                             reply_markup=reply_markup_wallet)

    # Verification of the user's last name
    if not TelegramUser.objects.filter(telegram_id=telegram_user_id):
        TelegramUser.objects.create(telegram_id=telegram_user_id,
                                    nickname=user_nickname,
                                    first_name=user_first_name) if user_last_name is None else \
            TelegramUser.objects.create(telegram_id=telegram_user_id,
                                        nickname=user_nickname,
                                        first_name=user_first_name,
                                        last_name=user_last_name)
    # User
    user = TelegramUser.objects.get(telegram_id=update.effective_chat.id)
    user.status = AFK_STATUS
    user.save()


# Main functionality
def filter_text_input(update, context):
    # User
    user_msg_text = update.message.text
    user_chat_id  = update.effective_chat.id
    user = TelegramUser.objects.get(telegram_id=user_chat_id)

    # string for response
    text_response = ''

    # to work with a text request
    dict_to_request = text_menu(user_msg_text, user)

    # if there is a reply_markup keyboard in a response from function - it's a menu request
    text_response = str(dict_to_request['menutextresponse']) if dict_to_request['menutextresponse'] else None

    # Wallet Status
    if user.status == CHOOSES_ETH_WALLET_NAME:
        set_eth_wallet_name(update, context, user)

    elif user.status == CHOOSES_BTC_WALLET_NAME:
        set_btc_wallet_name(update, context, user)

    elif user.status == CHOOSES_ETH_WALLET_SEED:
        set_eth_wallet_seed(update, context, user)

    elif user.status == CHOOSES_BTC_WALLET_SEED:
        set_btc_wallet_seed(update, context, user)

    elif user.status == CHOOSES_WALLET:
        provide_wallet_actions(update, context, user)

    # Transaction status
    elif user.status == CHOOSES_ETH_TRANSACTION_ADDRESS:
        set_eth_address_receiver(update, context, user)

    elif user.status == CHOOSES_BTC_TRANSACTION_ADDRESS:
        set_btc_address_receiver(update, context, user)

    elif user.status == CHOOSES_ETH_TRANSACTION_AMOUNT:
        set_eth_amount_and_do_transaction(update, context, user)

    elif user.status == CHOOSES_BTC_TRANSACTION_AMOUNT:
        set_btc_amount_and_do_transaction(update, context, user)

    # Transaction history date

    elif user.status == CHOOSES_YEAR:
        set_year_for_transaction_history(update, context, user)

    elif user.status == CHOOSES_MONTH:
        set_month_for_transaction_history(update, context, user)

    elif user.status == CHOOSES_DAY:
        set_day_for_transaction_history(update, context, user)

    # NFT status
    elif user.status == CHOOSES_NFT_IMAGE:
        set_nft_image(update, context, user)

    elif user.status == CHOOSES_NFT_NAME:
        set_nft_name(update, context, user)

    elif user.status == CHOOSES_NFT_DESCRIPTION:
        set_nft_description_and_mint_nft(update, context, user)

    # Back to manu
    if user_msg_text == '⬅ Back to menu':
        user.status = AFK_STATUS
        user.save()

    # User text messages
    if user_msg_text == 'Create ETH wallet':
        user.status = CHOOSES_ETH_WALLET_NAME
        user.save()

    elif user_msg_text == 'Create BTC wallet':
        user.status = CHOOSES_BTC_WALLET_NAME
        user.save()

    elif user_msg_text == 'Send Transaction':

        if user.status == USES_ETH_WALLET:
            user.status = CHOOSES_ETH_TRANSACTION_ADDRESS
            user.save()
        else:
            user.status = CHOOSES_BTC_TRANSACTION_ADDRESS
            user.save()

    elif user_msg_text == 'Transaction history':
        if user.status == USES_ETH_WALLET or user.status == USES_BTC_WALLET:
            user.status = CHOOSES_TYPE_VIEW
            user.save()
    # Select date status
    elif user_msg_text == 'Select manually':
        if user.status == CHOOSES_TYPE_VIEW:
            user.status = CHOOSES_YEAR
            user.save()

    elif user_msg_text == 'Create NFT':
        user.status = CHOOSES_NFT_IMAGE
        user.save()

    # The corresponding menu
    if text_response is not None:
        context.bot.send_message(user_chat_id,
                                 text_response,
                                 parse_mode="Markdown",
                                 reply_markup=dict_to_request['replymarkupresponse'])

    # All wallet for current user
    if user_msg_text == '💼 My wallets':
        if Wallet.objects.filter(telegram_user=user):
            get_all_wallets(context, user)
        else:
            context.bot.send_message(user_chat_id, f'You don\'t have a wallet\n\nPlease create it  😉')

    elif user_msg_text == 'My NFTs':
        get_all_nfts(update, context, user)

    elif user_msg_text == 'All':
        get_all_transaction(update, context, user)

    elif user_msg_text == 'Last 5':
        get_all_transaction(update, context, user, 5)


# Run the bot
def start_bot():

    start_handler = CommandHandler('start', start)
    text_update_handler = MessageHandler(Filters.text | Filters.photo, filter_text_input, run_async=True)

    dispatcher.add_handler(start_handler)
    dispatcher.add_handler(text_update_handler)

    updater.start_polling()
    updater.idle()

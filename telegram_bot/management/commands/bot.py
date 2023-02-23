from django.core.management.base import BaseCommand
from telegram_bot.views import start_bot


class Command(BaseCommand):
    help = 'Implemented to Django application telegram bot setup command'

    def handle(self, *args, **kwargs):
        start_bot()

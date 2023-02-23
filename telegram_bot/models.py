from django.db import models


class TelegramUser(models.Model):
    telegram_id   = models.IntegerField()
    nickname      = models.CharField(max_length=64)
    first_name    = models.CharField(max_length=64)
    last_name     = models.CharField(max_length=64, blank=True)
    status        = models.CharField(max_length=128, blank=True)
    last_message  = models.CharField(max_length=256, blank=True, null=True)
    selected_date = models.CharField(max_length=32, null=True, blank=True)

    def __str__(self):
        return f'{self.first_name}, {self.telegram_id}'

from django.contrib.auth.models import User
from django.db import models
from telegram_bot.models import TelegramUser


class UserProfile(models.Model):
    user   = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(default='media/img/avatar.jpg', upload_to='img')

    def __str__(self):
        return str(self.user)


class Token(models.Model):
    abbreviation = models.CharField(max_length=8)
    name         = models.CharField(max_length=32)

    def __str__(self):
        return f'{self.abbreviation}'


class Wallet(models.Model):
    name           = models.CharField(max_length=64)
    public_key     = models.CharField(max_length=128, null=True, blank=True)
    private_key    = models.CharField(max_length=128, null=True, blank=True)
    user           = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    telegram_user  = models.ForeignKey(TelegramUser, on_delete=models.CASCADE, null=True, blank=True)
    block_number   = models.IntegerField(blank=True, default=0)
    cryptocurrency = models.ForeignKey(Token, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.name}, {self.cryptocurrency}'


class Transaction(models.Model):
    from_wallet    = models.CharField(max_length=128)
    to_wallet      = models.CharField(max_length=128)
    amount         = models.FloatField(default=0, null=True, blank=True)
    transaction_id = models.CharField(max_length=66, null=True, blank=True)
    data_created   = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return '{0:.6f}'.format(self.amount)


class NFT(models.Model):
    nft_name          = models.CharField(max_length=64, null=True, blank=True)
    description       = models.TextField(max_length=512, null=True, blank=True)
    token             = models.CharField(max_length=128, null=True, blank=True)
    image             = models.ImageField(upload_to='img', null=True, blank=True)
    owner_wallet_nft  = models.ForeignKey(Wallet, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return f'{self.nft_name} --- {self.owner_wallet_nft}'

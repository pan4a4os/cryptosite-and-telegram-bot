from django.contrib import admin
from .models import *


admin.site.register(UserProfile)
admin.site.register(Wallet)
admin.site.register(Transaction)
admin.site.register(Token)
admin.site.register(NFT)

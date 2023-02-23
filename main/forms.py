from django.forms import ModelForm, TextInput, PasswordInput, NumberInput, FileInput
from django import forms

from .models import Wallet, Transaction, NFT


class CustomLoginForm(forms.Form):
    login    = forms.CharField(widget=TextInput(attrs={"class": "input", 'placeholder': 'Enter your nickname'}))
    password = forms.CharField(widget=PasswordInput(attrs={"class": "input", 'placeholder': 'Enter your password'}))


class CustomSignupForm(forms.Form):
    username  = forms.CharField(widget=TextInput(attrs={"class": "input", 'placeholder': 'nickname'}))
    email     = forms.EmailField(widget=TextInput(attrs={'class': 'input', 'placeholder': 'email'}))
    password1 = forms.CharField(widget=PasswordInput(attrs={"class": "input", 'placeholder': 'password'}))
    password2 = forms.CharField(widget=PasswordInput(attrs={"class": "input", 'placeholder': 'password(again)'}))


class CreationWalletForm(ModelForm):
    class Meta:
        model  = Wallet
        fields = ('name', 'public_key', 'private_key')

        widgets = {
            'name': TextInput(attrs={"class": "input", 'placeholder': 'name'}),
            'public_key': TextInput(attrs={"class": "input", 'placeholder': 'special words'}),
            'private_key': TextInput(attrs={"class": "input", 'placeholder': 'private key'}),
        }


class TransactionForm(ModelForm):
    class Meta:
        model  = Transaction
        fields = ('to_wallet', 'amount')

        widgets = {
            'to_wallet': TextInput(attrs={"class": "input", 'placeholder': '0x0000000000000000000000000000000000000000'}),
            'amount': NumberInput(attrs={'class': 'input', 'placeholder': 'amount'})
        }


class NFTCreationForm(ModelForm):
    class Meta:
        model = NFT
        fields = ('nft_name', 'description', 'image')

        widgets = {
            'nft_name': TextInput(attrs={"class": "input", 'placeholder': 'Name'}),
            'description': TextInput(attrs={"class": "input", 'placeholder': 'Description'}),
            'image': FileInput(attrs={"class": "input", 'placeholder': 'Choose file', 'onchange': 'preview_image(event)'})
        }

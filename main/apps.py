from django.apps import AppConfig


class AuthenticationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

    # def ready(self):
    #     from . import services
    #     services.start()

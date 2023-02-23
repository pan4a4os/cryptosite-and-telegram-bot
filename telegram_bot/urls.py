from django.conf.urls.static import static
from django.conf import settings

app_name = 'telegram_bot'


urlpatterns = [

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

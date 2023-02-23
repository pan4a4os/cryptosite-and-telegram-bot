from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from .views import main, ajax_post

app_name = 'main'

urlpatterns = [
    path('', main, name='main'),
    path('ajax/', ajax_post),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

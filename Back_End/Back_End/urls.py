# Back_End/urls.py
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView  # Importa esto

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v2/', include('users.urls')),
    path('', RedirectView.as_view(url='/api/v2/', permanent=False)),  # Redirige la ruta raíz
]

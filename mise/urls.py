from django.urls import path, include
from rest_framework import routers
from mise import views

#API Versioning

router = routers.DefaultRouter()
router.register(r'mise', views.PruevaView, 'pruebas')

urlpatterns = [
    path("api/v1/", include(router.urls))
]
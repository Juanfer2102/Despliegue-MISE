from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from users import views

router = routers.DefaultRouter()

urlpatterns = [
    path('login', views.login)
]
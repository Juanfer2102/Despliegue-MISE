from django.shortcuts import render
from rest_framework import viewsets
from .serializer import MiseSerializer
from .models import prueba

# Create your views here.

class PruevaView(viewsets.ModelViewSet):
    
    serializer_class = MiseSerializer

    queryset = prueba.objects.all()
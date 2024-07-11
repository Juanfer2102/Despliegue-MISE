from django.shortcuts import render
from rest_framework import viewsets
from .serializer import MiseSerializer
from .models import Coordinador, Director, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Sueños, Talleres, Usuario

# Create your views here.

class PruevaView(viewsets.ModelViewSet):
    
    serializer_class = MiseSerializer

    queryset = Coordinador.objects.all()
    queryset = Director.objects.all()
    queryset = Empresas.objects.all()
    queryset = Modulos.objects.all()
    queryset = Postulante.objects.all()
    queryset = Preguntas.objects.all()
    queryset = Programas.objects.all()
    queryset = Registros.objects.all()
    queryset = Rol.objects.all()
    queryset = Sueños.objects.all()
    queryset = Talleres.objects.all()
    queryset = Usuario.objects.all()
from rest_framework import serializers
from .models import Coordinador, Director, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Sueños, Talleres, Usuario

class MiseSerializer(serializers. ModelSerializer):
    class Meta:
        # fields = ('id', 'title', 'description', 'done')

        model = Coordinador, Director, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Sueños, Talleres, Usuario
        fields = '__all__'


from rest_framework import serializers
from .models import Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Sueños, Talleres, Usuario

class EmpresasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresas
        fields = '__all__'

class ModulosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modulos
        fields = '__all__'

class PostulanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postulante
        fields = '__all__'

class PreguntasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preguntas
        fields = '__all__'

class ProgramasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programas
        fields = '__all__'

class RegistrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registros
        fields = '__all__' 
class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class SueñosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sueños
        fields = '__all__'

class TalleresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talleres
        fields = '__all__'
       
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'



from rest_framework import serializers
from .models import Autoevaluacion, Calificaciones, Diagnostico1, Modulo1, Respuesta1, CalificacionModulo, ModuloAutoevaluacion, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Suenos, Talleres, Usuario


class CalificacionPreguntaSerializer(serializers.ModelSerializer):
    descripcion_pregunta = serializers.CharField(source='id_pregunta.descripcion', read_only=True)
    
    class Meta:
        model = Calificaciones
        fields = ['id', 'calificacion', 'criterio', 'descripcion_pregunta']

class CalificacionesPreguntasSerializer(serializers.ModelSerializer):
    descripcion_pregunta = serializers.CharField(source='id_pregunta.descripcion', read_only=True)
    
    class Meta:
        model = Calificaciones
        fields = ['id', 'calificacion', 'criterio', 'nit', 'id_pregunta', 'descripcion_pregunta']

class CalificacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calificaciones
        fields = '__all__'


class Respuesta1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Respuesta1
        fields = ['pregunta', 'calificacion', 'comentarios']

class Diagnostico1Serializer(serializers.ModelSerializer):
    respuestas1 = Respuesta1Serializer(many=True, read_only=True)
    promedio_modulo = serializers.SerializerMethodField()

    class Meta:
        model = Diagnostico1
        fields = ['empresa', 'modulo1', 'fecha', 'observaciones', 'respuestas1', 'promedio_modulo']
    
    def get_promedio_modulo(self, obj):
        return obj.promedio_modulo

class ModuloSerializer(serializers.ModelSerializer):
    calificaciones = serializers.SerializerMethodField()
    nombre = serializers.CharField(source='modulos.nombre', read_only=True)

    class Meta:
        model = Modulos
        fields = ['id_modulo', 'nombre', 'calificacion_promedio', 'criterio', 'calificaciones']

    def get_calificaciones(self, obj):
        calificaciones = Calificaciones.objects.filter(
            id_pregunta__id_modulo=obj.id_modulo,
            nit=self.context['nit']
        )
        return PreguntasSerializer(calificaciones, many=True).data

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
    descripcion_pregunta = serializers.CharField(source='id_pregunta.descripcion', read_only=True)
    
    class Meta:
        model = Calificaciones
        fields = ['id', 'calificacion', 'criterio', 'nit', 'id_pregunta', 'descripcion_pregunta']

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

class SuenosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suenos
        fields = '__all__'

class TalleresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talleres
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Usuario
        fields = '__all__'
        #extra_kwargs = {'contrasena': {'write_only': True}} (LA CONTRASEÑA NO SEA ENVIADA)
    
    def create(self, validated_data):
        usuario = Usuario(**validated_data)
        usuario.set_password(validated_data['contrasena'])
        usuario.save()
        
        return usuario
    
    def update(self, instance, validated_data):
        
        if 'contrasena' in validated_data:
            instance.set_password(validated_data['contrasena'])
            validated_data.pop('contrasena', None)
            
        return super().update(instance, validated_data)
class ModuloAutoevaluacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuloAutoevaluacion
        fields = '__all__'

class CalificacionModuloSerializer(serializers.ModelSerializer):
    # Usa solo los IDs en lugar de los detalles completos
    id_autoevaluacion = serializers.PrimaryKeyRelatedField(queryset=Autoevaluacion.objects.all())
    id_modulo = serializers.PrimaryKeyRelatedField(queryset=ModuloAutoevaluacion.objects.all())

    class Meta:
        model = CalificacionModulo
        fields = ['id_calificacion', 'calificacion', 'comentarios', 'id_autoevaluacion', 'id_modulo']

class AutoevaluacionSerializer(serializers.ModelSerializer):
    calificaciones = CalificacionModuloSerializer(many=True, read_only=True)

    class Meta:
        model = Autoevaluacion
        fields = '__all__'


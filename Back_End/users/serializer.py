
from rest_framework import serializers
from .models import Temas, TemasPreguntas, Autoevaluacion, DiagnosticoEmpresarialSuenos, Calificaciones, Diagnostico1, Modulo1, Respuesta1, CalificacionModulo, ModuloAutoevaluacion, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Suenos, Talleres, Usuario


class DiagnosticoEmpresarialSuenosSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiagnosticoEmpresarialSuenos
        fields = ['diagnostico', 'sueno']

class CalificacionPreguntaSerializer(serializers.ModelSerializer):
    descripcion_pregunta = serializers.CharField(source='id_pregunta.descripcion', read_only=True)
    
    class Meta: 
        model = Calificaciones
        fields = ['id', 'calificacion', 'criterio', 'descripcion']

class CalificacionesPreguntasSerializer(serializers.ModelSerializer):
    descripcion_pregunta = serializers.CharField(source='id_pregunta.descripcion', read_only=True)
    
    class Meta:
        model = Calificaciones
        fields = ['id', 'calificacion', 'nit', 'id_pregunta', 'descripcion_pregunta']

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


class TemasPreguntasSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemasPreguntas
        fields = ['id_pregunta']

class TemasPreguntasSerializer(serializers.ModelSerializer):
    id_pregunta = serializers.PrimaryKeyRelatedField(queryset=Preguntas.objects.all(), write_only=True)

    class Meta:
        model = TemasPreguntas
        fields = ['id_pregunta']


class TemasSerializer(serializers.ModelSerializer):
    preguntas = TemasPreguntasSerializer(many=True, write_only=True)

    class Meta:
        model = Temas
        fields = ['id', 'id_modulo', 'titulo_formacion', 'num_sesion', 'objetivo', 'alcance', 'contenido', 'conferencista', 'fecha', 'horario', 'ubicacion', 'preguntas']

    def create(self, validated_data):
        preguntas_data = validated_data.pop('preguntas', [])
        tema = Temas.objects.create(**validated_data)
        for pregunta_data in preguntas_data:
            TemasPreguntas.objects.create(id_tema=tema, **pregunta_data)
        return tema

    def update(self, instance, validated_data):
        preguntas_data = validated_data.pop('preguntas', [])
        instance = super().update(instance, validated_data)
        TemasPreguntas.objects.filter(id_tema=instance).delete()
        for pregunta_data in preguntas_data:
            TemasPreguntas.objects.create(id_tema=instance, **pregunta_data)
        return instance

class PreguntasSerializer(serializers.ModelSerializer):
    calificacion = serializers.SerializerMethodField()

    class Meta:
        model = Preguntas
        fields = ['id_pregunta', 'descripcion', 'id_modulo', 'calificacion']

    def get_calificacion(self, obj):
        # Obtiene la calificación más reciente o la que necesites de la tabla Calificaciones
        calificacion = Calificaciones.objects.filter(id_pregunta=obj).order_by('-id').first()
        if calificacion:
            return calificacion.calificacion
        return None  # Retorna None si no hay calificación para la pregunta
    
class ModulosSerializer(serializers.ModelSerializer):
    calificaciones = serializers.SerializerMethodField()
    preguntas = PreguntasSerializer(many=True, read_only=True)

    class Meta:
        model = Modulos
        fields = ['id_modulo', 'nombre', 'objetivo', 'observaciones', 'alcance', 'estado_actual', 'nivel_ideal', 'calificaciones', 'preguntas']

    def get_calificaciones(self, obj):
        # Este método puede estar realizando alguna lógica que no es necesario cambiar,
        # pero asegúrate de que `self.context['nit']` esté disponible o modifica según sea necesario.
        calificaciones = Calificaciones.objects.filter(
            id_pregunta__id_modulo=obj.id_modulo,
            nit=self.context.get('nit')
        )
        return calificaciones.values()  # Ajusta según cómo quieras retornar las calificaciones
    
    def create(self, validated_data):
        preguntas_data = validated_data.pop('preguntas', [])
        modulo = Modulos.objects.create(**validated_data)
        for pregunta_data in preguntas_data:
            Preguntas.objects.create(id_modulo=modulo, **pregunta_data)
        return modulo

    def update(self, instance, validated_data):
        preguntas_data = validated_data.pop('preguntas', None)
        instance.nombre = validated_data.get('nombre', instance.nombre)
        instance.save()

        if preguntas_data is not None:
            # Aquí puedes actualizar o crear preguntas asociadas
            for pregunta_data in preguntas_data:
                pregunta_id = pregunta_data.get('id_pregunta')
                if pregunta_id:  # Si la pregunta ya existe, actualiza
                    pregunta = Preguntas.objects.get(id_pregunta=pregunta_id)
                    pregunta.descripcion = pregunta_data.get('descripcion', pregunta.descripcion)
                    pregunta.save()
                else:  # Si no existe, crea una nueva pregunta
                    Preguntas.objects.create(id_modulo=instance, **pregunta_data)
        
        return instance

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


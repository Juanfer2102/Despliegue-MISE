from django.shortcuts import render, get_object_or_404
from .models import TemasPreguntas, DiagnosticoEmpresarial, Diagnostico1, Calificaciones, Escalas, Diagnostico, Modulo1, Respuesta1, Autoevaluacion, CalificacionModulo, ModuloAutoevaluacion, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Suenos, Talleres, Usuario
from .serializer import CalificacionPreguntaSerializer, CalificacionesPreguntasSerializer, Diagnostico1Serializer, CalificacionesSerializer, AutoevaluacionSerializer, CalificacionModuloSerializer, ModuloAutoevaluacionSerializer, UsuarioSerializer, EmpresasSerializer, ModulosSerializer, PostulanteSerializer, PreguntasSerializer, ProgramasSerializer, RegistrosSerializer, RolSerializer, SuenosSerializer, TalleresSerializer 
from rest_framework import status, generics, serializers, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from datetime import datetime


from weasyprint import HTML
import io
from django.http import HttpResponse

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import get_user_model, authenticate

from rest_framework_simplejwt.tokens import RefreshToken, UntypedToken

from rest_framework.views import APIView

from django.db import connection
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

class CalificacionesBajasPorNitView(APIView):
    def get(self, request, *args, **kwargs):
        nit = kwargs.get('nit')
        
        if not nit:
            return Response({"error": "NIT no proporcionado"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Filtrar todas las calificaciones con valor menor a 50
        calificaciones_bajas = Calificaciones.objects.filter(
            nit=nit,
            calificacion__lt=50
        ).select_related('id_pregunta')
        
        # Obtener los módulos asociados a las preguntas con calificación menor a 50
        modulos_ids = Preguntas.objects.filter(
            id_pregunta__in=calificaciones_bajas.values_list('id_pregunta', flat=True)
        ).values_list('id_modulo_id', flat=True).distinct()  # Usar id_modulo_id
        
        # Filtrar DiagnosticoEmpresarial para obtener módulos que tienen preguntas con calificación menor a 50
        modulos_diagnostico = DiagnosticoEmpresarial.objects.filter(
            nit=nit,
            id_modulo_id__in=modulos_ids  # Usar id_modulo_id
        ).select_related('id_modulo')
        
        # Construir la respuesta
        response_data = []
        
        for diagnostico in modulos_diagnostico:
            modulo = diagnostico.id_modulo
            preguntas_modulo = Preguntas.objects.filter(
                id_modulo=modulo
            ).select_related('id_modulo')
            
            preguntas_data = []
            for pregunta in preguntas_modulo:
                calificaciones_pregunta = Calificaciones.objects.filter(
                    id_pregunta=pregunta, nit=nit, calificacion__lt=50
                )
                
                for calificacion in calificaciones_pregunta:
                    # Obtener la información del tema relacionado a la pregunta
                    tema_info = {}
                    tema_pregunta = TemasPreguntas.objects.filter(id_pregunta=pregunta).select_related('id_tema').first()
                    if tema_pregunta:
                        tema = tema_pregunta.id_tema
                        tema_info = {
                            "id_tema": tema.id,
                            "titulo_formacion": tema.titulo_formacion,
                            "num_sesion": tema.num_sesion,
                            "objetivo": tema.objetivo,
                            "alcance": tema.alcance,
                            "contenido": tema.contenido,
                            "conferencista": tema.conferencista,
                            "fecha": tema.fecha,
                            "horario": tema.horario,
                            "ubicacion": tema.ubicacion
                        }

                    preguntas_data.append({
                        "id": calificacion.id,
                        "calificacion": calificacion.calificacion,
                        "criterio": calificacion.criterio,
                        "nit": calificacion.nit.nit,
                        "id_pregunta": calificacion.id_pregunta.id_pregunta,
                        "descripcion_pregunta": pregunta.descripcion,
                        "tema": tema_info  # Agregar la información del tema, si existe
                    })
            
            # Solo añadir el módulo a la respuesta si tiene preguntas con calificación menor a 50
            if preguntas_data:
                # Agregar información de sueños para el módulo
                suenos_modulo = Suenos.objects.filter(modulo_id=modulo.id_modulo).values(
                    'nivel', 'sueño', 'medicion', 'fortalecimiento', 'evidencia'
                )
                
                response_data.append({
                    "id_modulo": modulo.id_modulo,
                    "nombre": modulo.nombre,
                    "calificacion_promedio": diagnostico.calificacion_promedio,
                    "criterio": diagnostico.criterio,
                    "preguntas": preguntas_data,
                    "suenos": list(suenos_modulo)  # Añadir sueños del módulo
                })
        
        return Response(response_data, status=status.HTTP_200_OK)
    


    
class CalificacionesPorNitView(APIView):
    def get(self, request, nit, *args, **kwargs):
        # Obtener todos los módulos relacionados con las calificaciones de la empresa
        modulos = Modulos.objects.filter(
            preguntas__calificaciones__nit=nit
        ).distinct()

        diagnosticos = DiagnosticoEmpresarial.objects.filter(
            nit=nit,
            id_modulo__in=modulos
        )

        modulos_info = []
        for modulo in modulos:
            diagnostico = diagnosticos.filter(id_modulo=modulo.id_modulo).first()
            modulos_info.append({
                'id_modulo': modulo.id_modulo,
                'nombre': modulo.nombre,
                'calificacion_promedio': diagnostico.calificacion_promedio if diagnostico else None,
                'criterio': diagnostico.criterio if diagnostico else None,
                'preguntas': PreguntasSerializer(
                    Calificaciones.objects.filter(id_pregunta__id_modulo=modulo.id_modulo, nit=nit),
                    many=True,
                    context={'nit': nit}
                ).data
            })

        return Response(modulos_info, status=status.HTTP_200_OK)
class CalificacionesListView(generics.ListAPIView):
    queryset = Calificaciones.objects.select_related('id_pregunta').all()
    serializer_class = CalificacionesPreguntasSerializer

class CalificacionesViewSet(generics.ListCreateAPIView):
    queryset = Calificaciones.objects.all()
    serializer_class = CalificacionesSerializer
class SaveCalificacionView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        print(data)  # Para depuración, puedes eliminarlo más tarde

        # Verificar que los datos sean una lista
        if isinstance(data, list):
            for item in data:
                try:
                    # Obtener y validar los campos necesarios
                    calificacion = float(item.get('calificacion', 0))  # Convertir calificación a float
                    id_pregunta = item.get('id_pregunta')
                    nit = item.get('nit')

                    # Validar que se envíen todos los campos requeridos
                    if not id_pregunta or not nit:
                        return Response({"error": "Faltan campos requeridos"}, status=status.HTTP_400_BAD_REQUEST)

                    # Validar y obtener la pregunta
                    pregunta = get_object_or_404(Preguntas, id_pregunta=id_pregunta)

                    # Validar y obtener la empresa
                    empresa = get_object_or_404(Empresas, nit=nit)

                    # Crear y guardar la calificación
                    calificacion_obj = Calificaciones.objects.create(
                        calificacion=calificacion,
                        id_pregunta=pregunta,
                        nit=empresa
                    )

                    # La lógica de actualización del promedio se maneja automáticamente en el modelo
                    calificacion_obj.save()

                except ValueError:
                    return Response({"error": "Calificación inválida, debe ser un número"}, status=status.HTTP_400_BAD_REQUEST)
                except Exception as e:
                    # Capturar cualquier otro error
                    return Response({"error": f"Error al procesar la solicitud: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({"message": "Calificaciones guardadas con éxito"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "Formato de datos incorrecto, se esperaba una lista"}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def registrar_calificacion(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            nit = data['nit']
            id_pregunta = data['id_pregunta']
            calificacion = data['calificacion']

            # Validar los datos aquí si es necesario

            calificacion_obj = Calificaciones.objects.create(
                nit=nit,
                id_pregunta_id=id_pregunta,
                calificacion=calificacion
            )

            return JsonResponse({
                'success': True,
                'message': 'Calificación registrada correctamente',
            })
        except KeyError as e:
            return JsonResponse({
                'success': False,
                'message': f'Faltan datos: {str(e)}'
            }, status=400)
        except Exception as e:
            return JsonResponse({
                'success': False,
                'message': str(e)
            }, status=500)
    else:
        return JsonResponse({
            'success': False,
            'message': 'Método no permitido'
        }, status=405)

def calcular_promedio_calificaciones(nit, id_modulo):
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT AVG(calificacion) as promedio
            FROM calificaciones
            WHERE nit = %s AND id_pregunta IN (
                SELECT id_pregunta FROM preguntas WHERE id_modulo = %s
            );
        """, [nit, id_modulo])
        row = cursor.fetchone()
    return row[0]  # Promedio de las calificaciones

def generar_diagnostico(request, nit, id_modulo):
    try:
        empresa = Empresas.objects.get(nit=nit)
        modulo = Modulos.objects.get(id_modulo=id_modulo)
    except Empresas.DoesNotExist:
        return JsonResponse({'error': 'Empresa no encontrada'}, status=404)
    except Modulos.DoesNotExist:
        return JsonResponse({'error': 'Módulo no encontrado'}, status=404)

    promedio = calcular_promedio_calificaciones(nit, id_modulo)

    if promedio is None:
        return JsonResponse({'error': 'No hay calificaciones disponibles'}, status=404)

    escala = Escalas.objects.filter(id_modulo=id_modulo, rango_minimo__lte=promedio, rango_maximo__gte=promedio).first()

    if escala:
        estado = escala.nombre
    else:
        estado = 'No definido'

    Diagnostico.objects.create(
        nit=empresa,
        id_modulo=modulo,
        promedio=promedio,
        estado=estado
    )

    return JsonResponse({
        'modulo': id_modulo,
        'promedio': promedio,
        'estado': estado
    })


@api_view(['POST'])
def login(request):
    try:
        correo = request.data.get('correo')
        contrasena = request.data.get('contrasena')
        print(f"Correo: {correo}, Contraseña: {contrasena}")

        try:
            user = Usuario.objects.filter(correo=correo).first()
        except Exception as e:
            print(f"Error al buscar usuario en la base de datos: {e}")
            print(f"Campos disponibles en Usuario: {[field.name for field in Usuario._meta.get_fields()]}")
            return Response({'error': 'Error al buscar usuario en la base de datos'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        if user is None:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            if not user.check_password(contrasena):
                return Response({'error': 'Contraseña incorrecta'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(f"Error al verificar la contraseña: {e}")
            return Response({'error': 'Error al verificar la contraseña'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        try:
            # Generar los tokens
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)
        except Exception as e:
            print(f"Error al generar el token JWT: {e}")
            return Response({'error': 'Error al generar el token JWT'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        try:
            # Obtener el ID del rol asociado al usuario
            rol_id = user.id_rol_id  # Aquí obtienes el ID del rol directamente
        except Exception as e:
            print(f"Error al obtener el rol del usuario: {e}")
            return Response({'error': 'Error al obtener el rol del usuario'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        dataUserClean = {
            "nombres": user.nombres,
            "apellidos": user.apellidos,
            "correo": user.correo,
            "estado": user.estado,
            "id_rol": rol_id,  # Incluyendo el ID del rol en la respuesta
            "celular": user.celular
        }

        return Response({
            'message': 'Login con éxito',
            'data': dataUserClean,
            'access_token': access_token,
            'refresh_token': refresh_token
        }, status=status.HTTP_200_OK)
    except Exception as e:
        print(f"Error general en la vista login: {e}")
        return Response({'error': 'Error interno del servidor'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def check_auth(request):
    token = request.data.get('access_token')

    if not token:
        return Response({'isAuthenticated': False}, status=status.HTTP_400_BAD_REQUEST)

    try:
        UntypedToken(token)  # Valida el token
        return Response({'isAuthenticated': True}, status=status.HTTP_200_OK)
    except Exception:
        return Response({'isAuthenticated': False}, status=status.HTTP_401_UNAUTHORIZED)
    
class RegistroPostulanteEmpresa(APIView):
    
    def post(self, request, *args, **kwargs):
        postulante_data = request.data.get('postulante')
        empresa_data = request.data.get('empresa')
        
        # Depuración: Imprimir los datos recibidos
        print("Datos del postulante:", postulante_data)
        print("Datos de la empresa:", empresa_data)
        
        # Crear el postulante
        postulante_serializer = PostulanteSerializer(data=postulante_data)
        if postulante_serializer.is_valid():
            postulante = postulante_serializer.save()
            
            # Crear la empresa y asociarla con el postulante
            empresa_data['id_postulante'] = postulante.id_postulante
            empresa_serializer = EmpresaSerializer(data=empresa_data)
            if empresa_serializer.is_valid():
                empresa_serializer.save()
                return Response({
                    "postulante": postulante_serializer.data,
                    "empresa": empresa_serializer.data
                }, status=status.HTTP_201_CREATED)
            else:
                postulante.delete()  # Borrar el postulante si la empresa no se creó
                return Response(empresa_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(postulante_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class RegistroEmpresa(APIView):

    def post(self, request, *args, **kwargs):
        empresa_data = request.data.get('empresa')
        
        if not empresa_data:
            return Response({"detail": "No data provided"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Validar y guardar la empresa
        empresa_serializer = EmpresaSerializer(data=empresa_data)
        if empresa_serializer.is_valid():
            empresa = empresa_serializer.save()
            
            # Asociar la empresa con el postulante
            id_postulante = empresa_data.get('id_postulante')
            if id_postulante:
                try:
                    postulante = Postulante.objects.get(id_postulante=id_postulante)
                    postulante.empresa = empresa
                    postulante.save()
                except Postulante.DoesNotExist:
                    return Response({"detail": "Postulante not found"}, status=status.HTTP_404_NOT_FOUND)
            
            return Response({"success": True}, status=status.HTTP_201_CREATED)
        
        return Response(empresa_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class RegistroPostulante(APIView):
    
    def post(self, request, *args, **kwargs):
        postulante_data = request.data.get('postulante')
        
        if not postulante_data:
            return Response({"detail": "No data provided"}, status=status.HTTP_400_BAD_REQUEST)

        # Crear el postulante
        postulante_serializer = PostulanteSerializer(data=postulante_data)
        if postulante_serializer.is_valid():
            postulante = postulante_serializer.save()
            return Response({
                "id_postulante": postulante.id_postulante
            }, status=status.HTTP_201_CREATED)
        
        return Response(postulante_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class RegistroAutoevaluacionView(APIView):
    def post(self, request):
        data = request.data

        # Obtener el NIT de la empresa y buscar la instancia de la empresa
        nit_empresa = data.get('nit')
        empresa = get_object_or_404(Empresas, nit=nit_empresa)

        # Validar y obtener los datos de la autoevaluación
        fecha = data.get('fecha')
        if not fecha:
            return Response({'error': 'Fecha es requerida.'}, status=status.HTTP_400_BAD_REQUEST)

        # Inicializa la estructura de datos para la autoevaluación
        autoevaluacion_data = {
            'fecha': fecha,
            'comentarios': data.get('comentarios', ''),
            'nit': empresa.nit,  # Usa la FK (nit) de la empresa
            'calificaciones': []  # Inicializa como lista vacía
        }

        # Mapeo de las calificaciones a sus respectivos módulos
        modulos_map = {
            'estrategia': 1,  # ID del módulo estrategia
            'operaciones': 2,  # ID del módulo operaciones
            'marketing': 3,  # ID del módulo marketing
            'ventas': 4,  # ID del módulo ventas
            'talentoHumano': 5,  # ID del módulo talento humano
        }

        # Recorrer los campos de calificaciones y construir la lista de calificaciones
        for key, calificacion in data.items():
            if key in modulos_map:
                modulo_id = modulos_map[key]
                modulo = get_object_or_404(ModuloAutoevaluacion, id_modulo=modulo_id)

                calificaciones_data = {
                    'calificacion': calificacion,
                    'comentarios': '',  # Puedes agregar lógica para comentarios si es necesario
                    'id_modulo': modulo.id_modulo
                }

                autoevaluacion_data['calificaciones'].append(calificaciones_data)

        # Serializar y guardar la autoevaluación
        autoevaluacion_serializer = AutoevaluacionSerializer(data=autoevaluacion_data)

        if autoevaluacion_serializer.is_valid():
            autoevaluacion = autoevaluacion_serializer.save()
            return Response({
                'success': True,
                'message': 'Autoevaluación y calificaciones registradas correctamente.',
                'id_autoevaluacion': autoevaluacion.id_autoevaluacion
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(autoevaluacion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CalificacionesModulosList(generics.ListAPIView):
    serializer_class = CalificacionModuloSerializer

    def get_queryset(self):
        autoevaluacion_id = self.kwargs['id_autoevaluacion']
        return CalificacionModulo.objects.filter(id_autoevaluacion=autoevaluacion_id)
    

@api_view(['GET'])
def AutoevaluacionDetail(request, nit):
    try:
        empresa = Empresas.objects.get(nit=nit)
        autoevaluaciones = Autoevaluacion.objects.filter(nit=empresa)
        
        if not autoevaluaciones.exists():
            return Response({'error': 'Autoevaluación no encontrada'}, status=404)
        
        serializer = AutoevaluacionSerializer(autoevaluaciones, many=True)
        return Response(serializer.data)
    except Empresas.DoesNotExist:
        return Response({'error': 'Empresa no encontrada'}, status=404)
class RegistroPostulanteEmpresa(APIView):
    
    def post(self, request, *args, **kwargs):
        postulante_data = request.data.get('postulante')
        empresa_data = request.data.get('empresa')

        # Crear el postulante
        postulante_serializer = PostulanteSerializer(data=postulante_data)
        if postulante_serializer.is_valid():
            postulante = postulante_serializer.save()
            
            # Asociar el postulante a la empresa
            empresa_data['id_postulante'] = postulante.id_postulante
            empresa_serializer = EmpresaSerializer(data=empresa_data)
            
            if empresa_serializer.is_valid():
                empresa_serializer.save()
                return Response({
                    "postulante": postulante_serializer.data,
                    "empresa": empresa_serializer.data
                }, status=status.HTTP_201_CREATED)
            else:
                # Eliminar el postulante si la empresa no se creó
                postulante.delete()
                return Response(empresa_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(postulante_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class PreguntasPorModuloList(generics.ListAPIView):
    serializer_class = PreguntasSerializer

    def get_queryset(self):
        id_modulo = self.kwargs['id_modulo']  # Obtén el id_modulo de la URL
        return Preguntas.objects.filter(id_modulo=id_modulo)  # Filtra las preguntas por id_modulo
class EmpresaDetailView(APIView):
    def get(self, request, nit):
        try:
            empresa = Empresas.objects.get(nit=nit)
            postulante = Postulante.objects.get(id_postulante=empresa.id_postulante_id)
            empresa_data = EmpresasSerializer(empresa).data
            postulante_data = PostulanteSerializer(postulante).data
            return Response({'empresa': empresa_data, 'postulante': postulante_data})
        except Empresas.DoesNotExist:
            return Response({'error': 'Empresa not found'}, status=404)
        except Postulante.DoesNotExist:
            return Response({'error': 'Postulante not found'}, status=404)
        
class UserDetailView(APIView):
    def get(self, request, id_usuario):
        try:
            usuario = Usuario.objects.get(id_usuario=id_usuario)
            usuario_data = UsuarioSerializer(usuario).data
            return Response({'Usuario': usuario_data})
        except Usuario.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        

class UpdateEmpresaStatus(APIView):
    def post(self, request, nit):
        try:
            empresa = Empresas.objects.get(nit=nit)
            empresa.estado = '2'  # Actualiza el estado a 2
            empresa.save()
            return Response({'success': 'Estado actualizado correctamente'}, status=status.HTTP_200_OK)
        except Empresas.DoesNotExist:
            return Response({'error': 'Empresa no encontrada'}, status=status.HTTP_404_NOT_FOUND)

class UpdateEmpresaDiagStatus(APIView):
    def post(self, request, nit):
        try:
            empresa = Empresas.objects.get(nit=nit)
            empresa.diagnostico_value = '1'  # Actualiza el estado a 1
            empresa.save()
            return Response({'success': 'Estado actualizado correctamente'}, status=status.HTTP_200_OK)
        except Empresas.DoesNotExist:
            return Response({'error': 'Empresa no encontrada'}, status=status.HTTP_404_NOT_FOUND)
        
class PostulanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postulante
        fields = '__all__'

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresas
        fields = '__all__'

class RegistroPostulanteView(APIView):

    def post(self, request, *args, **kwargs):
        empresa_data = request.data.get('empresa')
        postulante_data = request.data.get('postulante')

        empresa_serializer = EmpresaSerializer(data=empresa_data)
        if empresa_serializer.is_valid():
            empresa = empresa_serializer.save()

            postulante_data['empresa'] = empresa.nit
            postulante_serializer = PostulanteSerializer(data=postulante_data)
            if postulante_serializer.is_valid():
                postulante_serializer.save()
                return Response(postulante_serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(postulante_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(empresa_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#proteccion de rutas
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_detail(request):
    user = request.user
    serializer = UsuarioSerializer(user)
    return Response(serializer.data)

@api_view(['POST'])
def user(request):
    #request es un objeto que contiene muchos atributos, uno de esos es method, que me retorna
    #el metodo http que se utilizó en la peticion
    
    #Crear Persona y Usuario
    if request.method == 'POST':
        userSerializer = UsuarioSerializer(data = request.data)
        
        if userSerializer.is_valid():
            userSerializer.save()
            return Response(
                {"message" : "Usuario creado" , "Usuario" : userSerializer.data }, 
                status=status.HTTP_200_OK
                )
        
        return Response(
            {"message" : "¡Algo ha fallado!" , "error" : userSerializer.errors}, 
            status=status.HTTP_400_BAD_REQUEST
            )        
        
@api_view(['GET'])
def lista_usuarios(request):
    usuarios = Usuario.objects.select_related('id_rol').all()
    data = []

    for usuario in usuarios:
        data.append({
            'id_usuario': usuario.id_usuario,
            'nombres': usuario.nombres,
            'apellidos': usuario.apellidos,
            'programa': usuario.programa,
            'rol': usuario.id_rol.descripcion,  # Asegúrate de que este campo se llama 'descripcion' en el modelo Rol
            "celular": usuario.celular
        })

    return Response(data, status=status.HTTP_200_OK)


class AutoevaluacionListCreate(generics.ListCreateAPIView):
    queryset = Autoevaluacion.objects.all()
    serializer_class = AutoevaluacionSerializer

class CalificacionModuloListCreate(generics.ListCreateAPIView):
    queryset = CalificacionModulo.objects.all()
    serializer_class = CalificacionModuloSerializer

class ModuloAutoevaluacionListCreate(generics.ListCreateAPIView):
    queryset = ModuloAutoevaluacion.objects.all()
    serializer_class = ModuloAutoevaluacionSerializer
    
# Empresas Views
class EmpresasListCreate(generics.ListCreateAPIView):
    queryset = Empresas.objects.all()
    serializer_class = EmpresasSerializer

class EmpresasRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Empresas.objects.all()
    serializer_class = EmpresasSerializer

# Modulos Views
class ModulosListCreate(generics.ListCreateAPIView):
    queryset = Modulos.objects.all()
    serializer_class = ModulosSerializer

class ModulosRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Modulos.objects.all()
    serializer_class = ModulosSerializer

class ModulosListView(generics.GenericAPIView):
    serializer_class = ModulosSerializer

    def get_queryset(self):
        return Modulos.objects.all()  # Definir el queryset dentro del método

    def get(self, request, *args, **kwargs):
        modulos = self.get_queryset()
        serializer = self.get_serializer(modulos, many=True)
        return Response(serializer.data)


    
class ModuloUpdateView(generics.UpdateAPIView):
    queryset = Modulos.objects.all()
    serializer_class = ModulosSerializer

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

# Postulante Views
class PostulanteListCreate(generics.ListCreateAPIView):
    queryset = Postulante.objects.all()
    serializer_class = PostulanteSerializer

class PostulanteRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Postulante.objects.all()
    serializer_class = PostulanteSerializer

# Preguntas Views
class PreguntasListCreate(generics.ListCreateAPIView):
    queryset = Preguntas.objects.all()
    serializer_class = PreguntasSerializer

class PreguntasRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Preguntas.objects.all()
    serializer_class = PreguntasSerializer

# Programas Views
class ProgramasListCreate(generics.ListCreateAPIView):
    queryset = Programas.objects.all()
    serializer_class = ProgramasSerializer

class ProgramasRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Programas.objects.all()
    serializer_class = ProgramasSerializer

# Registros Views
class RegistrosListCreate(generics.ListCreateAPIView):
    queryset = Registros.objects.all()
    serializer_class = RegistrosSerializer

class RegistrosRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Registros.objects.all()
    serializer_class = RegistrosSerializer

# Rol Views
class RolListCreate(generics.ListCreateAPIView):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer

class RolRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer

# Suenos Views
class SuenosListCreate(generics.ListCreateAPIView):
    queryset = Suenos.objects.all()
    serializer_class = SuenosSerializer

class SuenosRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Suenos.objects.all()
    serializer_class = SuenosSerializer

# Talleres Views
class TalleresListCreate(generics.ListCreateAPIView):
    queryset = Talleres.objects.all()
    serializer_class = TalleresSerializer

class TalleresRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Talleres.objects.all()
    serializer_class = TalleresSerializer

# Usuario Views
class UsuarioListCreate(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PreguntasNoAsignadasList(generics.ListAPIView):
    serializer_class = PreguntasSerializer

    def get_queryset(self):
        return Preguntas.objects.filter(id_modulo__isnull=True)
    
@api_view(['GET'])
def generar_pdf(request, nit):
    try:

        empresa = Empresas.objects.get(nit=nit)
        postulante = empresa.id_postulante
        fecha_actual = datetime.now().strftime("%d/%m/%Y")

        html_content = f"""
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACTA INICIAL DE SERVICIO DE ACOMPAÑAMIENTO MISE FORTALECIMIENTO</title>
    <style>
                body {{
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                h1, h2 {{
                    color: #005a87;
                    text-align: center;
                }}
                table {{
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }}
                th, td {{
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }}
                th {{
                    background-color: #f2f2f2;
                }}
                .container {{
                    display: flex;
                    justify-content: space-between; /* Espacio entre los divs */
                    width: 100%; /* Ajusta el ancho total según lo necesites */
                    max-width: 600px; /* Ancho máximo del contenedor */
                }}
                .signature-section {{
                    text-align: center;
                    margin: 0 20px; /* Espacio horizontal entre los divs */
                }}
                .line {{
                    border-bottom: 1px solid #000;
                    width: 200px; /* Ajusta el ancho de la línea según lo necesites */
                    display: inline-block;
                    margin: 0 auto;
                }}
    </style>
</head>
<body>
    <h1>ACTA INICIAL DE SERVICIO DE ACOMPAÑAMIENTO MISE FORTALECIMIENTO</h1>
    <h2>DESARROLLO EMPRESARIAL</h2>

    <h2>INTRODUCCIÓN</h2>
    <p>Por medio del servicio de acompañamiento del Modelo Integral de Servicios Empresariales (MISE), en su dimensión de FORTALECIMIENTO (dirigido a empresas), que le ofrece la Cámara de Comercio de Palmira (CCP), usted podrá contar con un consultor empresarial que lo apoyará en el cumplimiento de las metas o sueños empresariales acordados.</p>
    <p>Estos sueños empresariales dependen de sus necesidades puntuales. El MISE implementado por la CCP tiene dentro de sus premisas las siguientes: identificación de necesidades, focalización, ruta de servicios, portafolio integral y seguimiento y acompañamiento a los beneficiados (empresarios y emprendedores) vinculados al mismo, con el fin de garantizar un mayor impacto en las empresas de Palmira, Pradera, Florida y Candelaria.</p>

    <h2>DATOS GENERALES DE LA EMPRESA A PARTIR DE DIAGNÓSTICO</h2>
    <table>
        <tr>
            <th>Campo</th>
            <th>Información</th>
        </tr>
        <tr>
            <td>Fecha de realización diagnóstico</td>
            <td>{fecha_actual}</td>
        </tr>
        <tr>
            <td>Nombre de quien diligencia el diagnóstico</td>
            <td>{postulante.nombres_postulante} {postulante.apellidos_postulante}</td>
        </tr>
        <tr>
            <td>N° de documento de identificación</td>
            <td>{postulante.no_documento}</td>
        </tr>
        <tr>
            <td>Cargo en la empresa</td>
            <td>{postulante.cargo}</td>
        </tr>
        <tr>
            <td>Nombre o razón social de la empresa</td>
            <td>{empresa.razon_social}</td>
        </tr>
        <tr>
            <td>Dirección</td>
            <td>{empresa.direccion}</td>
        </tr>
        <tr>
            <td>Principal actividad económica (CIIU)</td>
            <td>{empresa.act_economica}</td>
        </tr>
        <tr>
            <td>Producto o servicio</td>
            <td>{empresa.producto_servicio}</td>
        </tr>
        <tr>
            <td>Nombre del gerente o representante Legal</td>
            <td>{empresa.gerente}</td>
        </tr>
        <tr>
            <td>NIT</td>
            <td>{empresa.nit}</td>
        </tr>
        <tr>
            <td>Celular</td>
            <td>{empresa.celular}</td>
        </tr>
        <tr>
            <td>Correo electrónico</td>
            <td>{empresa.correo}</td>
        </tr>
        <tr>
            <td>Página Web</td>
            <td>{empresa.pagina_web}</td>
        </tr>
        <tr>
            <td>Fecha de creación o constitución de la empresa</td>
            <td>{empresa.fecha_creacion}</td>
        </tr>
        <tr>
            <td>Ventas del último año</td>
            <td>{empresa.ventas_ult_ano}</td>
        </tr>
        <tr>
            <td>Costos del último año</td>
            <td>{empresa.costos_ult_ano}</td>
        </tr>
        <tr>
            <td>N° de empleados permanentes (directos)</td>
            <td>{empresa.empleados_perm}</td>
        </tr>
        <tr>
            <td>Sector al que pertenece la empresa</td>
            <td>{empresa.sector}</td>
        </tr>
    </table>

    <h2>DIAGNÓSTICO DE LA EMPRESA</h2>
    <p>El presente análisis se elaboró a partir de la aplicación del diagnóstico de profundización MISE. Este muestra la línea base de la empresa para ser atendida en el marco del MISE. El diagnóstico tiene unas preguntas que atienden a diferentes ejes como Estrategia, Operaciones, Mercadeo, Ventas, Talento humano, Finanzas. Se aplica la metodología semáforo a cada una de las preguntas de la siguiente manera:</p>
    
    <img src="/api/placeholder/400/320" alt="Imagen de metodología semáforo" />

    <p>El resultado de la evaluación está enfocado con los siguientes enunciados:</p>
    <br>
    
    <table>
        <tr>
            <th>Rango de calificación</th>
            <th>Enunciado</th>
        </tr>
        <tr>
            <td>0,00 a 49,00</td>
            <td>Evidenciamos una debilidad por tanto es necesario que sea priorizado dentro de la ruta de servicios del programa</td>
        </tr>
        <tr>
            <td>50,00 a 80,00</td>
            <td>Encontramos oportunidades de mejora, se le recomienda revisar en profundidad con un consultor MISE</td>
        </tr>
        <tr>
            <td>81,00 a 100,00</td>
            <td>Cuenta con un gran avance, lo invitamos a seguir fortaleciendo con nuestras consultorías o programas especializados</td>
        </tr>
    </table>

    <p>A continuación, se muestra el resultado del diagnóstico de la empresa:</p>
    <!-- Aquí se puede agregar una tabla o gráfico con los resultados del diagnóstico -->

    <h2>DEFINICIÓN DE SUEÑOS</h2>
    <p>A partir del diagnóstico realizado en la reunión, usted y su consultor empresarial, concertaron los siguientes sueños empresariales para su empresa o proyecto empresarial:</p>
    
    <table>
        <tr>
            <th>SUEÑOS CONCERTADOS</th>
        </tr>
        <tr>
            <td>
             <br>
             <br>
            </td>
        </tr>
        <tr>
            <td>
             <br>
             <br>
            </td>
        </tr>
        <tr>
            <td>
             <br>
             <br>
            </td>
        </tr>
        <tr>
            <td>
             <br>
             <br>
            </td>
        </tr>
    </table>

    <h2>RUTA DE SERVICIOS</h2>
    <p>A partir del análisis y verificación realizados en la reunión, usted y su consultor empresarial, concertaron la siguiente ruta de servicios:</p>
    
    <table>
        <tr>
            <th>Nombre del servicio</th>
            <th>Descripción y sueño que ayuda a cumplir</th>
            <th>Fecha de inicio concertada</th>
            <th>Fecha final concertada</th>
        </tr>
        <tr>
            <td><em>Ej.: Módulo, taller, información, asesoría, consultoría, contactos</em></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>

    <p><strong>Nota:</strong> Los sueños empresariales concertados y la ruta de servicios están sujetos a cambios de acuerdo con las necesidades del beneficiado. Los ajustes quedarán registrados en el formato ACTA FINAL MISE (F-7 V3).</p>

    <h2>COMPROMISOS</h2>
    <p>A continuación, enunciamos algunos aspectos a tener en cuenta para el cumplimiento de los sueños acordados:</p>

    <h3>Compromisos asumidos por el beneficiado:</h3>
    <ul>
        <li>Suministrar la información técnica y financiera que se requiera para el cumplimiento de los sueños</li>
        <li>Aprobar los sueños y la ruta de servicios acordada con el consultor de la Cámara de Comercio de Palmira</li>
        <li>Inscribirse y participar en los servicios definidos para avanzar en la ruta de servicios acordada</li>
        <li>Cumplir con los compromisos pactados en este documento y los que se desprendan del normal desarrollo del proceso</li>
        <li>Atender las visitas, citas presenciales o virtuales del consultor empresarial según agenda acordada</li>
        <li>Disponer de tiempo y/o asignar una persona responsable de manera permanente para garantizar los avances de la ruta de servicios y el cumplimiento de los sueños establecidos</li>
        <li>Asumir la responsabilidad para el cumplimiento del objetivo trazado</li>
        <li>Suscribir el acta final del servicio de acompañamiento. Si una vez finalizado el servicio en el término de cinco (5) días hábiles el empresario no suscribe el acta enunciada, la Cámara de Comercio de Palmira quedará facultada para completar la información pertinente y remitirla mediante correo electrónica a mi dirección de notificaciones</li>
    </ul>

    <h3>Compromisos asumidos por la Cámara de Comercio de Palmira:</h3>
    <ul>
        <li>Acompañar al empresario en el cumplimiento de los sueños</li>
        <li>Poner a disposición del empresario una ruta de servicios (árbol de rutas) pertinentes para el cumplimiento de los sueños empresariales</li>
        <li>Hacer su mayor esfuerzo y desplegar todas las actividades que estén a su alcance para que el empresario cumpla los sueños empresariales concertados en este documento (este es un compromiso que también depende de la disposición del beneficiado)</li>
        <li>Suscribir el acta final del servicio de acompañamiento</li>
    </ul>

    <p>La Cámara de Comercio de Palmira realizará todas las actuaciones tendientes a lograr los sueños acordados con el beneficiado sin asumir un compromiso con el efectivo cumplimiento de estos, pues las obligaciones que adquiere en el programa son de medio y no de resultados. Es decir, la entidad desplegará diferentes actividades tendientes al fortalecimiento empresarial, pero la responsabilidad directa del cumplimiento de los sueños recae en el empresario. La Cámara de Comercio de Palmira se reserva el derecho de modificar o cambiar el contenido, nombre o fechas de su ruta de servicios (árbol de rutas) que le ofrece al beneficiado; también podrá dejar fechas pendientes cuando estas dependan de la disponibilidad del conferencista/asesor o del beneficiado. La entidad también podrá suscribir este documento después del inicio de una ruta de servicios para analizar si las personas están cumpliendo con las actividades propuestas.</p>

    <h3>En los siguientes casos la Cámara de Comercio de Palmira no continuará prestando el servicio de acompañamiento:</h3>
    <ul>
        <li>Si el registro mercantil no está renovado al momento de iniciar el proceso o durante todo el proceso (en los casos que aplica)</li>
        <li>Si pasados tres (3) meses, no inician la ruta de servicios o no cumple con los compromisos acordados</li>
        <li>Si no se avanza en la ruta de servicios durante tres (3) meses</li>
        <li>Por mutuo acuerdo entre el consultor y la empresa</li>
        <li>Por decisión unilateral de la Cámara de Comercio de Palmira o del beneficiado</li>
        <li>Cuando se cumplan los sueños y ruta de servicios acordados y la empresa considere que no se tienen más sueños empresariales a trabajar</li>
        <li>Por terminación del plazo pactado, si alguna de las partes considera que no logrará alcanzar el sueño establecido</li>
        <li>Si hay incumplimiento de la asistencia mínima exigida en los módulos o talleres priorizados no se brindará el servicio de asesoría personalizada</li>
    </ul>

    <p>
        Al diligenciar y firmar este formulario autoriza a La Cámara de Comercio de Palmira - CCP, identificada con el NIT. 891.380.012-0, domiciliada y 
        ubicada en Palmira – Valle - Colombia en la Calle 28 # 31-30, para el tratamiento de sus datos personales conforme a lo establecido en la Ley 1581 
        de 2012 de Protección de Datos Personales y su Decreto reglamentario 1377 de 2013. Para más información, consulte nuestra política de 
        tratamiento de datos en <a href="http://www.ccpalmira.org.co">www.ccpalmira.org.co</a>.
    </p>

    <br>

    <div> 

    <div class="container">
        <div class="signature-section">
            <p class="line"></p>
            <p>FIRMA DEL REPRESENTANTE LEGAL</p>
        </div>
        <div class="signature-section">
            <p class="line"></p>
            <p>FIRMA DEL CONSULTOR MISE ASIGNADO</p>
        </div>
    </div>


    <p>EMPRESA: CÁMARA DE COMERCIO DE PALMIRA</p>
        </body>
        </html>
        """

        pdf_file = io.BytesIO()
        HTML(string=html_content).write_pdf(pdf_file)
        pdf_file.seek(0)

        response = HttpResponse(pdf_file, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{empresa.nit}_acta_inicial_mise.pdf"'
        return response

    except Exception as e:
        return HttpResponse(f'Error: {str(e)}', status=500)


@api_view(['GET'])
def generar_pdf_final(request, nit):
    try:

        empresa = Empresas.objects.get(nit=nit)
        postulante = empresa.id_postulante
        fecha_actual = datetime.now().strftime("%d/%m/%Y")

        html_content = f"""
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACTA FINAL DE SERVICIO DE ACOMPAÑAMIENTO MISE</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }}
        h1, h2 {{
            color: #005a87;
            text-align: center;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }}
        th, td {{
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }}
        th {{
            background-color: #f2f2f2;
        }}
        ul {{
            list-style-type: disc;
            margin-left: 20px;
        }}
        .container {{
                    display: flex;
                    justify-content: space-between; /* Espacio entre los divs */
                    width: 100%; /* Ajusta el ancho total según lo necesites */
                    max-width: 600px; /* Ancho máximo del contenedor */
                }}
                .signature-section {{
                    text-align: center;
                    margin: 0 20px; /* Espacio horizontal entre los divs */
                }}
                .line {{
                    border-bottom: 1px solid #000;
                    width: 200px; /* Ajusta el ancho de la línea según lo necesites */
                    display: inline-block;
                    margin: 0 auto;
                }}
    </style>
</head>
<body>
    <h1>ACTA FINAL DE SERVICIO DE ACOMPAÑAMIENTO MISE</h1>
    <h2>PROCESO DE DESARROLLO EMPRESARIAL</h2>

    <h2>1. CIERRE</h2>
    <p>
        Por medio del servicio de acompañamiento del Modelo Integral de Servicios Empresariales (MISE), en su dimensión de 
        FORTALECIMIENTO (dirigido a empresas), que le ofrece la Cámara de Comercio de Palmira (CCP), formalizamos acta final de MISE donde 
        se detallan las modificaciones del proceso, el cumplimiento de sueños, diagnóstico de salida de sus resultados en el programa y 
        observaciones o recomendaciones.
    </p>

    <table>
        <tr>
            <th>Campo</th>
            <th>Información</th>
        </tr>
        <tr>
            <td>Fecha de cierre</td>
            <td>{fecha_actual}</td>
        </tr>
        <tr>
            <td>Nombre de quien diligencia el diagnóstico</td>
            <td>{postulante.nombres_postulante} {postulante.apellidos_postulante}</td>
        </tr>
        <tr>
            <td>N° de documento de identificación</td>
            <td>{postulante.no_documento}</td>
        </tr>
        <tr>
            <td>Cargo en la empresa</td>
            <td>{postulante.cargo}</td>
        </tr>
        <tr>
            <td>Nombre o razón social de la empresa</td>
            <td>{empresa.razon_social}</td>
        </tr>
    </table>

    <h2>2. MODIFICACIONES DEL PROCESO</h2>
    <p>Describa las modificaciones a los sueños empresariales y la ruta de servicios que se realizaron durante todo el proceso:</p>
    <br>
    <br>
    <br>

    <table>
        <tr>
            <th>MODIFICACIONES DEL PROCESO</th>
        </tr>
        <tr>
            <td>
             <br>
             <br>
             <br>
             <br>
             <br>
             <br>
            </td>
        </tr>
    </table>

    <h2>3. CUMPLIMIENTO DE SUEÑOS</h2>
    <table>
        <tr>
            <th>SUEÑOS CONCERTADOS</th>
            <th>¿Se cumplió?</th>
            <th>Fecha en que se cumplió el sueño</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td></td>
            <td>Sí/No</td>
            <td></td>
            <td>Puntualmente qué actividades se hicieron para el cumplimiento del sueño</td>
        </tr>
    </table>

    <h2>4. DIAGNÓSTICO DE SALIDA</h2>
    <p>
        Después de finalizada la ruta de servicios y el cumplimiento de sueños se realiza junto con el beneficiado el diagnóstico de cierre de brechas donde 
        se evidencia el avance en su nivel de fortalecimiento empresarial. El diagnóstico muestra solo avance en los ejes y sueños que se priorizaron o que 
        durante el proceso se modificaron o adicionaron. Se muestran los resultados:
    </p>

    <table>
        <tr>
            <th>DIAGNÓSTICO DE SALIDA</th>
        </tr>
        <tr>
            <td>
             <br>
             <br>
             <br>
             <br>
             <br>
             <br>
            </td>
        </tr>
    </table>

    <h2>5. OBSERVACIONES O RECOMENDACIONES</h2>

    <table>
        <tr>
            <th>OBSERVACIONES O RECOMENDACIONES</th>
        </tr>
        <tr>
            <td>
             <br>
             <br>
             <br>
             <br>
             <br>
             <br>
            </td>
        </tr>
    </table>

    <p>
        Al diligenciar y firmar este formulario autoriza a La Cámara de Comercio de Palmira - CCP, identificada con el NIT. 891.380.012-0, domiciliada y 
        ubicada en Palmira – Valle - Colombia en la Calle 28 # 31-30, para el tratamiento de sus datos personales conforme a lo establecido en la Ley 1581 
        de 2012 de Protección de Datos Personales y su Decreto reglamentario 1377 de 2013. Para más información, consulte nuestra política de 
        tratamiento de datos en <a href="http://www.ccpalmira.org.co">www.ccpalmira.org.co</a>.
    </p>

    <br>

    <div> 

    <div class="container">
        <div class="signature-section">
            <p class="line"></p>
            <p>FIRMA DEL REPRESENTANTE LEGAL</p>
        </div>
        <div class="signature-section">
            <p class="line"></p>
            <p>FIRMA DEL CONSULTOR MISE ASIGNADO</p>
        </div>
    </div>.

    <p>EMPRESA: CÁMARA DE COMERCIO DE PALMIRA</p>
</body>
</html>
        """

        pdf_file = io.BytesIO()
        HTML(string=html_content).write_pdf(pdf_file)
        pdf_file.seek(0)

        response = HttpResponse(pdf_file, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{empresa.nit}_acta_final_mise.pdf"'
        return response

    except Exception as e:
        return HttpResponse(f'Error: {str(e)}', status=500)

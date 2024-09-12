from django.shortcuts import render, get_object_or_404
from .models import Autoevaluacion, CalificacionModulo, ModuloAutoevaluacion, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Suenos, Talleres, Usuario
from .serializer import AutoevaluacionSerializer, CalificacionModuloSerializer, ModuloAutoevaluacionSerializer, UsuarioSerializer, EmpresasSerializer, ModulosSerializer, PostulanteSerializer, PreguntasSerializer, ProgramasSerializer, RegistrosSerializer, RolSerializer, SuenosSerializer, TalleresSerializer 
from rest_framework import status, generics, serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import get_user_model, authenticate

from rest_framework_simplejwt.tokens import RefreshToken, UntypedToken

from rest_framework.views import APIView

from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator

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
def password_reset_request(request):
    if request.method == 'POST':
        import json
        data = json.loads(request.body)
        correo = data.get('correo')

        if not correo:
            return JsonResponse({'error': 'El correo electrónico es obligatorio.'}, status=400)
        
        try:
            user = Usuario.objects.get(correo=correo)
        except Usuario.DoesNotExist:
            return JsonResponse({'error': 'El correo electrónico no está registrado.'}, status=404)

        subject = "Solicitud de restablecimiento de contraseña"
        email_template_name = "registration/password_reset_email.html"
        context = {
            'email': user.correo,
            'domain': settings.DOMAIN,
            'site_name': 'MISE',
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': default_token_generator.make_token(user),
            'protocol': 'http'
        }
        email_body = render_to_string(email_template_name, context)
        send_mail(subject, email_body, settings.EMAIL_HOST_USER, [user.correo], fail_silently=False)

        return JsonResponse({'message': 'Correo electrónico enviado con éxito.'}, status=200)
    return JsonResponse({'error': 'Método no permitido.'}, status=405)

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
    
class PreguntasPorModuloView(APIView):
    def get(self, request):
        id_modulo = request.query_params.get('id_modulo')
        
        if not id_modulo:
            return Response({"error": "Debe proporcionar un id_modulo"}, status=status.HTTP_400_BAD_REQUEST)

        preguntas = Preguntas.objects.filter(id_modulo=id_modulo)
        serializer = PreguntasSerializer(preguntas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
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
                return Response( postulante_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
            'rol': usuario.id_rol.descripcion  # Asegúrate de que este campo se llama 'descripcion' en el modelo Rol
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

    def get(self, request, *args, **kwargs):
        modulos = Modulos.objects.all()  # Obtener todos los módulos
        serializer = self.get_serializer(modulos, many=True)
        return Response(serializer.data)
    
class ModuloUpdateView(generics.UpdateAPIView):
    queryset = Modulos.objects.all()
    serializer_class = ModulosSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

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
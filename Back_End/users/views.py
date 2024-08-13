from django.shortcuts import render
from .models import Coordinador, Director, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Suenos, Talleres, Usuario
from .serializer import UsuarioSerializer, CoordinadorSerializer, DirectorSerializer, EmpresasSerializer, ModulosSerializer, PostulanteSerializer, PreguntasSerializer, ProgramasSerializer, RegistrosSerializer, RolSerializer, SuenosSerializer, TalleresSerializer 
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import get_user_model


from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

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

        dataUserClean = {
            "nombres": user.nombres,
            "apellidos": user.apellidos,
            "correo": user.correo,
            "estado": user.estado,
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

class CoordinadorListCreate(generics.ListCreateAPIView):
    queryset = Coordinador.objects.all()
    serializer_class = CoordinadorSerializer

class CoordinadorRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coordinador.objects.all()
    serializer_class = CoordinadorSerializer

# Director Views
class DirectorListCreate(generics.ListCreateAPIView):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer

class DirectorRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer

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
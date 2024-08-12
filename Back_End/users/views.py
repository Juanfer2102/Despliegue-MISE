from django.shortcuts import render
from .models import Coordinador, Director, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Suenos, Talleres, Usuario
from .serializer import UsuarioSerializer, CoordinadorSerializer, DirectorSerializer, EmpresasSerializer, ModulosSerializer, PostulanteSerializer, PreguntasSerializer, ProgramasSerializer, RegistrosSerializer, RolSerializer, SuenosSerializer, TalleresSerializer 
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def login (request):
    
    if request.method == 'POST':
        #DATOS RECIBIDOS
        correo = request.data.get('correo')
        contrasena = request.data.get('contrasena')
        
        oneUser = Usuario.objects.filter(correo = correo).first()
        #CONDICIONAL SI EL USUARIO NO FUE ENCONTRADO
        if not oneUser:
            return Response('No se encontró el usuario', status=status.HTTP_400_BAD_REQUEST)
               
        if not oneUser.check_password(contrasena):
            return Response(
                {"message" : "Login sin exito"}, 
                status=status.HTTP_400_BAD_REQUEST
                )
        #SE RESUME LA INFORMACION PARA QUE EL FRONTEND NO RECIBA TODOS LOS DATOS DEL USUARIO
        dataUser = UsuarioSerializer(oneUser)
        
        dataUserClean = {
            "nombres" : dataUser.data.get('nombres'),
            "apellidos" : dataUser.data.get('apellidos'),
            "correo" : dataUser.data.get('correo'),
            "estado" : dataUser.data.get('estado')
        }
        
        return Response(
            {"message": "Login con exito" , "data" : dataUserClean, "token" : "aqui debe ir mi token"}, 
            status=status.HTTP_200_OK
            )
        
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
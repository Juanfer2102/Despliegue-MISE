from django.shortcuts import render
from .models import Usuario
from .serializer import UsuarioSerializer
from rest_framework import status
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

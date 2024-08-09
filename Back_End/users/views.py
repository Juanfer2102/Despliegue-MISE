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
            "descripcion" : dataUser.data.get('descripcion'),
            "nombres" : dataUser.data.get('nombres'),
            "apellidos" : dataUser.data.get('apellidos'),
            "estado" : dataUser.data.get('estado')
        }
        
        return Response(
            {"message": "Login con exito" , "data" : dataUserClean, "token" : "aqui debe ir mi token"}, 
            status=status.HTTP_200_OK
            )

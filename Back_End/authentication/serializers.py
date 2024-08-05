from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id_usuario', 'id_rol', 'descripcion', 'estado', 'correo', 'celular', 'documento', 'programa', 'password', 'name', 'apellidos')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            correo=validated_data['correo'],
            password=validated_data['password'],
            id_rol=validated_data['id_rol'],
            descripcion=validated_data['descripcion'],
            estado=validated_data['estado'],
            celular=validated_data['celular'],
            documento_dni=validated_data['documento'],
            programa=validated_data['programa'],
            name=validated_data['name'],
            apellidos=validated_data['apellidos']
        )
        return user

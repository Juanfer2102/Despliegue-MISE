from rest_framework import serializers
from .models import prueba

class MiseSerializer(serializers. ModelSerializer):
    class Meta:
        # fields = ('id', 'title', 'description', 'done')

        model = prueba
        fields = '__all__'
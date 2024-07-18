from rest_framework import viewsets
from .serializer import (EmpresasSerializer, ModulosSerializer, PostulanteSerializer, 
                          PreguntasSerializer, ProgramasSerializer, RegistrosSerializer, 
                          RolSerializer, SueñosSerializer, TalleresSerializer, UsuarioSerializer)
from .models import (Empresas, Modulos, Postulante, Preguntas, Programas, Registros, 
                     Rol, Sueños, Talleres, Usuario)

class EmpresasViewSet(viewsets.ModelViewSet):
    queryset = Empresas.objects.all()
    serializer_class = EmpresasSerializer

class ModulosViewSet(viewsets.ModelViewSet):
    queryset = Modulos.objects.all()
    serializer_class = ModulosSerializer

class PostulanteViewSet(viewsets.ModelViewSet):
    queryset = Postulante.objects.all()
    serializer_class = PostulanteSerializer

class PreguntasViewSet(viewsets.ModelViewSet):
    queryset = Preguntas.objects.all()
    serializer_class = PreguntasSerializer

class ProgramasViewSet(viewsets.ModelViewSet):
    queryset = Programas.objects.all()
    serializer_class = ProgramasSerializer

class RegistrosViewSet(viewsets.ModelViewSet):
    queryset = Registros.objects.all()
    serializer_class = RegistrosSerializer

class RolViewSet(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer

class SueñosViewSet(viewsets.ModelViewSet):
    queryset = Sueños.objects.all()
    serializer_class = SueñosSerializer

class TalleresViewSet(viewsets.ModelViewSet):
    queryset = Talleres.objects.all()
    serializer_class = TalleresSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

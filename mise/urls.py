from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from mise import views

#API Versioning

router = routers.DefaultRouter()
router.register(r'empresas', views.EmpresasViewSet)
router.register(r'modulos', views.ModulosViewSet)
router.register(r'postulante', views.PostulanteViewSet)
router.register(r'preguntas', views.PreguntasViewSet)
router.register(r'programas', views.ProgramasViewSet)
router.register(r'registros', views.RegistrosViewSet)
router.register(r'rol', views.RolViewSet)
router.register(r'sueños', views.SueñosViewSet)
router.register(r'talleres', views.TalleresViewSet)
router.register(r'usuarios', views.UsuarioViewSet)

urlpatterns = [
   path("api/v1/", include(router.urls)),
   path('docs/', include_docs_urls(title="Mise API"))
]
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from users import views
from .views import check_auth, RegistrarDiagnosticoView, CalificacionesBajasPorNitView, CalificacionesPorNitView, CalificacionesListView, generar_diagnostico, UpdateEmpresaDiagStatus, SaveCalificacionView, CalificacionesViewSet, registrar_calificacion, CalificacionesModulosList, PreguntasPorModuloList, ModuloUpdateView, PreguntasNoAsignadasList, ModulosListView, AutoevaluacionDetail, RegistroAutoevaluacionView, RegistroPostulante, RegistroEmpresa, UpdateEmpresaStatus, AutoevaluacionListCreate, CalificacionModuloListCreate, ModuloAutoevaluacionListCreate, RegistroPostulanteView, EmpresasListCreate, EmpresasRetrieveUpdateDestroy, ModulosListCreate, ModulosRetrieveUpdateDestroy, PostulanteListCreate, PostulanteRetrieveUpdateDestroy, PreguntasListCreate, PreguntasRetrieveUpdateDestroy, ProgramasListCreate, ProgramasRetrieveUpdateDestroy, RegistrosListCreate, RegistrosRetrieveUpdateDestroy, RolListCreate, RolRetrieveUpdateDestroy, SuenosListCreate, SuenosRetrieveUpdateDestroy, TalleresListCreate, TalleresRetrieveUpdateDestroy, UsuarioListCreate, UsuarioRetrieveUpdateDestroy

router = routers.DefaultRouter()

urlpatterns = [
    path('login', views.login),
    path('user', views.user),
    path('check-auth/', check_auth, name='check_auth'),

    path('calificacion/', SaveCalificacionView.as_view(), name='save_calificacion'),
    path('calificaciones/empresa/<int:nit>/', CalificacionesPorNitView.as_view(), name='calificacion-especifica'),
    path('calificaciones-bajas/empresa/<int:nit>/', CalificacionesBajasPorNitView.as_view(), name='calificaciones-bajas-por-nit'),

    path('diagnostico/<int:nit>/<int:id_modulo>/', generar_diagnostico, name='generar_diagnostico'),
    path('registrar-diagnostico/', RegistrarDiagnosticoView.as_view(), name='registrar_diagnostico'),
    path('registrar-calificacion/', registrar_calificacion, name='registrar_calificacion'),
    path('calificaciones/', CalificacionesListView.as_view(), name='calificaciones-list'),
    
     path('update-empresa-status/<int:nit>/', UpdateEmpresaStatus.as_view(), name='update-empresa-status'),
     path('update-empresa-diag-status/<int:nit>/', UpdateEmpresaDiagStatus.as_view(), name='update-empresa-diag-status'),
     path('calificaciones-modulos/', views.CalificacionesModulosList.as_view(), name='calificaciones-modulos-list'),
     path('update-modulos/<int:pk>/', ModuloUpdateView.as_view(), name='modulo-update'),  # URL para actualización

     path('calificaciones-modulos/<int:id_autoevaluacion>/', CalificacionesModulosList.as_view(), name='calificaciones-modulos-list'),

     path('preguntas-no-asignadas/', PreguntasNoAsignadasList.as_view(), name='preguntas-no-asignadas'),
    
    path('autoevaluacion/', AutoevaluacionListCreate.as_view(), name='autoevaluacion-list-create'),
    # Ajusta la URL para que acepte el nit como parte de la URL
    path('autoevaluacion/<int:nit>/', AutoevaluacionDetail, name='autoevaluacion-por-nit'),

    path('autoevaluacion-detail/', AutoevaluacionDetail, name='autoevaluacion-detail'),
    path('calificacion-modulo/', CalificacionModuloListCreate.as_view(), name='calificacion-modulo-list-create'),
    path('modulo-autoevaluacion/', ModuloAutoevaluacionListCreate.as_view(), name='modulo-autoevaluacion-list-create'),

    path('ver-modulos/', ModulosListView.as_view(), name='modulos-list'),

    path('registro-postulante/', RegistroPostulante.as_view(), name='registro-postulante'),
    path('registro-empresa/', RegistroEmpresa.as_view(), name='registro-empresa'),
    path('registro-autoevaluacion/', RegistroAutoevaluacionView.as_view(), name='registro-autoevaluacion'),

    path('empresas/', EmpresasListCreate.as_view(), name='empresas-list-create'),
    path('empresas/<int:pk>/', EmpresasRetrieveUpdateDestroy.as_view(), name='empresa-detail'),

    path('modulos/', ModulosListCreate.as_view(), name='modulos-list-create'),
    path('modulos/<int:pk>/', ModulosRetrieveUpdateDestroy.as_view(), name='modulos-retrieve-update-destroy'),

    path('postulante/', PostulanteListCreate.as_view(), name='postulante-list-create'),
    path('postulante/<int:pk>/', PostulanteRetrieveUpdateDestroy.as_view(), name='postulante-retrieve-update-destroy'),

    path('preguntas/', PreguntasListCreate.as_view(), name='preguntas-por-modulo'),
    path('preguntas/modulo/<int:id_modulo>/', PreguntasPorModuloList.as_view(), name='preguntas-por-modulo'),

    path('programas/', ProgramasListCreate.as_view(), name='programas-list-create'),
    path('programas/<int:pk>/', ProgramasRetrieveUpdateDestroy.as_view(), name='programas-retrieve-update-destroy'),

    path('registros/', RegistrosListCreate.as_view(), name='registros-list-create'),
    path('registros/<int:pk>/', RegistrosRetrieveUpdateDestroy.as_view(), name='registros-retrieve-update-destroy'),

    path('rol/', RolListCreate.as_view(), name='rol-list-create'),
    path('rol/<int:pk>/', RolRetrieveUpdateDestroy.as_view(), name='rol-retrieve-update-destroy'),

    path('suenos/', SuenosListCreate.as_view(), name='suenos-list-create'),
    path('suenos/<int:pk>/', SuenosRetrieveUpdateDestroy.as_view(), name='suenos-retrieve-update-destroy'),

    path('talleres/', TalleresListCreate.as_view(), name='talleres-list-create'),
    path('talleres/<int:pk>/', TalleresRetrieveUpdateDestroy.as_view(), name='talleres-retrieve-update-destroy'),

    path('usuario/', UsuarioListCreate.as_view(), name='usuario-list-create'),
    path('usuario/<int:pk>/', UsuarioRetrieveUpdateDestroy.as_view(), name='usuario-retrieve-update-destroy'),
]
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from users import views
from .views import HomeView
from .views import TemasListView, EditarPreguntaAPIView, ConcretarSuenoAPIView, create_modulo, update_modulo, TemaDetailView, TemasCreateUpdateView, get_modulos, get_preguntas, check_auth, generar_pdf_final, generar_pdf, obtener_postulante_por_nit, listar_empresas_activas, listar_empresas_sin_diagnostico, RegistrarDiagnosticoView, ConsultarDiagnosticoView, CalificacionesBajasPorNitView, CalificacionesPorNitView, CalificacionesListView, generar_diagnostico, UpdateEmpresaDiagStatus, SaveCalificacionView, CalificacionesViewSet, registrar_calificacion, CalificacionesModulosList, PreguntasPorModuloList, ModuloUpdateView, PreguntasNoAsignadasList, ModulosListView, AutoevaluacionDetail, RegistroAutoevaluacionView, RegistroPostulante, RegistroEmpresa, UpdateEmpresaStatus, AutoevaluacionListCreate, CalificacionModuloListCreate, ModuloAutoevaluacionListCreate, RegistroPostulanteView, EmpresasListCreate, EmpresasRetrieveUpdateDestroy, ModulosListCreate, ModulosRetrieveUpdateDestroy, PostulanteListCreate, PostulanteRetrieveUpdateDestroy, PreguntasListCreate, PreguntasRetrieveUpdateDestroy, ProgramasListCreate, ProgramasRetrieveUpdateDestroy, RegistrosListCreate, RegistrosRetrieveUpdateDestroy, RolListCreate, RolRetrieveUpdateDestroy, SuenosListCreate, SuenosRetrieveUpdateDestroy, TalleresListCreate, TalleresRetrieveUpdateDestroy, UsuarioListCreate, UsuarioRetrieveUpdateDestroy
from .views import TemasListView, ActualizarEstadoTema, TemasAsignadosPorEmpresaAPIView, PasswordResetView, PasswordResetConfirmView, EliminarObjetoAPIView, SuenosAPIView, EditarPreguntaAPIView, create_modulo, update_modulo, TemaDetailView, TemasCreateUpdateView, get_modulos, get_preguntas, check_auth, generar_pdf_final, generar_pdf, obtener_postulante_por_nit, listar_empresas_activas, listar_empresas_sin_diagnostico, RegistrarDiagnosticoView, ConsultarDiagnosticoView, CalificacionesBajasPorNitView, CalificacionesPorNitView, CalificacionesListView, generar_diagnostico, UpdateEmpresaDiagStatus, SaveCalificacionView, CalificacionesViewSet, registrar_calificacion, CalificacionesModulosList, PreguntasPorModuloList, ModuloUpdateView, PreguntasNoAsignadasList, ModulosListView, AutoevaluacionDetail, RegistroAutoevaluacionView, RegistroPostulante, RegistroEmpresa, UpdateEmpresaStatus, AutoevaluacionListCreate, CalificacionModuloListCreate, ModuloAutoevaluacionListCreate, RegistroPostulanteView, EmpresasListCreate, EmpresasRetrieveUpdateDestroy, ModulosListCreate, ModulosRetrieveUpdateDestroy, PostulanteListCreate, PostulanteRetrieveUpdateDestroy, PreguntasListCreate, PreguntasRetrieveUpdateDestroy, ProgramasListCreate, ProgramasRetrieveUpdateDestroy, RegistrosListCreate, RegistrosRetrieveUpdateDestroy, RolListCreate, RolRetrieveUpdateDestroy, SuenosListCreate, SuenosRetrieveUpdateDestroy, TalleresListCreate, TalleresRetrieveUpdateDestroy, UsuarioListCreate, UsuarioRetrieveUpdateDestroy
from .views import TemasListView, UpdateCalificacionAPIView, ModulosConCalificacionesBajasView, UsuarioUpdateView, SetPasswordView, PasswordResetView, EliminarObjetoAPIView, SuenosAPIView, EditarPreguntaAPIView, create_modulo, update_modulo, TemaDetailView, TemasCreateUpdateView, get_modulos, get_preguntas, check_auth, generar_pdf_final, generar_pdf, obtener_postulante_por_nit, listar_empresas_activas, listar_empresas_sin_diagnostico, RegistrarDiagnosticoView, ConsultarDiagnosticoView, CalificacionesBajasPorNitView, CalificacionesPorNitView, CalificacionesListView, generar_diagnostico, UpdateEmpresaDiagStatus, SaveCalificacionView, CalificacionesViewSet, registrar_calificacion, CalificacionesModulosList, PreguntasPorModuloList, ModuloUpdateView, PreguntasNoAsignadasList, ModulosListView, AutoevaluacionDetail, RegistroAutoevaluacionView, RegistroPostulante, RegistroEmpresa, UpdateEmpresaStatus, AutoevaluacionListCreate, CalificacionModuloListCreate, ModuloAutoevaluacionListCreate, RegistroPostulanteView, EmpresasListCreate, EmpresasRetrieveUpdateDestroy, ModulosListCreate, ModulosRetrieveUpdateDestroy, PostulanteListCreate, PostulanteRetrieveUpdateDestroy, PreguntasListCreate, PreguntasRetrieveUpdateDestroy, ProgramasListCreate, ProgramasRetrieveUpdateDestroy, RegistrosListCreate, RegistrosRetrieveUpdateDestroy, RolListCreate, RolRetrieveUpdateDestroy, SuenosListCreate, SuenosRetrieveUpdateDestroy, TalleresListCreate, TalleresRetrieveUpdateDestroy, UsuarioListCreate, UsuarioRetrieveUpdateDestroy
from .views import TemasListView, listar_empresas_culminadas, SuenosConcretadosList, UpdateEmpresaStatusFinish, EmpresasView, ModulosConCalificacionesBajasView, UsuarioUpdateView, SetPasswordView, PasswordResetView, EliminarObjetoAPIView, SuenosAPIView, EditarPreguntaAPIView, create_modulo, update_modulo, TemaDetailView, TemasCreateUpdateView, get_modulos, get_preguntas, check_auth, generar_pdf_final, generar_pdf, obtener_postulante_por_nit, listar_empresas_activas, listar_empresas_sin_diagnostico, RegistrarDiagnosticoView, ConsultarDiagnosticoView, CalificacionesBajasPorNitView, CalificacionesPorNitView, CalificacionesListView, generar_diagnostico, UpdateEmpresaDiagStatus, SaveCalificacionView, CalificacionesViewSet, registrar_calificacion, CalificacionesModulosList, PreguntasPorModuloList, ModuloUpdateView, PreguntasNoAsignadasList, ModulosListView, AutoevaluacionDetail, RegistroAutoevaluacionView, RegistroPostulante, RegistroEmpresa, UpdateEmpresaStatus, AutoevaluacionListCreate, CalificacionModuloListCreate, ModuloAutoevaluacionListCreate, RegistroPostulanteView, EmpresasListCreate, EmpresasRetrieveUpdateDestroy, ModulosListCreate, ModulosRetrieveUpdateDestroy, PostulanteListCreate, PostulanteRetrieveUpdateDestroy, PreguntasListCreate, PreguntasRetrieveUpdateDestroy, ProgramasListCreate, ProgramasRetrieveUpdateDestroy, RegistrosListCreate, RegistrosRetrieveUpdateDestroy, RolListCreate, RolRetrieveUpdateDestroy, SuenosListCreate, SuenosRetrieveUpdateDestroy, TalleresListCreate, TalleresRetrieveUpdateDestroy, UsuarioListCreate, UsuarioRetrieveUpdateDestroy

router = routers.DefaultRouter()

urlpatterns = [
    path('', HomeView, name='home'),
    path('login', views.login),
    path('user', views.user),
    path('act-user/<int:id_usuario>/', UsuarioUpdateView.as_view(), name='usuario-detail'),

    path('suenos-concretados/<str:nit>/', SuenosConcretadosList.as_view(), name='suenos-concretados-by-nit'),

    path('check-auth/', check_auth, name='check_auth'),

    path('update-calificacion/', UpdateCalificacionAPIView.as_view(), name='update-calificacion'),
    
    path('estado/empresas/', EmpresasView.as_view(), name='empresas-list'),

    path('temas/empresa/<str:nit>/', TemasAsignadosPorEmpresaAPIView.as_view(), name='temas-asignados-empresa'),
    path('temas_asignados/<int:nit>/<int:tema_id>/actualizar_estado/', ActualizarEstadoTema.as_view(), name='actualizar_estado_tema'),

    path('modulos/calificaciones-bajas/<str:nit>/', ModulosConCalificacionesBajasView.as_view(), name='modulos_con_calificaciones_bajas'),

    path('concretar-sueno/<int:sueno_id>/', ConcretarSuenoAPIView.as_view(), name='concretar-sueno'),
    path('password_reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password_reset_confirm/<str:token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
    path('set-password/', SetPasswordView.as_view(), name='set-password'),

    path('temas/', TemasListView.as_view(), name='temas-list'),
    path('temas/<int:id>/', TemaDetailView.as_view(), name='tema-detail'),
    path('temas/create-update/', TemasCreateUpdateView.as_view(), name='temas-create-update'),
    path('modulos/', get_modulos, name='get-modulos'),
    # path('preguntas/', get_preguntas, name='get-preguntas'),

    path('generar-pdf/<int:nit>/', generar_pdf, name='generar_pdf'),
    path('generar-pdf-final/<int:nit>/', generar_pdf_final, name='generar_pdf_final'),

    path('calificacion/', SaveCalificacionView.as_view(), name='calificacion-list-create'),
    path('calificaciones/empresa/<int:nit>/', CalificacionesPorNitView.as_view(), name='calificacion-especifica'),
    path('calificaciones-bajas/empresa/<int:nit>/', CalificacionesBajasPorNitView.as_view(), name='calificaciones-bajas-por-nit'),

    path('diagnostico/<int:nit>/<int:id_modulo>/', generar_diagnostico, name='generar_diagnostico'),
    path('registrar-diagnostico/', RegistrarDiagnosticoView.as_view(), name='registrar_diagnostico'),
    path('diagnostico/<int:nit>/', ConsultarDiagnosticoView.as_view(), name='registrar_diagnostico'),
    path('registrar-calificacion/', registrar_calificacion, name='registrar_calificacion'),

    
     path('update-empresa-status/<int:nit>/', UpdateEmpresaStatus.as_view(), name='update-empresa-status'),
     path('update-empresa-status-final/<int:nit>/', UpdateEmpresaStatusFinish.as_view(), name='update-empresa-status'),
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

    path('preguntas/<int:id_pregunta>/', EditarPreguntaAPIView.as_view(), name='editar_pregunta'),

    path('cmodulos/', create_modulo, name='crear_modulo'),
    path('modulos/<int:id_modulo>/', update_modulo, name='editar_modulo'),

    path('registro-postulante/', RegistroPostulante.as_view(), name='registro-postulante'),
    path('registro-empresa/', RegistroEmpresa.as_view(), name='registro-empresa'),
    path('registro-autoevaluacion/', RegistroAutoevaluacionView.as_view(), name='registro-autoevaluacion'),

    path('empresas/', EmpresasListCreate.as_view(), name='empresas-list-create'),
    path('empresas/<int:pk>/', EmpresasRetrieveUpdateDestroy.as_view(), name='empresa-detail'),
    path('empresas-por-aceptar/', listar_empresas_activas, name='listar_empresas_activas'),
    path('empresas-culminadas/', listar_empresas_culminadas, name='listar_empresas_culminadas'),
    path('empresas-sin-diagnostico/', listar_empresas_sin_diagnostico, name='listar_empresas_sin_diagnostico'),

    path('modulos/', ModulosListCreate.as_view(), name='modulos-list-create'),
    path('modulos/<int:pk>/', ModulosRetrieveUpdateDestroy.as_view(), name='modulos-retrieve-update-destroy'),

    path('postulante/', PostulanteListCreate.as_view(), name='postulante-list-create'),
    path('postulante/<int:pk>/', PostulanteRetrieveUpdateDestroy.as_view(), name='obtener_postulante_por_nit'),
    path('postulante/num/<str:nit>/', obtener_postulante_por_nit, name='obtener_postulante_por_nit'),

    path('preguntas/', PreguntasListCreate.as_view(), name='preguntas-por-modulo'),
    path('preguntas/modulo/<int:id_modulo>/', PreguntasPorModuloList.as_view(), name='preguntas-por-modulo'),

    path('programas/', ProgramasListCreate.as_view(), name='programas-list-create'),
    path('programas/<int:pk>/', ProgramasRetrieveUpdateDestroy.as_view(), name='programas-retrieve-update-destroy'),

    path('registros/', RegistrosListCreate.as_view(), name='registros-list-create'),
    path('registros/<int:pk>/', RegistrosRetrieveUpdateDestroy.as_view(), name='registros-retrieve-update-destroy'),

    path('rol/', RolListCreate.as_view(), name='rol-list-create'),
    path('rol/<int:pk>/', RolRetrieveUpdateDestroy.as_view(), name='rol-retrieve-update-destroy'),

    path('suenos/', SuenosListCreate.as_view(), name='suenos-list-create'),
    # path('suenos/<int:pk>/', SuenosRetrieveUpdateDestroy.as_view(), name='suenos-retrieve-update-destroy'),

    path('eliminar/<str:model>/<int:id>/', EliminarObjetoAPIView.as_view(), name='eliminar_objeto_cbv'),

    path('crear-suenos/', SuenosAPIView.as_view(), name='suenos-create'),  # Para crear un nuevo sueño
    path('suenos/<int:pk>/', SuenosAPIView.as_view(), name='suenos-edit'),  # Para editar un sueño existente

    path('talleres/', TalleresListCreate.as_view(), name='talleres-list-create'),
    path('talleres/<int:pk>/', TalleresRetrieveUpdateDestroy.as_view(), name='talleres-retrieve-update-destroy'),

    path('usuario/', UsuarioListCreate.as_view(), name='usuario-list-create'),
    path('usuario/<int:pk>/', UsuarioRetrieveUpdateDestroy.as_view(), name='usuario-retrieve-update-destroy'),
]
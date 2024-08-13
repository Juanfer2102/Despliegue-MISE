from django.contrib import admin
from .models import Coordinador, Director, Empresas, Modulos, Postulante, Preguntas, Programas, Registros, Rol, Suenos, Talleres, Usuario

@admin.register(Coordinador)
class CoordinadorAdmin(admin.ModelAdmin):
    list_display = ('id_coordinador', 'nombres_coordinador', 'apellidos_coordinador', 'correo', 'programa', 'celular', 'documento', 'id_usuario')
    search_fields = ('nombres_coordinador', 'apellidos_coordinador', 'correo')
    list_filter = ('programa',)

@admin.register(Director)
class DirectorAdmin(admin.ModelAdmin):
    list_display = ('id_director', 'nombres_director', 'apellidos_director', 'correo', 'documento', 'celular', 'id_usuario')
    search_fields = ('nombres_director', 'apellidos_director', 'correo')
    list_filter = ('documento',)

@admin.register(Empresas)
class EmpresasAdmin(admin.ModelAdmin):
    list_display = ('nit', 'nombre_empresa', 'celular', 'razon_social', 'direccion', 'act_economica', 'gerente', 'producto_servicio', 'correo', 'pagina_web', 'fecha_creacion', 'ventas_ult_ano', 'costos_ult_ano', 'empleados_perm', 'sector', 'estado', 'id_programa', 'id_postulante')
    search_fields = ('nombre_empresa', 'razon_social', 'correo')
    list_filter = ('sector', 'estado', 'id_programa')

@admin.register(Modulos)
class ModulosAdmin(admin.ModelAdmin):
    list_display = ('id_modulo', 'nombre_modulo', 'escala', 'descripcion', 'observaciones', 'nivel_basico', 'estado_actual', 'nivel_ideal')
    search_fields = ('nombre_modulo', 'descripcion')
    list_filter = ('estado_actual',)

@admin.register(Postulante)
class PostulanteAdmin(admin.ModelAdmin):
    list_display = ('id_postulante', 'nombres_postulante', 'apellidos_postulante', 'celular', 'genero', 'correo', 'municipio', 'no_documento', 'tipo_documento', 'id_rol')
    search_fields = ('nombres_postulante', 'apellidos_postulante', 'correo')
    list_filter = ('genero', 'municipio')

@admin.register(Preguntas)
class PreguntasAdmin(admin.ModelAdmin):
    list_display = ('id_pregunta', 'descripcion', 'criterio', 'id_modulo')
    search_fields = ('descripcion', 'criterio')
    list_filter = ('id_modulo',)

@admin.register(Programas)
class ProgramasAdmin(admin.ModelAdmin):
    list_display = ('id_programa', 'nombre_programa', 'descripcion', 'id_director')
    search_fields = ('nombre_programa', 'descripcion')
    list_filter = ('id_director',)

@admin.register(Registros)
class RegistrosAdmin(admin.ModelAdmin):
    list_display = ('id_registro', 'hora', 'fecha', 'comentarios', 'id_usuario', 'id_modulo')
    search_fields = ('comentarios',)
    list_filter = ('fecha', 'id_usuario', 'id_modulo')

@admin.register(Rol)
class RolAdmin(admin.ModelAdmin):
    list_display = ('id_rol', 'descripcion')
    search_fields = ('descripcion',)

@admin.register(Suenos)
class SuenosAdmin(admin.ModelAdmin):
    list_display = ('id_sueno', 'nombre_sueno', 'contenido', 'alcance', 'nit', 'id_modulo')
    search_fields = ('nombre_sueno', 'contenido')
    list_filter = ('alcance', 'nit')

@admin.register(Talleres)
class TalleresAdmin(admin.ModelAdmin):
    list_display = ('id_taller', 'nombre_taller', 'criterio', 'id_modulo')
    search_fields = ('nombre_taller', 'criterio')
    list_filter = ('id_modulo',)

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id_usuario', 'id_rol', 'estado', 'correo', 'celular', 'documento', 'programa', 'contrasena', 'nombres', 'apellidos')
    search_fields = ('correo', 'nombres', 'apellidos')
    list_filter = ('estado', 'id_rol')



# Register your models here.

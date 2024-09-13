from django.contrib import admin
from .models import (
    Empresas, Postulante, MisePrueba, Modulos, Preguntas, Programas,
    Registros, Rol, Suenos, Talleres, Usuario, Autoevaluacion,
    ModuloAutoevaluacion, CalificacionModulo, Temas
)

@admin.register(Empresas)
class EmpresasAdmin(admin.ModelAdmin):
    list_display = ('nit', 'nombre_empresa', 'razon_social', 'direccion', 'correo')
    search_fields = ('nombre_empresa', 'razon_social', 'correo')

@admin.register(Postulante)
class PostulanteAdmin(admin.ModelAdmin):
    list_display = ('id_postulante', 'nombres_postulante', 'apellidos_postulante', 'correo', 'cargo')
    search_fields = ('nombres_postulante', 'apellidos_postulante', 'correo', 'cargo')

@admin.register(MisePrueba)
class MisePruebaAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'done')
    search_fields = ('title', 'description')

@admin.register(Modulos)
class ModulosAdmin(admin.ModelAdmin):
    list_display = ('id_modulo', 'nombre', 'escala', 'objetivo', 'estado_actual')
    search_fields = ('nombre', 'objetivo')

@admin.register(Preguntas)
class PreguntasAdmin(admin.ModelAdmin):
    list_display = ('id_pregunta', 'descripcion', 'criterio', 'id_modulo')
    search_fields = ('descripcion', 'criterio')

@admin.register(Programas)
class ProgramasAdmin(admin.ModelAdmin):
    list_display = ('id_programa', 'nombre_programa', 'descripcion')
    search_fields = ('nombre_programa', 'descripcion')

@admin.register(Registros)
class RegistrosAdmin(admin.ModelAdmin):
    list_display = ('id_registro', 'hora', 'fecha', 'comentarios', 'id_usuario', 'id_modulo')
    search_fields = ('comentarios',)

@admin.register(Rol)
class RolAdmin(admin.ModelAdmin):
    list_display = ('id_rol', 'descripcion')
    search_fields = ('descripcion',)

@admin.register(Suenos)
class SuenosAdmin(admin.ModelAdmin):
    list_display = ('id_sueno', 'nombre_sueno', 'contenido', 'alcance', 'nit')
    search_fields = ('nombre_sueno', 'contenido')

@admin.register(Talleres)
class TalleresAdmin(admin.ModelAdmin):
    list_display = ('id_taller', 'nombre_taller', 'criterio', 'id_modulo')
    search_fields = ('nombre_taller', 'criterio')

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id_usuario', 'correo', 'nombres', 'apellidos', 'estado', 'id_rol')
    search_fields = ('correo', 'nombres', 'apellidos')

@admin.register(Autoevaluacion)
class AutoevaluacionAdmin(admin.ModelAdmin):
    list_display = ('id_autoevaluacion', 'fecha', 'comentarios', 'nit')
    search_fields = ('comentarios',)

@admin.register(ModuloAutoevaluacion)
class ModuloAutoevaluacionAdmin(admin.ModelAdmin):
    list_display = ('id_modulo', 'nombre', 'descripcion')
    search_fields = ('nombre',)

@admin.register(CalificacionModulo)
class CalificacionModuloAdmin(admin.ModelAdmin):
    list_display = ('id_calificacion', 'calificacion', 'comentarios', 'id_autoevaluacion', 'id_modulo')
    search_fields = ('comentarios',)

@admin.register(Temas)
class TemasAdmin(admin.ModelAdmin):
    list_display = ('id_tema', 'area', 'titulo', 'contenido', 'fecha', 'horario', 'ubicacion')
    search_fields = ('titulo', 'contenido', 'ubicacion')

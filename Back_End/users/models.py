from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager    
import bcrypt


class Coordinador(models.Model):
    id_coordinador = models.IntegerField()
    nombres_coordinador = models.TextField()
    apellidos_coordinador = models.TextField()
    contraseña = models.TextField()
    correo = models.TextField()
    programa = models.TextField()
    celular = models.IntegerField()
    documento = models.IntegerField()
    id_usuario = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'coordinador'


class Director(models.Model):
    id_director = models.IntegerField()
    nombres_director = models.TextField()
    apellidos_director = models.TextField()
    correo = models.IntegerField()
    documento = models.IntegerField()
    celular = models.IntegerField()
    contrasena = models.TextField()
    id_usuario = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'director'

class Empresas(models.Model):
    nit = models.IntegerField(db_column='NIT', primary_key=True) 
    nombre_empresa = models.TextField()
    celular = models.IntegerField()
    razon_social = models.TextField()
    direccion = models.TextField()
    act_economica = models.TextField()
    gerente = models.TextField()
    producto_servicio = models.TextField(db_column='producto/servicio')
    correo = models.TextField()
    pagina_web = models.TextField()
    fecha_creacion = models.DateField()
    ventas_ult_ano = models.IntegerField()
    costos_ult_ano = models.IntegerField()
    empleados_perm = models.IntegerField()
    sector = models.TextField()
    estado = models.TextField()
    id_programa = models.ForeignKey('Programas', models.DO_NOTHING, db_column='id_programa')
    id_postulante = models.ForeignKey('Postulante', models.DO_NOTHING, db_column='id_postulante')

    class Meta:
        managed = False
        db_table = 'empresas'


class Modulos(models.Model):
    id_modulo = models.IntegerField(primary_key=True)
    nombre_modulo = models.TextField()
    escala = models.TextField()
    descripcion = models.TextField()
    observaciones = models.TextField()
    nivel_basico = models.TextField()
    estado_actual = models.TextField()
    nivel_ideal = models.TextField()

    class Meta:
        managed = False
        db_table = 'modulos'


class Postulante(models.Model):
    id_postulante = models.IntegerField(primary_key=True)
    nombres_postulante = models.TextField()
    apellidos_postulante = models.TextField()
    celular = models.IntegerField()
    genero = models.TextField()
    correo = models.TextField()
    municipio = models.TextField()
    no_documento = models.IntegerField()
    tipo_documento = models.TextField()
    id_rol = models.ForeignKey('Rol', models.DO_NOTHING, db_column='id_rol')

    class Meta:
        managed = False
        db_table = 'postulante'


class Preguntas(models.Model):
    id_pregunta = models.IntegerField(primary_key=True)
    descripcion = models.TextField()
    criterio = models.TextField()
    id_modulo = models.ForeignKey(Modulos, models.DO_NOTHING, db_column='id_modulo')

    class Meta:
        managed = False
        db_table = 'preguntas'


class Programas(models.Model):
    id_programa = models.IntegerField(primary_key=True)
    nombre_programa = models.TextField()
    descripcion = models.TextField()
    id_director = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'programas'


class Registros(models.Model):
    id_registro = models.IntegerField(primary_key=True)
    hora = models.IntegerField()
    fecha = models.DateField()
    comentarios = models.TextField()
    id_usuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usuario')
    id_modulo = models.ForeignKey(Modulos, models.DO_NOTHING, db_column='id_modulo')

    class Meta:
        managed = False
        db_table = 'registros'


class Rol(models.Model):
    id_rol = models.IntegerField(primary_key=True)
    descripcion = models.TextField()

    class Meta:
        managed = False
        db_table = 'rol'


class Suenos(models.Model):
    id_sueno = models.IntegerField(primary_key=True)
    nombre_sueno = models.IntegerField()
    contenido = models.IntegerField()
    alcance = models.IntegerField()
    nit = models.ForeignKey(Empresas, models.DO_NOTHING, db_column='NIT')
    id_modulo = models.ForeignKey(Modulos, models.DO_NOTHING, db_column='id_modulo')

    class Meta:
        managed = False
        db_table = 'sue±os'


class Talleres(models.Model):
    id_taller = models.IntegerField(primary_key=True)
    nombre_taller = models.TextField()
    criterio = models.TextField()
    id_modulo = models.ForeignKey(Modulos, models.DO_NOTHING, db_column='id_modulo')

    class Meta:
        managed = False
        db_table = 'talleres'


class Usuario(models.Model):
    id_usuario = models.IntegerField(primary_key=True)
    id_rol = models.ForeignKey(Rol, models.DO_NOTHING, db_column='id_rol')
    estado = models.TextField()
    correo = models.TextField()
    celular = models.IntegerField()
    documento = models.IntegerField()
    programa = models.TextField()
    contrasena = models.TextField()
    nombres = models.TextField()
    apellidos = models.TextField()

    class Meta:
        managed = False
        db_table = 'usuario'
        
    def set_password(self, raw_password):
    #HASH DE CONTRASEÑA
        self.contrasena = bcrypt.hashpw(raw_password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    #FUNCION QUE ME PERMITE VALIDAR MI CONTRASEÑA
    def check_password(self, raw_password):        
        return bcrypt.checkpw(raw_password.encode('utf-8'), self.contrasena.encode('utf-8'))

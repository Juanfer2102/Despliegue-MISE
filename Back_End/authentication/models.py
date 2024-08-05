from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class Empresas(models.Model):
    nit = models.IntegerField(db_column='NIT', primary_key=True)  # Field name made lowercase.
    nombre_empresa = models.TextField()
    celular = models.IntegerField()
    razon_social = models.TextField()
    direccion = models.TextField()
    act_economica = models.TextField()
    gerente = models.TextField()
    producto_servicio = models.TextField(db_column='producto/servicio')  # Field renamed to remove unsuitable characters.
    correo = models.TextField()
    pagina_web = models.TextField()
    fecha_creacion = models.DateField()
    ventas_ult_año = models.IntegerField()
    costos_ult_año = models.IntegerField()
    empleados_perm = models.IntegerField()
    sector = models.TextField()
    estado = models.TextField()
    id_programa = models.ForeignKey('Programas', models.DO_NOTHING, db_column='id_programa')
    id_postulante = models.ForeignKey('Postulante', models.DO_NOTHING, db_column='id_postulante')

    class Meta:
        managed = False
        db_table = 'empresas'


class MisePrueba(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    done = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'mise_prueba'


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
    id_usuario = models.ForeignKey('User', models.DO_NOTHING, db_column='id_usuario')
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


class Sueños(models.Model):
    id_sueño = models.IntegerField(primary_key=True)
    nombre_sueño = models.IntegerField()
    contenido = models.IntegerField()
    alcance = models.IntegerField()
    nit = models.ForeignKey(Empresas, models.DO_NOTHING, db_column='NIT')  # Field name made lowercase.
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

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)



class Coordinador(models.Model):
    id_coordinador = models.IntegerField(primary_key=True)
    nombres_coordinador = models.TextField()
    apellidos_coordinador = models.TextField()
    contraseña = models.TextField()
    correo = models.TextField()
    programa = models.TextField()
    celular = models.IntegerField()
    documento = models.IntegerField()
    id_usuario = models.ForeignKey('User', models.DO_NOTHING, db_column='id_usuario')

    class Meta:
        managed = False
        db_table = 'coordinador'


class Director(models.Model):
    id_director = models.IntegerField(primary_key=True)
    nombres_director = models.TextField()
    apellidos_director = models.TextField()
    correo = models.IntegerField()
    documento = models.IntegerField()
    celular = models.IntegerField()
    contraseña = models.TextField()
    id_usuario = models.ForeignKey('User', models.DO_NOTHING, db_column='id_usuario')

    class Meta:
        managed = False
        db_table = 'director'



class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=30)
    id_usuario = models.IntegerField(primary_key=True)
    id_rol = models.ForeignKey(Rol, models.DO_NOTHING, db_column='id_rol')
    descripcion = models.TextField()
    estado = models.TextField()
    correo = models.TextField()
    celular = models.IntegerField()
    documento = models.IntegerField()
    programa = models.TextField()
    password = models.TextField()
    apellidos = models.TextField()

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        managed = False
        db_table = 'usuario'
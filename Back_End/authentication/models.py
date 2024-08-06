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
    def create_user(self, correo, password=None, **extra_fields):
        if not correo:
            raise ValueError('The Email field must be set')
        correo = self.normalize_email(correo)
        user = self.model(correo=correo, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, correo, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(correo, password, **extra_fields)



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
    email = models.EmailField(unique=True, db_column='correo')
    name = models.CharField(max_length=30, db_column='nombres')
    id_usuario = models.IntegerField(primary_key=True, db_column='id_usuario')
    id_rol = models.ForeignKey(Rol, models.DO_NOTHING, db_column='id_rol')
    descripcion = models.TextField(db_column='descripcion')
    estado = models.TextField(db_column='estado')

    celular = models.IntegerField(db_column='celular')
    documento = models.IntegerField(db_column='documento')
    programa = models.TextField(db_column='programa')
    password = models.TextField(db_column='contraseña')
    apellidos = models.TextField(db_column='apellidos')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nombres', 'apellidos', 'documento']

    class Meta:
        managed = False
        db_table = 'usuario'

    def __str__(self):
        return self.correo
    
    def set_password(self, raw_password):
    #HASH DE CONTRASEÑA
        self.contrasena = bcrypt.hashpw(raw_password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    #FUNCION QUE ME PERMITE VALIDAR MI CONTRASEÑA
    def check_password(self, raw_password):        
        return bcrypt.checkpw(raw_password.encode('utf-8'), self.contrasena.encode('utf-8'))
import pymysql

# Datos de conexión a tu base de datos
host = 'sql203.infinityfree.com'
user = 'if0_37432251'  # Usuario de la base de datos
password = 'basededatosmise'  # Contraseña de la base de datos
db = 'if0_37432251_mise'  # Nombre de la base de datos

try:
    # Intentar conectar a la base de datos
    connection = pymysql.connect(
        host=host,
        user=user,
        password=password,
        db=db
    )
    print("Conexión exitosa a la base de datos.")
    connection.close()

except pymysql.MySQLError as e:
    print(f"Error al conectar a la base de datos: {e}")

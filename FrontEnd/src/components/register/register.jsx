import { useState } from 'react'; // Importa el hook useState de React para manejar el estado

const Register = () => {
    // Inicializa el estado userData con valores predeterminados
    const [userData, setUserData] = useState({
        correo: '',
        password: '',
        id_rol: '',
        descripcion: '',
        estado: true,
        celular: '',
        documento: '',
        programa: '',
        nombres: '',
        apellidos: ''
    });

    // Maneja los cambios en los campos de entrada
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // Maneja el registro del usuario
    const handleRegister = async () => {
        const response = await fetch('https://despliegue-mise.onrender.com/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifica que se está enviando JSON
            },
            body: JSON.stringify(userData) // Convierte el estado userData a JSON
        });

        if (response.ok) {
            alert('User registered successfully'); // Notificación de éxito
        } else {
            alert('Registration failed'); // Notificación de fallo
        }
    };

    return (
        <div>
            {/* Campos de entrada para los datos del usuario */}
            <input type="email" name="correo" value={userData.correo} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
            <input type="text" name="id_rol" value={userData.id_rol} onChange={handleChange} placeholder="Role ID" />
            <input type="text" name="descripcion" value={userData.descripcion} onChange={handleChange} placeholder="Description" />
            <input type="text" name="celular" value={userData.celular} onChange={handleChange} placeholder="Cellphone" />
            <input type="text" name="documento" value={userData.documento} onChange={handleChange} placeholder="DNI" />
            <input type="text" name="programa" value={userData.programa} onChange={handleChange} placeholder="Program" />
            <input type="text" name="nombres" value={userData.nombres} onChange={handleChange} placeholder="First Name" />
            <input type="text" name="apellidos" value={userData.apellidos} onChange={handleChange} placeholder="Last Name" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;

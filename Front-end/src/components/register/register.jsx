import { useState } from 'react';

const Register = () => {
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

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            alert('User registered successfully');
        } else {
            alert('Registration failed');
        }
    };

    return (
        <div>
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

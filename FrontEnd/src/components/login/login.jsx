import { useState } from 'react';

/**
 * Componente de inicio de sesión que permite a los usuarios ingresar su correo electrónico y contraseña.
 *
 * Utiliza el estado para gestionar los valores de correo electrónico y contraseña y realiza una solicitud de inicio de sesión a una API.
 *
 * @returns {JSX.Element} - Un formulario de inicio de sesión con campos para el correo electrónico y la contraseña, y un botón para iniciar sesión.
 */
const Login = () => {
    const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico
    const [password, setPassword] = useState(''); // Estado para almacenar la contraseña

    /**
     * Maneja el evento de inicio de sesión.
     * Realiza una solicitud POST a la API para autenticar al usuario.
     * Si la autenticación es exitosa, guarda los tokens en el almacenamiento local y muestra una alerta de éxito.
     * Si la autenticación falla, muestra una alerta de error.
     */
    const handleLogin = async () => {
        const response = await fetch('https://despliegue-mise.onrender.com/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Guardar los tokens en el almacenamiento local
            localStorage.setItem('refresh', data.refresh);
            localStorage.setItem('access', data.access);
            alert('Login successful');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;

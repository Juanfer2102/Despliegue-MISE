/**
 * Login.jsx
 * 
 * Componente para la vista de inicio de sesión. Proporciona una interfaz para que los usuarios inicien sesión en la aplicación y un enlace para registrar una nueva empresa.
 * 
 * Componentes utilizados:
 * - Logo: Componente que muestra el logo de la aplicación.
 * - Formlogin: Componente que presenta el formulario de inicio de sesión.
 * 
 * Funcionalidad:
 * - Muestra un fondo de pantalla de inicio de sesión con una imagen de fondo.
 * - Presenta el logo de la aplicación en la mitad de la pantalla.
 * - Proporciona un formulario para que los usuarios ingresen sus credenciales.
 * - Incluye un enlace para registrar una nueva empresa.
 * 
 * Estructura del componente:
 * - `main`: Contenedor principal que asegura que la vista ocupe al menos toda la altura de la pantalla.
 * - Fondo:
 *   - `div`: Capa de fondo negro semitransparente que cubre toda la pantalla.
 *   - `img`: Imagen de fondo que cubre toda la pantalla y está posicionada de forma fija.
 * - `div` principal:
 *   - **`Logo`**: Muestra el logo de la aplicación, centrado en la mitad de la pantalla en pantallas grandes y pequeñas.
 *   - **`Formlogin`**: Formulario de inicio de sesión, alineado a la izquierda en pantallas grandes y centrado en pantallas pequeñas.
 *   - Enlace para registro: Proporciona un enlace para registrar una nueva empresa.
 * 
 * Estilos:
 * - Utiliza Tailwind CSS para el diseño responsivo y estilización.
 * - `bg-black bg-opacity-60`: Capa de fondo negro con opacidad para superponer sobre la imagen.
 * - `object-cover`: Asegura que la imagen de fondo cubra toda la pantalla.
 * - Diseño responsivo con clases como `lg:w-1/2`, `xl:1/2`, `text-center`, y `text-left`.
 * 
 * Puntos clave:
 * - El componente proporciona una interfaz limpia y profesional para el inicio de sesión.
 * - La imagen de fondo y la capa semitransparente añaden un estilo visual atractivo.
 * - El diseño es adaptable a diferentes tamaños de pantalla mediante el uso de clases de Tailwind CSS.
 */

import React from "react";
import Logo from '../../components/logo/logo';
import Formlogin from "../../components/forms/formslogin/formslogin";

const Login = () => {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>
      <img
        src="/images/loginImg/bg-v2.jpg"
        alt="Background"
        className="w-full h-full object-cover fixed z-0"
      />
      <div className="relative z-20 flex flex-col lg:justify-between justify-center lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 xl:1/2 flex items-center justify-center xl:pb-0 pb-10">
          <Logo />
        </div>
        <div className="login-container text-white w-full lg:w-1/2 flex flex-col justify-center xl:items-center sm:items-center lg:items-center xl:pt-[8rem] lg:pr-32 xl:pr-20 gap-8 text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl">Iniciar Sesión</h1>

          <div className="w-full">
            <Formlogin />
          </div>

          <a href="/registro" className="text-lg sm:text-xl hover:underline">
            ¡Registra tu Empresa!
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;

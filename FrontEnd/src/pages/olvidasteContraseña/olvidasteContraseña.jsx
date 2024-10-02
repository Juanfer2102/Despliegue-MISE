/**
 * Credencial.jsx
 * 
 * Componente que permite a los usuarios establecer nuevas credenciales de acceso, incluyendo la creación de una nueva contraseña.
 * 
 * Componentes utilizados:
 * - `Logo`: Componente que muestra el logotipo de la aplicación.
 * - `Formscredenciales`: Componente de formulario para ingresar nuevas credenciales.
 * 
 * Funcionalidad:
 * - Proporciona instrucciones sobre los requisitos de la contraseña.
 * - Muestra un formulario para ingresar las nuevas credenciales del usuario.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal para la página.
 *   - **`div` con fondo negro translúcido:** Cubre toda la pantalla para dar un efecto de superposición.
 *   - **`img` con fondo de imagen:** Imagen de fondo fija que ocupa toda la pantalla.
 *   - **`div` con `relative z-20`:** Contenedor principal con posición relativa y diseño flexible.
 *     - **`Logo`:** Componente que muestra el logotipo de la aplicación, centrado vertical y horizontalmente.
 *     - **`div` con `login-container`:** Contenedor para el texto e instrucciones sobre las credenciales.
 *       - **`p`:** Mensajes informativos sobre la creación de nuevas credenciales.
 *       - **`Formscredenciales`:** Componente para ingresar las nuevas credenciales del usuario.
 * 
 * Estilos:
 * - **`bg-black bg-opacity-60`:** Fondo negro translúcido para el efecto de superposición.
 * - **`fixed`, `z-0`:** Imagen de fondo fija detrás del contenido.
 * - **`relative`, `z-20`:** Contenedor principal con posición relativa para superponer otros elementos.
 * - **`text-white`:** Color de texto blanco para el contenido.
 * - **`pr-40`:** Espaciado a la derecha para el contenedor del formulario.
 * - **`gap-3`:** Espaciado entre los elementos de texto.
 * 
 * Puntos Clave:
 * - El componente está diseñado para permitir a los usuarios crear nuevas credenciales de acceso.
 * - Incluye requisitos claros para la contraseña, mejorando la usabilidad y seguridad.
 * 
 * Notas:
 * - Asegúrate de que las clases `bg-black` y los colores estén definidos en tu archivo de estilos globales.
 */

import React from "react";
import Logo from "../../components/logo/logo";
import Formsrecupcont from "../../components/forms/formsrecupcont/formsrecupcont";

const Olvidastecontra = () => {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>
      <img
        src="../src/images/loginImg/bg.jpg"
        alt="Background"
        className="w-full h-full object-cover fixed z-0"
      />
      <div className="relative z-20 flex flex-col lg:justify-center justify-center lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 xl:1/2 flex items-center justify-center xl:pb-0 pb-10">
          <Logo />
        </div>
        <div className="login-container text-white w-full lg:w-1/2 flex flex-col lg:justify-center justify-center xl:justify-center items-center lg:items-start xl:items-center lg:pr-20 xl:pr-20 space-y-6 text-center">
          <h1 className="font-bold text-2xl text-center sm:text-3xl lg:pl-10">¿Olvidaste tu Contraseña?</h1>
          <p className="text-lg sm:text-xl max-w-md text-center">
            Proporciona el correo electrónico de tu cuenta para restablecer su contraseña.
          </p>

          <div className="w-full max-w-md">
            <Formsrecupcont />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Olvidastecontra;

/**
 * Credencial.jsx
 * 
 * Componente que permite a los usuarios establecer nuevas credenciales de acceso, incluyendo la creación de una nueva contraseña.
 * 
 * Componentes utilizados:
 * - Logo: Componente que muestra el logotipo de la aplicación.
 * - Formscredenciales: Componente de formulario para ingresar nuevas credenciales.
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
 *     - **`div` con `login-container`:** Contenedor principal para el texto e instrucciones sobre las credenciales.
 *       - **`p`:** Mensajes informativos sobre la creación de nuevas credenciales.
 *       - **`Formscredenciales`:** Componente para ingresar las nuevas credenciales del usuario.
 * 
 * Estilos:
 * - **`bg-black bg-opacity-60`:** Fondo negro translúcido para dar un efecto de superposición.
 * - **`fixed`, `z-0`:** Imagen de fondo fija detrás del contenido.
 * - **`relative`, `z-20`:** Contenedor principal con posición relativa para superponer otros elementos.
 * - **`text-white`:** Color de texto blanco para el contenido.
 * - **`pr-40`:** Espaciado a la derecha para el contenedor de formulario.
 * - **`gap-3`:** Espaciado entre los elementos de texto.
 * 
 * Puntos Clave:
 * - El componente está diseñado para permitir a los usuarios crear nuevas credenciales de acceso.
 * - Incluye requisitos claros para la contraseña, mejorando la usabilidad y seguridad.
 * 
 * Notas:
 * - Asegúrate de que el estilo de la clase `bg-black` y los colores estén definidos en tu archivo de estilos globales.
 */

import React from "react";
import Logo from "../../components/logo/logo";
import Formscredenciales from "../../components/forms/formscredenciales/formscredenciales";

const Credencial = () => {
  return (
    <main>
      <div className="h-full w-full absolute z-10 bg-black bg-opacity-60"></div>
      <img
        src="/images/loginImg/bg-v2.jpg"
        alt="Background"
        className="w-full h-full object-cover fixed z-0"
      />
      <div className="all relative z-20 flex h-screen items-center justify-center gap-0">
        <div className="w-full h-full">
          <div className="flex w-full h-full items-center justify-center">
            <Logo />
          </div>
        </div>
        <div className="login-container text-white w-full h-full flex flex-col justify-center pr-40 gap-3 text-center">
          <p className="font-bold text-2xl">Nuevas Credenciales</p>
          <p>La contraseña debe tener como mínimo 8 caracteres.</p>
          <Formscredenciales client:visible />
        </div>
      </div>
    </main>
  );
};

export default Credencial;

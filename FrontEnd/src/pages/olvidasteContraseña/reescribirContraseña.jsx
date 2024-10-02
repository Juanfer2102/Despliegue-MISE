/**
 * Rescribircontrase.jsx
 * 
 * Componente que proporciona una interfaz para restablecer la contraseña de un usuario. Incluye un mensaje informativo y un formulario para reescribir la contraseña.
 * 
 * Componentes utilizados:
 * - Logo: Muestra el logotipo de la aplicación.
 * - Formsreescribircont: Componente del formulario para restablecer la contraseña.
 * 
 * Funcionalidad:
 * - Muestra un mensaje informativo sobre el restablecimiento de la contraseña y un formulario para ingresar la nueva contraseña.
 * - Utiliza un fondo oscuro superpuesto y una imagen de fondo fija para la estética.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal que ocupa toda la pantalla.
 *   - **`div` con `bg-black bg-opacity-60`:** Fondo oscuro con opacidad para crear un efecto de superposición.
 *   - **`img`:** Imagen de fondo que cubre toda la pantalla, con estilo fijo para que no se mueva al hacer scroll.
 *   - **`div` con `all relative z-20 flex h-screen items-center justify-center gap-0`:** Contenedor que posiciona el contenido centralizado vertical y horizontalmente.
 *     - **`div` con `w-full h-full`:** Contenedor para el logo que ocupa toda la altura y anchura disponibles.
 *       - **`div` con `flex w-full h-full items-center justify-center`:** Contenedor que centra el logotipo.
 *         - **`Logo`:** Componente que muestra el logotipo.
 *     - **`div` con `login-container text-white w-full h-full flex flex-col justify-center pr-40 gap-6 text-center`:** Contenedor para el mensaje y el formulario de restablecimiento de contraseña.
 *       - **`p` con `font-bold text-3xl`:** Mensaje de título que indica que se olvidó la contraseña.
 *       - **`p` con `text-2xl`:** Mensaje informativo sobre el proceso de restablecimiento de contraseña.
 *       - **`Formsreescribircont`:** Componente del formulario para ingresar la nueva contraseña.
 * 
 * Estilos:
 * - **`bg-black bg-opacity-60`:** Fondo oscuro semi-transparente para superposición.
 * - **`w-full h-full`:** Elementos que ocupan toda la altura y anchura disponibles.
 * - **`fixed z-0`:** Imagen de fondo fija en el fondo, sin que se mueva con el scroll.
 * - **`relative z-20`:** Contenedor que se superpone al fondo oscuro y la imagen.
 * - **`text-white`, `font-bold`, `text-3xl`, `text-2xl`:** Estilos de texto para el mensaje.
 * - **`flex`, `items-center`, `justify-center`:** Centrando elementos vertical y horizontalmente.
 * 
 * Notas:
 * - Asegúrate de que el componente `Formsreescribircont` esté correctamente implementado para manejar el restablecimiento de contraseña.
 * - La imagen de fondo y el fondo oscuro se superponen para crear un efecto visual atractivo.
 * - Ajusta el espaciado (`pr-40`, `gap-6`) y los estilos de texto según las necesidades del diseño.
 */

import React from "react";
import Logo from "../../components/logo/logo";
import Formsreescribircont from "../../components/forms/formsreescribircont/formsreescribircont";

const Rescribircontrase = () => {
  return (
    <main>
      <div className="h-full w-full absolute z-10 bg-black bg-opacity-60"></div>
      <img
        src="/images/loginImg/bg-v2.jpg"
        alt=""
        className="w-full h-full fixed z-0"
      />
      <div className="all relative z-20 flex h-screen items-center justify-center gap-0">
        <div className="w-full h-full">
          <div className="flex w-full h-full items-center justify-center">
            <Logo />
          </div>
        </div>
        <div
          className="login-container text-white w-full h-full flex flex-col justify-center pr-40 gap-6 text-center"
        >
          <p className="font-bold text-3xl">¿Olvidaste tu Contraseña?</p>
          <p className="text-2xl">
            Recibirás un enlace para restablecer tu contraseña.
            Por favor, revisa tu correo.
          </p>

          <Formsreescribircont />
          
        </div>
      </div>
    </main>
  );
};

export default Rescribircontrase;

/**
 * Registro.jsx
 * 
 * Componente que proporciona una interfaz para el registro de usuarios, incluyendo un formulario para ingresar la información personal y una presentación del logotipo de la aplicación.
 * 
 * Componentes utilizados:
 * - `Logo`: Componente que muestra el logotipo de la aplicación.
 * - `FormRegistro`: Componente de formulario para registrar a un nuevo usuario.
 * 
 * Funcionalidad:
 * - Ofrece un formulario para el registro de nuevos usuarios.
 * - Muestra el logotipo de la aplicación junto con el formulario.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal para la página de registro.
 *   - **`div` con fondo oscuro translúcido (`bg-black bg-opacity-60`):** Superpone un fondo oscuro para mejorar la visibilidad del contenido.
 *   - **`div` con imagen de fondo:** Imagen de fondo que ocupa toda la pantalla, ajustada con `object-cover` para mantener la proporción.
 *   - **`div` con `relative z-20`:** Contenedor principal con posición relativa que contiene el contenido del registro.
 *     - **`register-container`:** Contenedor del formulario de registro con espaciado y diseño flexibles.
 *       - **`p` con mensaje de encabezado:** Texto que indica el propósito del formulario de registro.
 *       - **`FormRegistro`:** Componente para ingresar la información de registro del usuario.
 *     - **`div` para el logo:** Contenedor para mostrar el logotipo de la aplicación.
 * 
 * Estilos:
 * - **`bg-black bg-opacity-60`:** Fondo negro translúcido para dar un efecto de superposición.
 * - **`absolute inset-0`:** Imagen de fondo y overlay posicionados para cubrir toda la pantalla.
 * - **`relative z-20`:** Contenedor principal con posición relativa para asegurar que el contenido se superponga correctamente.
 * - **`text-white`:** Color de texto blanco para mejorar el contraste con el fondo oscuro.
 * - **`lg:w-[50rem]`:** Ancho fijo para pantallas grandes, adaptado para el contenedor del formulario y el logo.
 * - **`customScrollbar`:** Personalización del scrollbar para mejorar la apariencia del contenido desplazable.
 * 
 * Puntos Clave:
 * - El componente ofrece una interfaz clara para el registro de nuevos usuarios.
 * - Incluye el logotipo de la aplicación y un fondo atractivo para una mejor experiencia de usuario.
 * 
 * Notas:
 * - Asegúrate de que los estilos personalizados del scrollbar sean aplicables en todos los navegadores que necesitas soportar.
 * - Verifica que la imagen de fondo esté correctamente ubicada en la carpeta de imágenes y accesible desde el componente.
 */

import React from "react";
import Logo from "../../components/logo/logo";
import { FormRegistro } from "../../components/forms/formsregistro/formsregistro";

const Registro = () => {

  // Estilos en JSX
  const styles = {
    customScrollbar: {
      scrollbarWidth: '13px',
      scrollbarColor: '#888 #262b32',
    },
    customScrollbarTrack: {
      background: '#262b32',
      borderRadius: '12px',
    },
    customScrollbarThumb: {
      background: '#888',
      borderRadius: '10px',
    },
    customScrollbarThumbHover: {
      background: '#555',
    }
  };

  return (
    <main className="relative h-screen">
      {/* Overlay para el fondo oscuro */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/loginImg/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor del contenido */}
      <div className="relative z-20 flex flex-col-reverse xl:flex-row lg:flex-row items-center justify-center h-full xl:gap-5 lg:gap-5 p-4 lg:p-0">
        {/* Contenedor del formulario de registro */}
        <div className="register-container text-white w-full lg:w-[50rem] h-full flex flex-col justify-center xl:pl-28 lg:py-5 lg:pl-28 gap-5 text-center lg:text-left" style={styles.customScrollbar}>
          <p className="font-bold text-2xl lg:text-3xl">Registro Persona</p>
          <FormRegistro client:visible />
        </div>

        {/* Contenedor del logo */}
        <div className="w-full lg:w-[50rem] flex items-center justify-center lg:pt-20 xl:p-6 lg:p-6">
          <Logo />
        </div>
      </div>
    </main>
  );
};

export default Registro;

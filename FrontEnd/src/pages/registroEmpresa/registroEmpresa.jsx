/**
 * RegistroEmpresa.jsx
 * 
 * Componente para el registro de empresas en la aplicación. Proporciona una interfaz para que los usuarios ingresen la información de registro, con un diseño visual atractivo y claro.
 * 
 * Componentes utilizados:
 * - `FormsRegistro`: Componente que contiene el formulario para registrar una nueva empresa.
 * - `Logo`: Componente que muestra el logotipo de la aplicación (aunque no se utiliza en este componente, es importado).
 * 
 * Funcionalidad:
 * - Ofrece una interfaz de usuario con una imagen de fondo y un efecto de superposición oscura para mejorar la visibilidad del contenido.
 * - Muestra un formulario para ingresar la información de la empresa.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal para la página de registro.
 *   - **`div` con fondo oscuro translúcido (`bg-black bg-opacity-60`):** Cubre toda la pantalla para crear un efecto de superposición y mejorar la legibilidad del contenido.
 *   - **`div` con imagen de fondo:** Imagen de fondo que ocupa toda la pantalla, ajustada con `object-cover` para mantener la proporción.
 *   - **`div` con `relative z-20`:** Contenedor principal con posición relativa que permite la superposición de otros elementos.
 *     - **`register-container`:** Contenedor para el formulario de registro con espaciado y diseño flexibles, adaptado a diferentes tamaños de pantalla.
 *       - **`FormsRegistro`:** Componente para el formulario de registro de empresa.
 * 
 * Estilos:
 * - **`bg-black bg-opacity-60`:** Fondo negro translúcido para dar un efecto de superposición.
 * - **`fixed`, `z-0`:** Imagen de fondo fija detrás del contenido principal.
 * - **`relative`, `z-20`:** Contenedor principal con posición relativa para asegurar que el contenido se superponga correctamente.
 * - **`text-white`:** Color de texto blanco para mejorar el contraste con el fondo oscuro.
 * - **`lg:px-20`, `lg:py-10`:** Espaciado adicional en pantallas grandes.
 * - **`flex flex-col-reverse xl:flex-row lg:flex-row`:** Diseño flexible que cambia según el tamaño de la pantalla para una mejor presentación.
 * - **`customScrollbar`:** Personalización del scrollbar para mejorar la apariencia del contenido desplazable.
 * 
 * Puntos Clave:
 * - Proporciona una interfaz visualmente atractiva para el registro de nuevas empresas.
 * - Incluye personalización del scrollbar y un fondo oscuro para una mejor experiencia de usuario.
 * 
 * Notas:
 * - Asegúrate de que la imagen de fondo y los estilos de la clase `bg-black` estén correctamente definidos en tus archivos de estilos globales.
 * - Verifica que los estilos personalizados del scrollbar sean aplicables en todos los navegadores que necesitas soportar.
 */


import React from "react";
import FormsRegistro from "../../components/forms/formsregistroemp/formsregistroemp";
import Logo from "../../components/logo/logo";

const RegistroEmpresa = () => {

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
    <main>
      {/* Fondo oscuro superpuesto */}
      <div className="h-full w-full absolute z-10 bg-black bg-opacity-60"></div>

      {/* Imagen de fondo */}
      <div className="flex flex-col">
        <img
          src="/images/loginImg/bg-v2.jpg"
          alt=""
          className="w-full h-full fixed z-0 object-cover"
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-20 flex flex-col-reverse xl:flex-row lg:flex-row items-center justify-center h-screen xl:gap-5 lg:gap-5 p-4 lg:p-0">
        <div className="register-container text-white w-full h-full flex flex-col justify-center lg:px-20 lg:py-10 gap-5 text-center lg:text-left" style={styles.customScrollbar}>
          <FormsRegistro client:visible />
        </div>
      </div>
    </main>
  );
};

export default RegistroEmpresa;

/**
 * Editarsueos.jsx
 * 
 * Componente que proporciona una interfaz para la edición de sueños. Incluye un modal para editar información relacionada con sueños.
 * 
 * Componentes utilizados:
 * - `LayoutDashboard`: Componente que proporciona un diseño general para el panel de administración.
 * - `Modaleditar`: Componente de modal para la edición de sueños.
 * - `BotonGuardar`: Componente de botón para guardar cambios (importado pero no utilizado en este componente).
 * 
 * Funcionalidad:
 * - Muestra un modal para la edición de sueños, con una condición específica.
 * 
 * Estructura del componente:
 * - **`LayoutDashboard`:** Contenedor que proporciona el diseño del panel de administración y establece el título de la página.
 *   - **`main`:** Contenedor principal para la página de edición de sueños.
 *     - **`div` con fondo gris (`bg-greyBg`):** Fondo de la página.
 *     - **`div` con fondo negro (`bg-greyBlack`):** Barra superior de la página.
 *     - **`div` con espaciado (`px-4 sm:px-8`):** Contenedor del contenido principal con diseño flexible.
 *       - **`div` con diseño flex y espaciado:** Contenedor para el modal de edición.
 *         - **`Modaleditar`:** Componente de modal para la edición de sueños, con una condición específica (valor 4).
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris para el contenedor principal.
 * - **`bg-greyBlack`:** Fondo negro para la barra superior.
 * - **`flex`, `gap-5`, `py-2`:** Diseño flexible y espaciado entre los elementos.
 * - **`customScrollbar`:** Personalización del scrollbar para una apariencia mejorada.
 * - **`customScrollbarThumb` y `customScrollbarThumbHover`:** Estilos para el pulgar del scrollbar y su estado al pasar el ratón.
 * 
 * Puntos Clave:
 * - El componente está diseñado para proporcionar una interfaz para editar información relacionada con sueños.
 * - Incluye un modal específico para la edición, adaptado a una condición particular.
 * 
 * Notas:
 * - El componente `BotonGuardar` se importa pero no se utiliza en este componente. Considera eliminar la importación si no es necesario.
 * - Asegúrate de que el modal `Modaleditar` maneje correctamente la condición proporcionada (`condicion={4}`).
 */


import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Modaleditar from "../../components/modales/modaleditar.jsx";
import BotonGuardar from "../../components/modales/modalcarga/modalcarga.jsx";

// Estilos en JSX
const styles = {
  customScrollbar: {
    scrollbarWidth: 'thin', // Para navegadores que soportan scrollbars personalizadas
    scrollbarColor: '#888 #262b32', // thumb color y track color
  },
  customScrollbarThumb: {
    backgroundColor: '#888',
    borderRadius: '10px',
  },
  customScrollbarThumbHover: {
    backgroundColor: '#555',
  }
};

const Editarsueos = () => {
  return (
    <LayoutDashboard title="Sueños">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={4} client:visible />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Editarsueos;

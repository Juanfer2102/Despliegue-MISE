/**
 * Nuevomodulo.jsx
 * 
 * Componente para la página de creación de un nuevo módulo en el panel de administración. Permite editar un módulo existente o crear uno nuevo.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente que proporciona la estructura básica del panel de administración.
 * - Modaleditar: Componente de modal para editar o crear un módulo.
 * 
 * Funcionalidad:
 * - Muestra un modal para editar o crear un nuevo módulo.
 * 
 * Estilos en JSX:
 * - **`customScrollbar`:** Estilos para personalizar la apariencia de la barra de desplazamiento.
 *   - `scrollbarWidth`: Ajusta el ancho de la barra de desplazamiento.
 *   - `scrollbarColor`: Define los colores para la barra de desplazamiento.
 * - **`customScrollbarTrack`:** Estilo para el fondo de la pista de la barra de desplazamiento.
 *   - `background`: Color de fondo.
 *   - `borderRadius`: Radio de borde para redondear las esquinas.
 * - **`customScrollbarThumb`:** Estilo para el "pulgar" de la barra de desplazamiento.
 *   - `background`: Color del pulgar.
 *   - `borderRadius`: Radio de borde para redondear las esquinas del pulgar.
 * - **`customScrollbarThumbHover`:** Estilo para el pulgar cuando el cursor está sobre él.
 *   - `background`: Color del pulgar en estado hover.
 * 
 * Estructura del componente:
 * - `LayoutDashboard`: Componente que envuelve la página proporcionando la estructura básica del panel de administración.
 * - `main`: Contenedor principal con fondo y estilo de altura completa.
 *   - **`div` con `bg-greyBlack`:** Sección superior con un fondo negro.
 *   - **`div` con `bg-greyBg`:** Contenedor principal con fondo gris y diseño flexible.
 *     - **`div` con `flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2`:** Contenedor flexible para el contenido de la página.
 *       - **`div` con `h-full flex flex-col gap-[5rem] justify-center`:** Contenedor para el modal, con espaciado y alineación.
 *         - **`Modaleditar`:** Componente de modal para editar o crear un nuevo módulo, con una prop `condicion` que puede determinar el estado del modal (en este caso, `condicion={1}`).
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris para el contenedor principal.
 * - **`bg-greyBlack`:** Fondo negro para la sección superior.
 * - **`flex`, `gap-5`, `py-2`:** Diseño flexible con espaciado entre elementos.
 * - **`h-full`, `flex-col`, `gap-[5rem]`, `justify-center`:** Estilos para centrar y espaciado del contenido.
 * 
 * Puntos Clave:
 * - El diseño es flexible y se adapta a diferentes tamaños de pantalla.
 * - El modal `Modaleditar` se utiliza para crear o editar un módulo, según la prop `condicion`.
 * - La estructura de la página permite una vista clara y organizada del contenido del modal.
 */


import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modaleditar from "../../components/modales/modaleditar";

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

const Nuevomodulo = () => {
  return (
    <LayoutDashboard>
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={1} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Nuevomodulo;

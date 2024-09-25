/**
 * ModulosPage.jsx
 * 
 * Componente para la página de módulos en el panel de administración. Permite mostrar y editar módulos utilizando un modal.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente que proporciona la estructura básica del panel de administración.
 * - Editarmodulos: Componente modal que permite editar módulos.
 * 
 * Funcionalidad:
 * - Muestra un modal para la edición de módulos.
 * - Utiliza un diseño responsivo que se adapta a diferentes tamaños de pantalla.
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
 * - `LayoutDashboard`: Componente que envuelve la página proporcionando un título y estructura general.
 * - `main`: Contenedor principal con fondo y estilo de altura completa.
 *   - **`div` con `bg-greyBlack`:** Sección superior con un fondo negro.
 *   - **`div` con `bg-greyBg`:** Sección principal con fondo gris.
 *     - **`div` con `flex` y `gap-5`:** Contenedor flexible para el contenido de la página.
 *       - **`Editarmodulos`:** Componente modal para editar módulos, con la propiedad `condicion` establecida en `2`.
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris para el contenedor principal.
 * - **`bg-greyBlack`:** Fondo negro para la sección superior.
 * - **`gap-5`:** Espaciado entre elementos en el contenedor flexible.
 * - **`h-full` y `w-full`:** Altura y ancho completos para los contenedores.
 * - **`flex` y `flex-col`:** Utilización de flexbox para el diseño en columna.
 * 
 * Puntos clave:
 * - La página utiliza un diseño responsivo para adaptarse a diferentes tamaños de pantalla.
 * - El modal `Editarmodulos` se utiliza para la edición de módulos y se muestra en el centro de la pantalla.
 * - Los estilos personalizados para la barra de desplazamiento proporcionan una apariencia consistente con el tema de la aplicación.
 * 
 * Nota:
 * - Asegúrate de que los estilos de la barra de desplazamiento sean aplicables en todos los navegadores y considera el uso de `::-webkit-scrollbar` para navegadores basados en WebKit.
 */

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Editarmodulos from "../../components/modales/modaleditar.jsx";

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

const ModulosPage = () => {
  return (
    <LayoutDashboard title="Modulos">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Editarmodulos condicion={2} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default ModulosPage;

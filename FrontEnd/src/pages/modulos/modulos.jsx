/**
 * Modulos.jsx
 * 
 * Componente para la página de módulos en el panel de administración. Permite gestionar módulos y proporciona opciones para crear o editar módulos.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente que proporciona la estructura básica del panel de administración.
 * - ModulosContainer: Componente que muestra una lista o contenedor de módulos.
 * - Modalopciones: Componente que muestra opciones para crear o editar diferentes tipos de módulos.
 * 
 * Funcionalidad:
 * - Muestra un contenedor con una lista de módulos.
 * - Proporciona opciones para crear o editar módulos a través de botones con enlaces.
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
 *   - **`div` con `bg-greyBg`:** Contenedor principal con fondo gris y diseño flexible.
 *     - **`p` con `text-2xl text-white py-3`:** Título de la página.
 *     - **`div` con `flex` y `gap-5`:** Contenedor flexible para el contenido de la página.
 *       - **`div` con `container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow`:** Contenedor para la lista de módulos con scroll personalizado.
 *         - **`ModulosContainer`:** Componente que muestra la lista o detalles de módulos.
 *       - **`div` con `flex flex-col xl:flex-col justify-center xl:justify-center gap-4 lg:gap-5 xl:gap-5 mt-4 lg:mt-0`:** Contenedor para las opciones de modal.
 *         - **`Modalopciones`:** Botones que permiten crear o editar diferentes tipos de módulos, con texto y enlaces configurables.
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris para el contenedor principal.
 * - **`bg-greyBlack`:** Fondo negro para la sección superior.
 * - **`text-2xl` y `text-white`:** Estilo para el título de la página.
 * - **`container`, `rounded-xl`, `max-h-[calc(100vh-10rem)]`, `overflow-y-auto`, `flex-grow`:** Estilos para el contenedor de módulos con barra de desplazamiento personalizada.
 * - **`gap-5` y `mt-4`:** Espaciado entre elementos en el diseño flexible.
 * 
 * Puntos clave:
 * - El diseño es flexible y se adapta a diferentes tamaños de pantalla.
 * - Se utiliza un contenedor con scroll personalizado para la lista de módulos.
 * - Las opciones de modal permiten gestionar diferentes tipos de módulos a través de enlaces configurables.
 * 
 * Nota:
 * - Asegúrate de que los estilos de la barra de desplazamiento sean aplicables en todos los navegadores y considera el uso de `::-webkit-scrollbar` para navegadores basados en WebKit.
 */

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modal from "../../components/modales/modal";
import Modalopciones from "../../components/modales/modalopciones";
import ModulosContainer from '../../components/crearyeditar/moduloscont';

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

const Modulos = () => {
  return (
    <LayoutDashboard title="Modulos">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <p className="text-2xl text-white py-3">Modulos</p>

            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5">
              <div
                className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow"
                style={styles.customScrollbar}
              >
                  <ModulosContainer />
              </div>
              <div className="flex flex-col xl:flex-col justify-center xl:justify-center gap-4 lg:gap-5 xl:gap-5 mt-4 lg:mt-0">
                <Modalopciones texto="Sueños" URL="/sueños" />
                <Modalopciones texto="Preguntas" URL="/preguntas" />
                <Modalopciones texto="Temas" URL="/temas" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Modulos;

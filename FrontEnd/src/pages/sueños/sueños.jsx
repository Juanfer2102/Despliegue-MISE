/**
 * Sueos.jsx
 * 
 * Componente para mostrar una lista de sueños y opciones de navegación relacionadas. Este componente utiliza un contenedor
 * para mostrar una lista de sueños y proporciona enlaces a otras secciones relevantes del dashboard.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Estructura de diseño general para la página con título.
 * - SuenosContainer: Componente que muestra una lista o contenedor de sueños.
 * - Modalopciones: Componente para mostrar opciones de navegación con enlaces a diferentes secciones.
 * 
 * Estilos en JSX:
 * - **`customScrollbar`:** Estilo para personalizar la barra de desplazamiento.
 *   - **`scrollbarWidth: '13px'`:** Configura el ancho de la barra de desplazamiento.
 *   - **`scrollbarColor: '#888 #262b32'`:** Color del pulgar y del track de la barra de desplazamiento.
 * - **`customScrollbarTrack`:** Estilo del track de la barra de desplazamiento.
 *   - **`background: '#262b32'`:** Color de fondo del track.
 *   - **`borderRadius: '12px'`:** Radio de borde del track.
 * - **`customScrollbarThumb`:** Estilo del pulgar de la barra de desplazamiento.
 *   - **`background: '#888'`:** Color de fondo del pulgar.
 *   - **`borderRadius: '10px'`:** Radio de borde del pulgar.
 * - **`customScrollbarThumbHover`:** Estilo del pulgar cuando el ratón pasa sobre él.
 *   - **`background: '#555'`:** Color del pulgar al pasar el ratón.
 * 
 * Funcionalidad:
 * - El componente se muestra en el marco del `LayoutDashboard` con un fondo gris y una barra de navegación superior.
 * - Utiliza el componente `SuenosContainer` para mostrar una lista de sueños dentro de un contenedor con barra de desplazamiento personalizada.
 * - Ofrece enlaces a otras secciones del dashboard a través del componente `Modalopciones`.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal con fondo gris y altura de pantalla completa.
 *   - **`div` con `bg-greyBlack`:** Barra de navegación superior.
 *   - **`div` con `bg-greyBg`:** Contenedor principal para el contenido.
 *     - **`p`:** Título de la sección "Sueños".
 *     - **`div` con `flex`:** Contenedor flexible que organiza el contenido.
 *       - **`div` con `container`:** Contenedor de sueños con barra de desplazamiento personalizada.
 *         - **`SuenosContainer`:** Muestra una lista o contenedor de sueños.
 *       - **`div` con `flex flex-col`:** Contenedor para las opciones de navegación.
 *         - **`Modalopciones`:** Muestra opciones para navegar a diferentes secciones del dashboard.
 * 
 * Puntos Clave:
 * - El componente está diseñado para facilitar la visualización y navegación dentro de la sección de sueños del dashboard.
 * - Utiliza una barra de desplazamiento personalizada para una mejor experiencia visual.
 * 
 * Notas:
 * - Asegúrate de que el componente `SuenosContainer` esté correctamente implementado y muestre la información relevante.
 * - El estilo personalizado de la barra de desplazamiento debe ser revisado para asegurarse de que sea consistente en todos los navegadores.
 */

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import SuenosContainer from '../../components/crearyeditar/sueñoscont.jsx';
import Modalopciones from "../../components/modales/modalopciones.jsx";

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

const Sueos = () => {
  return (
    <LayoutDashboard title="Sueños">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">

            <p className="text-2xl text-white py-3">Sueños</p>

            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5">
              <div className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow custom-scrollbar" 
              style={styles.customScrollbar}>
                <SuenosContainer />
              </div>
              <div className="flex flex-col gap-5 sm:gap-10 justify-center">
                <Modalopciones texto="Modulos" URL="/modulos" />
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

export default Sueos;

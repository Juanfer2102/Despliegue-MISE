/**
 * Preguntas.jsx
 * 
 * Componente que representa la página para la gestión de preguntas dentro del panel de control.
 * Permite visualizar y administrar preguntas y proporciona opciones de navegación hacia otros módulos.
 * 
 * Componentes utilizados:
 * - `LayoutDashboard`: Contenedor principal para la estructura del dashboard.
 * - `Modalopciones`: Componente de modal para navegar a otras secciones.
 * - `PreguntasContainer`: Componente que muestra el contenedor principal de preguntas.
 * 
 * Funcionalidad:
 * - Muestra una lista de preguntas en un contenedor con un scroll personalizado.
 * - Proporciona enlaces para navegar a otras secciones relacionadas.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal para la página.
 *   - **`div` con fondo negro:** Encabezado del dashboard.
 *   - **`div` con fondo gris:** Contenedor para el contenido y otros elementos.
 *     - **`p`:** Título de la sección de preguntas.
 *     - **`div` flexible:** Contenedor para el listado de preguntas y los botones de navegación.
 *       - **`PreguntasContainer`:** Componente que muestra las preguntas en un contenedor con scroll personalizado.
 *       - **`div` con `Modalopciones`:** Contiene botones para navegar a módulos relacionados (Módulos, Sueños, Temas).
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris claro para el contenido de la página.
 * - **`bg-greyBlack`:** Fondo negro para la cabecera del dashboard y el contenedor de preguntas.
 * - **`h-screen`:** Altura completa de la pantalla.
 * - **`overflow-x-hidden`:** Oculta el desbordamiento horizontal.
 * - **`flex`:** Utiliza un diseño flexible para la disposición de elementos.
 * - **`customScrollbar`:** Personalización del scroll en el contenedor de preguntas.
 * 
 * Puntos Clave:
 * - El componente permite la visualización y gestión de preguntas con un diseño responsivo.
 * - Ofrece navegación a otras secciones mediante botones de opciones.
 * 
 * Notas:
 * - Asegúrate de que los estilos y componentes utilizados estén correctamente definidos en tu proyecto.
 * - Verifica que la propiedad `style` aplicada al contenedor de preguntas funcione correctamente con el scroll personalizado.
 */

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Modalopciones from "../../components/modales/modalopciones.jsx";
import PreguntasContainer from '../../components/crearyeditar/preguntascont.jsx';

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


const Preguntas = () => {
  return (
    <LayoutDashboard title="Preguntas">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">

            <p className="text-2xl text-white py-3">Preguntas</p>

            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5">
              <div className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow"
                style={styles.customScrollbar}>
                  <PreguntasContainer />
              </div>
              <div className="flex flex-col gap-5 sm:gap-10 justify-center">
                <Modalopciones texto="Modulos" URL="/modulos" />
                <Modalopciones texto="Sueños" URL="/sueños" />
                <Modalopciones texto="Temas" URL="/temas" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Preguntas;

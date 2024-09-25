/**
 * NuevaPregunta.jsx
 * 
 * Componente que representa la página para crear una nueva pregunta dentro del panel de control.
 * Permite a los usuarios agregar una nueva pregunta mediante el componente `Modaleditar`.
 * 
 * Componentes utilizados:
 * - `LayoutDashboard`: Contenedor principal para la estructura del dashboard.
 * - `Modaleditar`: Componente que permite crear una nueva pregunta con un formulario.
 * 
 * Funcionalidad:
 * - Muestra un diseño de dashboard con un área de contenido para la creación de preguntas.
 * - Utiliza un modal para la creación de preguntas, con la opción de visibilidad para el cliente.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal para la página.
 *   - **`div` con fondo negro:** Encabezado del dashboard.
 *   - **`div` con fondo gris:** Contenedor para el contenido y otros elementos.
 *     - **`div` flexible:** Contenedor que permite la disposición de elementos.
 *       - **`Modaleditar`:** Componente para crear nuevas preguntas, con la propiedad `condicion` establecida en 6.
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris claro para el contenido de la página.
 * - **`bg-greyBlack`:** Fondo negro para la cabecera del dashboard.
 * - **`h-screen`:** Altura completa de la pantalla.
 * - **`overflow-x-hidden`:** Oculta el desbordamiento horizontal.
 * - **`flex`:** Utiliza un diseño flexible para la disposición de elementos.
 * 
 * Puntos Clave:
 * - El componente permite la creación de nuevas preguntas a través de un modal.
 * - Se asegura de mantener un diseño responsivo para diferentes tamaños de pantalla.
 * 
 * Notas:
 * - Asegúrate de que los estilos y componentes utilizados estén correctamente definidos en tu proyecto.
 */


import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modaleditar from "../../components/modales/modaleditar";
import BotonGuardar from "../../components/modales/modalcarga/modalcarga";

// Estilos en JSX
const customScrollbarStyle = {
  overflowY: 'auto',
  scrollbarWidth: 'thin', // Para navegadores que soportan scrollbars personalizadas
  scrollbarColor: '#888 #262b32', // thumb color y track color
};


const NuevaPregunta = () => {
  return (
    <LayoutDashboard title="Preguntas">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={6} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default NuevaPregunta;

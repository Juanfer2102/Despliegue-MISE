/**
 * Talleres.jsx
 * 
 * Componente que muestra una lista de temas dentro del dashboard. Permite al usuario ver y acceder a los temas
 * y a otros módulos relacionados a través de opciones en modales.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Proporciona una estructura de diseño general para la página con un título específico.
 * - TemasContainer: Componente que muestra el contenido relacionado con los temas.
 * - Modalopciones: Componente que muestra opciones de navegación a otros módulos.
 * 
 * Funcionalidad:
 * - El componente se renderiza dentro del `LayoutDashboard` con un fondo gris y una barra de navegación superior.
 * - Usa el componente `TemasContainer` para mostrar el contenido relacionado con los temas en una sección desplazable.
 * - Incluye componentes `Modalopciones` para permitir la navegación a diferentes secciones como módulos, sueños y preguntas.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal con fondo gris y altura de pantalla completa.
 *   - **`div` con `bg-greyBlack`:** Barra de navegación superior.
 *   - **`div` con `bg-greyBg`:** Contenedor principal para el contenido.
 *     - **`p`:** Título de la sección, estilizado con texto blanco y tamaño grande.
 *     - **`div` con `flex`:** Contenedor flexible que organiza el contenido.
 *       - **`div` con `container bg-greyBlack`:** Contenedor para el `TemasContainer`, con scroll personalizado.
 *         - **`TemasContainer`:** Componente que muestra el contenido relacionado con los temas.
 *       - **`div` con `flex flex-col`:** Contenedor para las opciones de navegación.
 *         - **`Modalopciones`:** Componente que permite la navegación a otros módulos, como "Módulos", "Sueños" y "Preguntas".
 * 
 * Estilos:
 * - **`customScrollbar`:** Estilos para la barra de desplazamiento personalizada.
 *   - `scrollbarWidth`: Ancho de la barra de desplazamiento.
 *   - `scrollbarColor`: Color del pulgar y el track de la barra de desplazamiento.
 * - **`customScrollbarTrack`:** Estilos para el track de la barra de desplazamiento.
 * - **`customScrollbarThumb`:** Estilos para el pulgar de la barra de desplazamiento.
 * - **`customScrollbarThumbHover`:** Estilos para el pulgar en estado hover.
 * 
 * Notas:
 * - Asegúrate de que el componente `TemasContainer` esté correctamente implementado para mostrar la información de los temas.
 * - Verifica que los enlaces en `Modalopciones` redirijan correctamente a las rutas correspondientes.
 */


import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modal from "../../components/modales/modal";
import TemasContainer from "../../components/crearyeditar/temascont";
import Modalopciones from "../../components/modales/modalopciones";


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

const Talleres = () => {
  return (
    <LayoutDashboard title="Talleres">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">

            <p className="text-2xl text-white py-3">Temas</p>

            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5">
              <div className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow"
              style={styles.customScrollbar}>
                <TemasContainer />
              </div>
              <div className="flex flex-col gap-5 sm:gap-10 justify-center">
                <Modalopciones texto={"Modulos"} URL="/modulos" />
                <Modalopciones texto={"Sueños"} URL="/sueños" />
                <Modalopciones texto={"Preguntas"} URL="/preguntas" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Talleres;

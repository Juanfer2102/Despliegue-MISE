/**
 * NuevoSueo.jsx
 * 
 * Componente para crear un nuevo sueño. Este componente proporciona una interfaz para la edición de un sueño específico
 * utilizando un modal.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Estructura de diseño general para la página con título.
 * - Modaleditar: Componente de modal para editar sueños. Recibe una condición para mostrar contenido específico.
 * - BotonGuardar: Componente para mostrar un botón de guardado, aunque no se utiliza en este componente.
 * 
 * Estilos en JSX:
 * - **`customScrollbar`:** Estilo para personalizar la barra de desplazamiento.
 *   - **`scrollbarWidth: 'thin'`:** Configura el ancho de la barra de desplazamiento.
 *   - **`scrollbarColor: '#888 #262b32'`:** Color del pulgar y del track de la barra de desplazamiento.
 * - **`customScrollbarThumb`:** Estilo del pulgar de la barra de desplazamiento.
 *   - **`backgroundColor: '#888'`:** Color de fondo del pulgar.
 *   - **`borderRadius: '10px'`:** Radio de borde del pulgar.
 * - **`customScrollbarThumbHover`:** Estilo del pulgar cuando el ratón pasa sobre él.
 *   - **`backgroundColor: '#555'`:** Color del pulgar al pasar el ratón.
 * 
 * Funcionalidad:
 * - El componente se muestra en el marco del `LayoutDashboard` con un fondo de color gris y una barra de navegación superior.
 * - Utiliza el componente `Modaleditar` para mostrar un modal con una condición específica (`condicion={3}`).
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal con fondo gris y altura de pantalla completa.
 *   - **`div` con `bg-greyBlack`:** Barra de navegación superior.
 *   - **`div` con `bg-greyBg`:** Contenedor principal para el contenido.
 *     - **`div` con `flex`:** Contenedor flexible que organiza el contenido.
 *       - **`Modaleditar`:** Muestra un modal de edición con base en la condición proporcionada.
 * 
 * Puntos Clave:
 * - El componente está diseñado para facilitar la creación y edición de sueños.
 * - Utiliza estilos personalizados para la barra de desplazamiento para una mejor experiencia visual.
 * 
 * Notas:
 * - Asegúrate de que el componente `Modaleditar` esté correctamente implementado y reciba las props adecuadas.
 * - El componente `BotonGuardar` está importado pero no utilizado en este componente.
 */

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
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

const NuevoSueo = () => {
  return (
    <LayoutDashboard title="Sueños">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={3} client:visible />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default NuevoSueo;

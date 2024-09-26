/**
 * VerUsers.jsx
 * 
 * Componente que muestra una lista de usuarios registrados en una vista de tabla dentro del dashboard.
 * Utiliza un layout de dashboard y un componente de tabla para mostrar la información de los usuarios.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Proporciona la estructura general del diseño para la página, incluyendo el título.
 * - TablasUsers: Componente que muestra una tabla con la lista de usuarios registrados.
 * 
 * Funcionalidad:
 * - El componente se renderiza dentro del `LayoutDashboard` con un fondo gris y una barra de navegación superior.
 * - Utiliza el componente `TablasUsers` para mostrar una lista de usuarios registrados en una tabla con capacidad de desplazamiento.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal con fondo gris y altura de pantalla completa.
 *   - **`div` con `bg-greyBlack`:** Barra de navegación superior.
 *   - **`div` con `bg-greyBg`:** Contenedor principal para el contenido.
 *     - **`div` con `flex flex-col gap-4 lg:gap-8`:** Contenedor flexible con espacio entre elementos, que organiza la vista.
 *       - **`div` con `flex flex-col lg:flex-row`:** Contenedor que organiza el título y la tabla de usuarios.
 *         - **`p`:** Título de la sección, que muestra "Usuarios Registrados" con estilos de texto.
 *         - **`div` con `max-h-[40rem] overflow-auto rounded-xl`:** Contenedor para la tabla de usuarios, con altura máxima y capacidad de desplazamiento.
 *           - **`TablasUsers`:** Componente que muestra la tabla con la lista de usuarios registrados.
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris claro para el área de contenido.
 * - **`bg-greyBlack`:** Fondo negro para la barra de navegación superior.
 * - **`rounded-md`, `rounded-xl`:** Bordes redondeados para los contenedores.
 * - **`max-h-[40rem]`:** Altura máxima para la tabla de usuarios con desplazamiento automático.
 * - **`text-white`, `font-bold`, `text-xl`, `lg:text-2xl`:** Estilos de texto para el título de la sección.
 * 
 * Notas:
 * - Asegúrate de que el componente `TablasUsers` esté correctamente implementado para mostrar la información de los usuarios.
 * - Ajusta la altura máxima y los estilos según las necesidades del diseño y el contenido.
 */

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import TablasUsers from "../../components/tablas/tablasUsers.jsx";

const VerUsers = () => {
  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 w-full rounded-md">
              <div className="flex flex-col gap-4 lg:gap-6 rounded-xl">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                  <p className="text-white font-bold text-xl lg:text-2xl">Usuarios Registrados</p>
                </div>
                <div className="max-h-[40rem] overflow-auto rounded-xl">
                  <TablasUsers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default VerUsers;

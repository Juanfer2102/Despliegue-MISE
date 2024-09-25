/**
 * EditarTalleres.jsx
 * 
 * Componente para la edición de talleres en el dashboard. Este componente permite a los usuarios editar la información
 * relacionada con los talleres utilizando un modal de edición.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Proporciona una estructura de diseño general para la página con un título específico.
 * - Modaleditar: Componente que permite la edición de la información de los talleres.
 * 
 * Funcionalidad:
 * - El componente se muestra en el marco del `LayoutDashboard` con un fondo gris y una barra de navegación superior.
 * - Utiliza el componente `Modaleditar` para proporcionar un formulario o interfaz para la edición de talleres, pasando un parámetro de condición.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal con fondo gris y altura de pantalla completa.
 *   - **`div` con `bg-greyBlack`:** Barra de navegación superior.
 *   - **`div` con `bg-greyBg`:** Contenedor principal para el contenido.
 *     - **`div` con `flex`:** Contenedor flexible que organiza el contenido.
 *       - **`div` con `h-full w-full`:** Contenedor para el modal de edición de talleres.
 *         - **`Modaleditar`:** Componente que muestra el formulario de edición, con un parámetro `condicion` establecido en 7.
 * 
 * Puntos Clave:
 * - El componente está diseñado para facilitar la edición de información relacionada con talleres en el dashboard.
 * - Asegúrate de que el componente `Modaleditar` esté correctamente implementado y que maneje el estado y la lógica de edición.
 * 
 * Notas:
 * - Verifica que la condición proporcionada al `Modaleditar` sea correcta y esté relacionada con el contexto de la edición de talleres.
 */

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modaleditar from "../../components/modales/modaleditar";
import BotonGuardar from "../../components/modales/modalcarga/modalcarga";

const EditarTalleres = () => {
  return (
    <LayoutDashboard title="Talleres">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full w-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={7} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default EditarTalleres;

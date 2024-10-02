/**
 * EditarPorcentaje.jsx
 * 
 * Componente para la vista de edición de porcentajes. Permite al usuario modificar los porcentajes de desarrollo.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente de diseño que envuelve la página de edición en un diseño de panel de control.
 * - Formseditporc: Componente de formulario para editar porcentajes.
 * - GoBack: Componente de navegación para volver a la vista anterior.
 * 
 * Funcionalidad:
 * - Muestra un formulario para editar porcentajes de desarrollo.
 * - Incluye un botón para volver a la vista anterior.
 * 
 * Estilos:
 * - Usa Tailwind CSS para el diseño de la página. La vista incluye una sección de encabezado y un área de contenido con espaciado y diseño responsivo.
 * - Los elementos de la interfaz están organizados en una columna, con un diseño que se adapta a diferentes tamaños de pantalla.
 * 
 * Estructura del componente:
 * - `LayoutDashboard`: Envuelve el contenido de la página proporcionando un diseño general y el título "Editar Porcentaje".
 * - `main`: Contenedor principal con fondo y diseño responsivo.
 * - `div` interno: Organiza el contenido en una columna con espaciado adecuado.
 * - `GoBack`: Componente de navegación con texto para volver a la vista de "Porcentajes de Desarrollo".
 * - `Formseditporc`: Muestra el formulario de edición de porcentajes.
 * 
 * Puntos clave:
 * - La página está diseñada para editar porcentajes de desarrollo.
 * - Incluye un botón para volver a la vista anterior utilizando el componente `GoBack`.
 * - El diseño es responsivo y se ajusta a diferentes tamaños de pantalla mediante Tailwind CSS.
 */


import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Formseditporc } from "../../components/forms/formseditporc/formseditporc.jsx";
import GoBack from "../../components/inputs/goback/GoBack";

const EditarPorcentaje = () => {
  return (
    <LayoutDashboard title="Editar Porcentaje">
      <main className="bg-greyBg w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col gap-1 w-full xl:h-full px-4 xl:px-12 pt-4 xl:pt-6">
            <GoBack text={"Porcentajes de Desarrollo"} />
            <Formseditporc client:load />
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default EditarPorcentaje;

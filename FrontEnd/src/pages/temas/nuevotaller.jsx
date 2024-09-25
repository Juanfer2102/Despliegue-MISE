/**
 * NuevoTaller.jsx
 * 
 * Componente que proporciona una interfaz para crear o editar un nuevo taller dentro del dashboard.
 * Utiliza modales para mostrar opciones de edición y carga.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Proporciona una estructura de diseño general para la página con un título específico.
 * - Modaleditar: Componente modal para editar un taller.
 * - BotonGuardar: Componente modal para mostrar una interfaz de carga (aunque no se utiliza directamente aquí, se puede incluir según la necesidad).
 * 
 * Funcionalidad:
 * - El componente se renderiza dentro del `LayoutDashboard` con un fondo gris y una barra de navegación superior.
 * - Usa el componente `Modaleditar` para permitir la edición de un taller, configurado con la propiedad `condicion` establecida en `8`.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal con fondo gris y altura de pantalla completa.
 *   - **`div` con `bg-greyBlack`:** Barra de navegación superior.
 *   - **`div` con `bg-greyBg`:** Contenedor principal para el contenido.
 *     - **`div` con `flex`:** Contenedor flexible que organiza el contenido.
 *       - **`div` con `h-full flex flex-col`:** Contenedor para el `Modaleditar`, con espacio ajustado y centrado verticalmente.
 *         - **`Modaleditar`:** Componente que permite la edición del taller, con la propiedad `condicion` configurada a `8`.
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris claro para el área de contenido.
 * - **`bg-greyBlack`:** Fondo negro para la barra de navegación superior.
 * - **`h-full`, `w-full`:** Estilos para ocupar el espacio completo del contenedor.
 * - **`gap-[5rem]`:** Espaciado entre elementos en el contenedor de edición.
 * 
 * Notas:
 * - Asegúrate de que el componente `Modaleditar` esté correctamente implementado para manejar la edición de talleres.
 * - Considera incluir `BotonGuardar` si es necesario para mostrar una interfaz de carga o confirmación de guardado.
 */


import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modaleditar from "../../components/modales/modaleditar";
import BotonGuardar from "../../components/modales/modalcarga/modalcarga";

const NuevoTaller = () => {
  return (
    <LayoutDashboard title="Modulos">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={8} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default NuevoTaller;

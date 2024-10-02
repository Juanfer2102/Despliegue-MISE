/**
 * NuevoUser.jsx
 * 
 * Componente para la página de creación de un nuevo usuario en el panel de administración. 
 * Permite ingresar la información necesaria para crear un usuario.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente que proporciona la estructura básica del panel de administración.
 * - FormsNuevouser: Componente que contiene el formulario para la creación de un nuevo usuario.
 * - GoBack: Componente que permite regresar a la página anterior.
 * 
 * Funcionalidad:
 * - Muestra un formulario para ingresar información del nuevo usuario.
 * 
 * Estructura del componente:
 * - `LayoutDashboard`: Envuelve la página proporcionando la estructura básica.
 * - `main`: Contenedor principal con fondo y estilo de altura completa.
 *   - **`div` con `bg-greyBlack`:** Sección superior con un fondo negro.
 *   - **`div` con `bg-greyBg`:** Contenedor principal con fondo gris y diseño flexible.
 *     - **`GoBack`:** Componente que permite regresar a la página anterior, mostrando el texto "Nuevo Usuario".
 *     - **`div` con `bg-greyBlack`:** Contenedor para el formulario, con espaciado y fondo negro.
 *       - **`p`:** Título que indica "Información para Creación de Usuario".
 *       - **`FormsNuevouser`:** Componente que contiene el formulario para ingresar la información del nuevo usuario.
 * 
 * Estilos:
 * - **`bg-greyBg`:** Fondo gris para el contenedor principal.
 * - **`bg-greyBlack`:** Fondo negro para las secciones superior y del formulario.
 * - **`flex`, `gap-2`, `py-2`:** Diseño flexible con espaciado entre elementos.
 * - **`text-white`, `text-3xl`:** Estilos de texto para el título.
 * 
 * Puntos Clave:
 * - El diseño es responsivo, adaptándose a diferentes tamaños de pantalla.
 * - Utiliza un modal para la entrada de información de usuario, permitiendo una fácil creación de nuevos usuarios.
 * - Estructura clara y organizada para una mejor experiencia del usuario.
 */


import React from 'react';
import FormsNuevouser from "../../components/forms/formsNuevouser/formsNuevouser.jsx";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import GoBack from '../../components/inputs/goback/GoBack';


const NuevoUser = () => {
  return (
    <LayoutDashboard>
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 gap-2 py-2 sm:px-8 h-full w-full">
            <GoBack text={"Nuevo Usuario"} />
            <div className="bg-greyBlack flex flex-col gap-2 lg:gap-8 p-4 lg:p-5 w-full rounded-md">
              <div className="flex flex-col w-full px-6 py-2">
                <p className="text-white text-3xl">
                  Información para Creación de Usuario
                </p>
                <FormsNuevouser />  
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default NuevoUser;

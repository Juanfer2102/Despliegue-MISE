/**
 * EditarUsuario.jsx
 * 
 * Componente para la vista de edición de un usuario. Permite visualizar y editar la información personal del usuario seleccionado.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente de diseño que proporciona un marco general para la página del dashboard.
 * - FormsEditaruser: Componente de formulario para la edición de información del usuario.
 * - GoBack: Componente que proporciona un enlace para volver a la vista anterior.
 * - Infouser: Helper que proporciona información del usuario a editar.
 * 
 * Propiedades:
 * - `nombres` (string): Nombre del usuario.
 * - `correo` (string): Correo electrónico del usuario.
 * - `rol` (string): Rol del usuario en el sistema.
 * 
 * Funcionalidad:
 * - Muestra un formulario para editar la información personal del usuario.
 * - Incluye un botón para regresar a la lista de usuarios registrados.
 * 
 * Estructura del componente:
 * - `LayoutDashboard`: Envuelve el contenido de la página y establece el título "Editar Usuario".
 * - `main`: Contenedor principal con fondo y diseño responsivo.
 * - `div` interno:
 *   - `bg-greyBlack h-20`: Sección de encabezado con fondo negro.
 *   - `bg-greyBg`: Contenedor principal para el contenido con espaciado adaptativo.
 *   - `GoBack`: Muestra un enlace de retroceso con el texto correspondiente a la ruta actual.
 *   - `bg-greyBlack`: Sección con fondo negro que contiene el formulario de edición.
 *   - `FormsEditaruser`: Componente para el formulario de edición de usuario.
 * 
 * Estilos:
 * - Utiliza Tailwind CSS para el diseño responsivo y espaciado.
 * - `bg-greyBg`: Fondo gris claro para la página.
 * - `bg-greyBlack`: Fondo negro para secciones destacadas.
 * - `text-white text-3xl`: Estilo de texto para el encabezado de información personal.
 * 
 * Puntos clave:
 * - El componente está diseñado para ser usado en un contexto de administración de usuarios.
 * - La funcionalidad principal es permitir la edición de la información personal del usuario.
 * - El diseño se adapta a diferentes tamaños de pantalla mediante el uso de clases de Tailwind CSS.
 */


import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import iconUser from "../../images/icons/iconsEditUser/User.png";
import FormsEditaruser from "../../components/forms/formsEditaruser/formsEditaruser.jsx";
import GoBack from '../../components/inputs/goback/GoBack.jsx';
import { Infouser } from '../../helpers/edituser.js';

const EditarUsuario = ({ nombres, correo, rol }) => {
  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 gap-2 py-2 sm:px-8 h-full w-full">
            <GoBack text={`Usuarios Registrados / ${Infouser[0].nombres} ${Infouser[0].apellidos}`} />
            <div className="bg-greyBlack flex flex-col gap-2 lg:gap-8 p-4 lg:p-5 w-full rounded-md">
              <div className="flex flex-col w-full px-6 py-2">
                <p className="text-white text-3xl">Información Personal</p>
                <FormsEditaruser />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );

};

export default EditarUsuario;

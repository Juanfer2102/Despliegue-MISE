import React, { useState, useEffect } from 'react';  // Importa React y hooks useState y useEffect
import Logo from '../../images/logos/logoPrincipal.svg';  // Importa el logo principal
import IconExpand from '../../images/sideBarImg/Expand icon.png';  // Importa el ícono para expandir/contraer la barra lateral
import Elemento from './elementSidebar.jsx'; // Importa tu componente de ElementSidebar
import Logomini from '../../images/sideBarImg/Logomini.png';  // Importa el logo pequeño
import IconLogOut from '../../images/sideBarsvg/log_out.svg';  // Importa el ícono de cerrar sesión
import { Elementoscript } from '../../helpers/elements';  // Importa elementos de script desde helpers
import { Elementoscriptadmin } from '../../helpers/elementsadmin';  // Importa elementos de script para admin desde helpers

const Sidebar1 = () => {
  const [isExpanded, setIsExpanded] = useState(true);  // Estado que controla si la barra lateral está expandida

  useEffect(() => {
    // Hook que se ejecuta al cambiar el estado isExpanded
    const toggleButton = document.getElementById('toggleBtn');  // Selecciona el botón de alternar
    const elements = document.querySelectorAll('.sidebar-element');  // Selecciona todos los elementos de la barra lateral
    const profilesideBar = document.getElementById('profile');  // Selecciona el perfil de usuario
    const profilesideBar1 = document.getElementById('profile-1');  // Selecciona el ícono de cerrar sesión
    const cajaadmin = document.getElementById('admincaja');  // Selecciona el contenedor de administración
    const sidebarLogomini = document.getElementById('logo-min');  // Selecciona el logo pequeño
    const sidebarLogo = document.getElementById('logo');  // Selecciona el logo grande
    const cajaicon = document.querySelectorAll('.cajaelemento');  // Selecciona todos los elementos con clase cajaelemento
    const cadasidebar = document.getElementById('cajasidebar1');  // Selecciona la caja de la barra lateral

    toggleButton.addEventListener('click', () => {
      setIsExpanded(!isExpanded);  // Alterna el estado de expansión
    });

    if (isExpanded) {
      // Si está expandida
      elements.forEach((element) => element.classList.remove('hidden'));  // Muestra todos los elementos
      profilesideBar.classList.remove('hidden');  // Muestra el perfil
      profilesideBar1.classList.remove('hidden');  // Muestra el ícono de cerrar sesión
      cajaadmin.classList.remove('hidden');  // Muestra la caja de administración
      sidebarLogomini.classList.add('hidden');  // Oculta el logo pequeño
      sidebarLogo.classList.remove('hidden');  // Muestra el logo grande
      cajaicon.forEach((element) => element.classList.add('flex'));  // Cambia a flex todos los íconos
    } else {
      // Si está contraída
      elements.forEach((element) => element.classList.add('hidden'));  // Oculta todos los elementos
      profilesideBar.classList.add('hidden');  // Oculta el perfil
      profilesideBar1.classList.add('hidden');  // Oculta el ícono de cerrar sesión
      cajaadmin.classList.add('hidden');  // Oculta la caja de administración
      sidebarLogomini.classList.remove('hidden');  // Muestra el logo pequeño
      sidebarLogo.classList.add('hidden');  // Oculta el logo grande
      cajaicon.forEach((element) => element.classList.remove('flex'));  // Cambia a no-flex todos los íconos
      cadasidebar.classList.add('pt-[6rem]');  // Agrega espacio superior a la caja de la barra lateral
    }
  }, [isExpanded]);  // Se ejecuta cada vez que cambia isExpanded

  return (
    <aside
      className={`sidebar hidden sm:flex ${  // Estilos para la barra lateral
        isExpanded ? 'w-[23rem]' : 'w-[5.5rem]'  // Ancho dependiendo del estado de expansión
      } h-screen bg-greyBlack rounded-md transition-all duration-500 ease-in-out`}
      id="sidebar"  // ID para la barra lateral
    >
      <div className="cajasidebar1 flex flex-col gap-5 w-full" id="cajasidebar1">  // Contenedor principal de la barra lateral
        <div className="absolute w-15 h-15 justify-end">  // Contenedor para el botón de alternar
          <img
            id="toggleBtn"  // ID del botón para alternar la barra lateral
            src={IconExpand.src}  // Fuente del ícono de alternar
            className="cursor-pointer"  // Clase para el cursor
            alt=""  // Texto alternativo vacío
          />
        </div>

        <div className="flex justify-center">  // Contenedor para los logos
          <img
            src={Logo.src}  // Fuente del logo principal
            className="w-[10rem] h-[10em] block"  // Estilos del logo principal
            alt=""  // Texto alternativo vacío
            id="logo"  // ID del logo principal
          />
          <img
            src={Logomini.src}  // Fuente del logo pequeño
            className="w-[2.5rem] h-[3.5rem] pt-5 hidden"  // Estilos del logo pequeño
            id="logo-min"  // ID del logo pequeño
            alt=""  // Texto alternativo vacío
          />
        </div>

        <div className="flex flex-col gap-3 px-4">  // Contenedor para los elementos de la barra lateral
          {Elementoscript.map((elemento, index) => (
            <elementSidebar  // Mapea los elementos de script y los muestra
              key={index}
              icon={elemento.icon}
              texto={elemento.texto}
              URL={elemento.URL}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3 px-4 border-t-2 pt-5 border-white">  // Contenedor para la sección de administración
          <p className="text-white text-lg font-semibold pl-2" id="admincaja">
            Admin Control  // Título de la sección de administración
          </p>
          {Elementoscriptadmin.map((elemento, index) => (
            <elementSidebar  // Mapea los elementos de script admin y los muestra
              key={index}
              icon={elemento.icon}
              texto={elemento.texto}
              URL={elemento.URL}
            />
          ))}
        </div>

        <div className="mt-auto usuariofinal w-full bg-darkslategray box-border flex flex-row items-center justify-end p-6 gap-[12px] leading-[normal] tracking-[normal] text-left text-xs text-darkgray font-base-medium">
          <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">  // Contenedor para la información del usuario
            <img
              className="h-10 w-10 relative rounded-[99px] overflow-hidden shrink-0 object-cover"  // Imagen del perfil del usuario
              loading="lazy"  // Atributo para carga diferida
              alt=""  // Texto alternativo vacío
              src="/public/avatar@2x.png"  // Fuente de la imagen del perfil
            />

            <div
              className="flex-1 flex flex-col items-start justify-start gap-[2px]"  // Contenedor para el texto del perfil
              id="profile"  // ID del contenedor del perfil
            >
              <div className="self-stretch relative leading-[20px] font-medium">
                Welcome back 👋  // Mensaje de bienvenida
              </div>
              <div className="self-stretch relative text-sm leading-[20px] font-medium text-white">
                Johnathan  // Nombre del usuario
              </div>
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 block"  // Ícono de cerrar sesión
            loading="lazy"  // Atributo para carga diferida
            alt=""  // Texto alternativo vacío
            id="profile-1"  // ID del ícono de cerrar sesión
            src={IconLogOut.src}  // Fuente del ícono de cerrar sesión
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar1;  // Exporta el componente Sidebar1

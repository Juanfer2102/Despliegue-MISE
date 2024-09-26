import React, { useState } from "react";
import Logo from "../../images/logos/logoPrincipal.svg";
import IconExpand from "../../images/sideBarImg/Expand icon.png";
import ElementSidebar from "./elementSidebar.jsx";
import Logomini from "../../images/sideBarImg/Logomini.png";
import { Elementoscript } from "../../helpers/elements.js";
import { Elementoscriptadmin } from "../../helpers/elementsadmin.js";
import IconLogOut from "../../images/sideBarsvg/log_out.svg";
import IconProfile from "../../images/sideBarImg/avatar@2x.png";
import InfoModal from "../modales/modalinfouser.jsx";
import ModalLogout from "../modales/modalcs.jsx";
import Modalcarga from '../modales/modalcarga/modalcarga.jsx';

import PropTypes from 'prop-types';

// Definición del componente Sidebar que recibe dos props: 'condicion' y 'nombre'.
const Sidebar = ({ condicion, nombre }) => {
  // Estados internos del componente
  const [sidebarExpanded, setSidebarExpanded] = useState(false); // Controla si la barra lateral está expandida o contraída
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal de perfil está abierto
  const [isModalCSOpen, setIsModalCSOpen] = useState(false); // Controla si el modal de cierre de sesión está abierto
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // Controla la visibilidad del modal de éxito después de cerrar sesión

  // Función para alternar el estado de expansión de la barra lateral
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  // Función para abrir el modal de cierre de sesión
  const handleOpenModal = () => {
    setIsModalCSOpen(true);
  };

  // Función para cerrar el modal de cierre de sesión
  const handleCloseModal = () => {
    setIsModalCSOpen(false);
  };

  // Función para confirmar el cierre de sesión, cierra el modal y muestra el modal de éxito
  const handleConfirmLogout = () => {
    setIsModalCSOpen(false);
    // Aquí agregarías la lógica para cerrar sesión
    openSuccessModal();
  };

  // Función para abrir el modal de éxito y realizar el reinicio de sesión
  const openSuccessModal = () => {
    setIsSuccessModalVisible(true);
    setTimeout(() => {
      setIsSuccessModalVisible(false);
      localStorage.clear(); // Limpia el almacenamiento local
      window.location.reload(true); // Recarga la página
    }, 1000); // Espera 1 segundo
  };

  return (
    <>
      {condicion === 1 && (
        <aside
          className={`sidebar hidden sm:flex ${sidebarExpanded ? "w-[18rem] absolute h-full " : "w-[5.5rem] sticky h-auto"
            }  bg-greyBlack rounded-br-md transition-all duration-500 ease-in-out z-10`}
          id="sidebar"
        >
          <div className="cajasidebar1 flex flex-col gap-5 h-full w-full" id="cajasidebar1">
            <div className="flex justify-center relative">
              <img
                src={Logo}
                className={`w-[10rem] h-[10em] transition-opacity duration-500 ${sidebarExpanded ? "opacity-100" : "opacity-0 hidden"}`}
                alt="Logo"
                id="logo"
              />
              <img
                src={Logomini}
                className={`w-[2.5rem] h-[3.5rem] pt-5 transition-opacity duration-500 ${sidebarExpanded ? "opacity-0 hidden" : "block"}`}
                id="logo-min"
                alt="Logo Mini"
              />
              <div
                className="w-[24px] h-[24px] rounded-full bg-principalGreen text-sm text-white flex justify-center items-center absolute right-[-10px] top-[20px] cursor-pointer"
                id="toggleBtn"
                onClick={toggleSidebar}
              >
                <i className={`fa-solid fa-angle-${sidebarExpanded ? "left" : "right"}`}></i>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-4">
              {Elementoscript.map((elemento, index) => (
                <ElementSidebar
                  key={index}
                  icon={elemento.icon}
                  texto={elemento.texto}
                  URL={elemento.URL}
                  sidebarExpanded={sidebarExpanded}  // Pasamos el estado de la barra lateral
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 px-4 border-t-2 pt-5 hover:text-white border-white">
              <p className={`text-white text-lg font-semibold pl-2 transition-opacity duration-500 ${sidebarExpanded ? "opacity-100" : "opacity-0 hidden"}`} id="admincaja">
                Admin Control
              </p>
              {Elementoscriptadmin.map((elemento, index) => (
                <ElementSidebar
                  key={index}
                  icon={elemento.icon}
                  texto={elemento.texto}
                  URL={elemento.URL}
                  sidebarExpanded={sidebarExpanded}  // Pasamos el estado de la barra lateral
                />
              ))}
            </div>
            <div
              className={`mt-auto usuariofinal w-full bg-darkslategray box-border flex ${sidebarExpanded ? "flex-row gap-[12px]" : "flex-col gap-[20px]"
                } items-center justify-end p-6 leading-[normal] tracking-[normal] text-left text-xs text-darkgray font-base-medium`}
              id="usuariofinal"
            >
              <div className={`flex-1 flex items-center justify-start ${sidebarExpanded ? "flex-row gap-[12px]" : "flex-col-reverse gap-[20px]"}`}>
                <img
                  className="h-10 w-10 relative rounded-[99px] overflow-hidden shrink-0 object-cover cursor-pointer"
                  loading="lazy"
                  onClick={() => setIsModalOpen(true)}
                  alt="Perfil"
                  src={IconProfile}
                />
                <div className={`flex-1 flex-col items-start justify-start gap-[2px] transition-opacity duration-500 ${sidebarExpanded ? "opacity-100 block" : "opacity-0 hidden"}`} id="profile">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Bienvenido👋
                  </div>
                  <div className="self-stretch relative text-sm leading-[20px] font-medium text-white">
                    {nombre}
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 block cursor-pointer"
                  onClick={handleOpenModal}
                  loading="lazy"
                  alt="Cerrar Sesión"
                  id="profile-1"
                  src={IconLogOut}
                />
              </div>
            </div>
          </div>
        </aside>
      )}

      {condicion === 2 && (
        <aside
          className={`sidebar hidden sm:flex ${sidebarExpanded ? "w-[18rem] absolute h-full " : "w-[5.5rem] sticky h-auto"
            }  bg-greyBlack rounded-br-md transition-all duration-500 ease-in-out z-10`}
          id="sidebar"
        >
          <div className="cajasidebar1 flex flex-col gap-5 h-full w-full" id="cajasidebar1">
            <div className="flex justify-center relative">
              <img
                src={Logo}
                className={`w-[10rem] h-[10em] transition-opacity duration-500 ${sidebarExpanded ? "opacity-100" : "opacity-0 hidden"}`}
                alt="Logo"
                id="logo"
              />
              <img
                src={Logomini}
                className={`w-[2.5rem] h-[3.5rem] pt-5 transition-opacity duration-500 ${sidebarExpanded ? "opacity-0 hidden" : "block"}`}
                id="logo-min"
                alt="Logo Mini"
              />
              <div
                className="w-[24px] h-[24px] rounded-full bg-principalGreen text-sm text-white flex justify-center items-center absolute right-[-10px] top-[20px] cursor-pointer"
                id="toggleBtn"
                onClick={toggleSidebar}
              >
                <i className={`fa-solid fa-angle-${sidebarExpanded ? "left" : "right"}`}></i>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-4">
              {Elementoscript.map((elemento, index) => (
                <ElementSidebar
                  key={index}
                  icon={elemento.icon}
                  texto={elemento.texto}
                  URL={elemento.URL}
                  sidebarExpanded={sidebarExpanded}  // Pasamos el estado de la barra lateral
                />
              ))}
            </div>
            <div className="border-b border-white"></div>
            <div
              className={`mt-auto usuariofinal w-full bg-darkslategray box-border flex ${sidebarExpanded ? "flex-row gap-[12px]" : "flex-col gap-[20px]"
                } items-center justify-end p-6 leading-[normal] tracking-[normal] text-left text-xs text-darkgray font-base-medium`}
              id="usuariofinal"
            >
              <div className={`flex-1 flex items-center justify-start ${sidebarExpanded ? "flex-row gap-[12px]" : "flex-col-reverse gap-[20px]"}`}>
                <img
                  className="h-10 w-10 relative rounded-[99px] overflow-hidden shrink-0 object-cover cursor-pointer"
                  loading="lazy"
                  onClick={() => setIsModalOpen(true)}
                  alt="Perfil"
                  src={IconProfile}
                />
                <div className={`flex-1 flex-col items-start justify-start gap-[2px] transition-opacity duration-500 ${sidebarExpanded ? "opacity-100 block" : "opacity-0 hidden"}`} id="profile">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Bienvenido👋
                  </div>
                  <div className="self-stretch relative text-sm leading-[20px] font-medium text-white">
                    {nombre}
                  </div>
                </div>
                <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 block cursor-pointer"
                    onClick={handleOpenModal}
                    loading="lazy"
                    alt="Cerrar Sesión"
                    id="profile-1"
                    src={IconLogOut}
                  />
              </div>
            </div>
          </div>
        </aside>
      )}

      {condicion === 3 && (
        <aside
          className={`sidebar hidden sm:flex ${sidebarExpanded ? "w-[18rem] absolute h-full " : "w-[5.5rem] sticky h-auto"
            }  bg-greyBlack rounded-br-md transition-all duration-500 ease-in-out z-10`}
          id="sidebar"
        >
          <div className="cajasidebar1 flex flex-col gap-5 h-full w-full" id="cajasidebar1">
            <div className="flex justify-center relative">
              <img
                src={Logo}
                className={`w-[10rem] h-[10em] transition-opacity duration-500 ${sidebarExpanded ? "opacity-100" : "opacity-0 hidden"}`}
                alt="Logo"
                id="logo"
              />
              <img
                src={Logomini}
                className={`w-[2.5rem] h-[3.5rem] pt-5 transition-opacity duration-500 ${sidebarExpanded ? "opacity-0 hidden" : "block"}`}
                id="logo-min"
                alt="Logo Mini"
              />
              <div
                className="w-[24px] h-[24px] rounded-full bg-principalGreen text-sm text-white flex justify-center items-center absolute right-[-10px] top-[20px] cursor-pointer"
                id="toggleBtn"
                onClick={toggleSidebar}
              >
                <i className={`fa-solid fa-angle-${sidebarExpanded ? "left" : "right"}`}></i>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-4">
              {Elementoscript.map((elemento, index) => (
                <ElementSidebar
                  key={index}
                  icon={elemento.icon}
                  texto={elemento.texto}
                  URL={elemento.URL}
                  sidebarExpanded={sidebarExpanded}  // Pasamos el estado de la barra lateral
                />
              ))}
            </div>
            <div className="border-b border-white"></div>
            <div
              className={`mt-auto usuariofinal w-full bg-darkslategray box-border flex ${sidebarExpanded ? "flex-row gap-[12px]" : "flex-col gap-[20px]"
                } items-center justify-end p-6 leading-[normal] tracking-[normal] text-left text-xs text-darkgray font-base-medium`}
              id="usuariofinal"
            >
              <div className={`flex-1 flex items-center justify-start ${sidebarExpanded ? "flex-row gap-[12px]" : "flex-col-reverse gap-[20px]"}`}>
                <img
                  className="h-10 w-10 relative rounded-[99px] overflow-hidden shrink-0 object-cover cursor-pointer"
                  loading="lazy"
                  onClick={() => setIsModalOpen(true)}
                  alt="Perfil"
                  src={IconProfile}
                />
                <div className={`flex-1 flex-col items-start justify-start gap-[2px] transition-opacity duration-500 ${sidebarExpanded ? "opacity-100 block" : "opacity-0 hidden"}`} id="profile">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Bienvenido👋
                  </div>
                  <div className="self-stretch relative text-sm leading-[20px] font-medium text-white">
                    {nombre}
                  </div>
                </div>
                <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 block cursor-pointer"
                    onClick={handleOpenModal}
                    loading="lazy"
                    alt="Cerrar Sesión"
                    id="profile-1"
                    src={IconLogOut}
                  />
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Modales */}
      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ModalLogout
        isOpen={isModalCSOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
      {isSuccessModalVisible && (
        <Modalcarga />
      )}
    </>
  );
};

// Definición de los tipos de las props del componente
Sidebar.propTypes = {
  condition: PropTypes.number.isRequired, // 'condition' debe ser un número
  name: PropTypes.string.isRequired,     // 'name' debe ser una cadena
};

export default Sidebar;

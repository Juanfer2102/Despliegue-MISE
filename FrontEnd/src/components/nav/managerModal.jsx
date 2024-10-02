// SidebarModalManager.jsx
import React, { useState } from 'react';
import ModalLogout from "../modales/modalcs.jsx";  // Importa el modal para confirmar el cierre de sesión
import IconLogOut from "../../images/sideBarsvg/log_out.svg";  // Importa el ícono de cerrar sesión
import InfoModal from '../modales/modalinfouser.jsx';  // Importa el modal con la información del usuario
import Modalcarga from '../modales/modalcarga/modalcarga.jsx';  // Importa el modal de carga (o éxito)

const SidebarModalManager = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar la visibilidad del modal de cierre de sesión
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);  // Estado para controlar la visibilidad del modal de éxito

    const handleOpenModal = () => {
        setIsModalOpen(true);  // Abre el modal de cierre de sesión
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Cierra el modal de cierre de sesión
    };

    const handleConfirmLogout = () => {
        setIsModalOpen(false);  // Cierra el modal de cierre de sesión
        // Aquí agregarías la lógica para cerrar sesión
        openSuccessModal();  // Abre el modal de éxito
        console.log("Sesión cerrada");  // Mensaje en consola para depuración
    };

    const openSuccessModal = () => {
        setIsSuccessModalVisible(true);  // Abre el modal de éxito
        setTimeout(() => {
            setIsSuccessModalVisible(false);  // Cierra el modal de éxito después de 1 segundo
            window.location.href = "/login/login";  // Redirecciona a la página de inicio de sesión
        }, 1000); // 1 segundos
    };

    return (
        <>
            <img
                class="h-6 w-6 relative overflow-hidden shrink-0 block cursor-pointer"  // Clase CSS para el ícono de cerrar sesión
                loading="lazy"  // Atributo para carga diferida del ícono
                alt=""  // Texto alternativo vacío
                id="profile-1"  // Identificador del elemento
                src={IconLogOut.src}  // Fuente del ícono de cerrar sesión
                onClick={handleOpenModal}  // Abre el modal de cierre de sesión al hacer clic
            />
            <ModalLogout 
                isOpen={isModalOpen}  // Propiedad para controlar la visibilidad del modal de cierre de sesión
                onClose={handleCloseModal}  // Función para cerrar el modal de cierre de sesión
                onConfirm={handleConfirmLogout}  // Función para confirmar el cierre de sesión
            />
            <InfoModal 
                isOpen={isModalOpen}  // Propiedad para controlar la visibilidad del modal de información del usuario
                onClose={() => setIsModalOpen(false)}  // Función para cerrar el modal de información del usuario
            />
            {isSuccessModalVisible && (
                <Modalcarga />  // Muestra el modal de carga (o éxito) si está visible
            )}
        </>
    );
};

export default SidebarModalManager;  // Exporta el componente

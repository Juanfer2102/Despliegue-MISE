// SidebarModalManager.jsx
import React, { useState } from 'react';
import ModalLogout from "./modalcs.jsx";
import IconLogOut from "../../images/sideBarsvg/log_out.svg";

const SidebarModalManager = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmLogout = () => {
        setIsModalOpen(false);
        // Aquí agregarías la lógica para cerrar sesión
        console.log("Sesión cerrada");
    };

    return (
        <>
            <img
                class="h-6 w-6 relative overflow-hidden shrink-0 block cursor-pointer"
                loading="lazy"
                alt=""
                id="profile-1"
                src={IconLogOut.src}
                onClick={handleOpenModal}
            />
            <ModalLogout 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onConfirm={handleConfirmLogout} 
            />
        </>
    );
};

export default SidebarModalManager;

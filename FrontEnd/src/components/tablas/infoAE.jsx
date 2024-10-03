import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/modales/modalconfirm';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import CancelModal from "../../components/modales/modalcancel";

const InfoAE = ({ nit, nombre_empresa, representante, razon_social }) => {
    const [isOpen, setIsOpen] = useState(false); // Controla la visibilidad del modal de confirmación
    const [isCOpen, setIsCOpen] = useState(false); // Controla la visibilidad del modal de cancelación
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // Controla la visibilidad del modal de éxito

    const navigate = useNavigate(); // Hook de react-router-dom para la navegación

    // Funciones para abrir y cerrar los modales
    const closeModal = () => setIsOpen(false);
    const closeCModal = () => setIsCOpen(false);
    const openModal = () => setIsOpen(true);
    const openCModal = () => setIsCOpen(true);

    // Maneja la confirmación del estado de la empresa
    const handleConfirm = () => {
        fetch(`https://despliegue-mise.onrender.com/api/v2/update-empresa-status/${nit}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ estado: 2 }), // Envía la actualización del estado de la empresa
        })
            .then(response => response.ok ? response.json() : Promise.reject('Error al actualizar el estado'))
            .then(() => openSuccessModal()) // Muestra el modal de éxito si se actualiza correctamente
            .catch(error => console.error('Error:', error));

        closeModal(); // Cierra el modal de confirmación
    };

    // Maneja la cancelación de una acción
    const handleCancel = () => {
        openSuccessModal(); // Abre el modal de éxito al cancelar
        closeCModal(); // Cierra el modal de cancelación
    };

    // Abre el modal de éxito por un segundo y luego recarga la página
    const openSuccessModal = () => {
        setIsSuccessModalVisible(true);
        setTimeout(() => {
            setIsSuccessModalVisible(false);
            location.reload(); // Recarga la página después de mostrar el modal de éxito
        }, 1000);
    };

    // Navega a la página de detalles de la empresa usando el NIT
    const handleViewDetails = () => {
        navigate(`/detalles-empresa/${nit}`); // Redirige a la vista de detalles con el NIT como parámetro
    };

    return (
        <>
            {/* Modal de confirmación de acción */}
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
            {/* Modal de cancelación de acción */}
            <CancelModal isCOpen={isCOpen} closeCModal={closeCModal} handleCancel={handleCancel} />

            {/* Información de la empresa en formato de tabla responsiva */}
            <div className="bg-transparent border-transparent flex flex-col lg:flex-row">
                <div className="flex-1 p-3 lg:py-7 text-white text-lg text-center whitespace-nowrap truncate xl:w-[9rem]">
                    {nombre_empresa} {/* Muestra el nombre de la empresa */}
                </div>
                <div className="flex-1 p-3 lg:py-7 text-white text-lg text-center whitespace-nowrap truncate xl:w-[7rem]">
                    {representante} {/* Muestra el representante de la empresa */}
                </div>
                <div className="flex-1 p-3 lg:py-7 text-white text-lg text-center whitespace-nowrap truncate xl:w-[9rem]">
                    {razon_social} {/* Muestra la razón social de la empresa */}
                </div>
                <div className="flex-1 p-3 text-white text-lg xl:text-center items-center text-center whitespace-nowrap truncate xl:w-[11rem]">
                    <button
                        onClick={handleViewDetails} // Al hacer clic redirige a la vista de detalles
                        className="p-4 z-10 tracking-wide text-lg transition-colors duration-200 bg-transparent transform border-solid rounded-lg hover:bg-principalGreen hover:text-white hover:border-solid border hover:border-principalGreen"
                    >
                        Ver Empresa
                    </button>
                </div>
                <div className="flex-1 p-3 text-sm text-center whitespace-nowrap text-white border-b lg:border-b-transparent xl:border-b-transparent">
                    <button
                        onClick={openModal} // Abre el modal de confirmación
                        className="z-10 p-4 pl-5 pr-5 tracking-wide text-xl transition-colors duration-200 bg-principalGreen transform border-solid rounded-tl-lg rounded-bl-lg hover:text-principalGreen hover:bg-colorwhite"
                    >
                        <i className="fa-solid fa-check"></i> {/* Icono de confirmación */}
                    </button>
                    <button
                        onClick={openCModal} // Abre el modal de cancelación
                        className="z-10 p-4 pl-5 pr-5 tracking-wide text-xl transition-colors duration-200 bg-red transform border-solid rounded-br-lg rounded-tr-lg hover:bg-h hover:text-red hover:bg-colorwhite"
                    >
                        <i className="fa-solid fa-xmark"></i> {/* Icono de cancelación */}
                    </button>
                </div>
            </div>

            {/* Modal de carga/éxito */}
            {isSuccessModalVisible && (
                <Modalcarga />
            )}
        </>
    );
};

export default InfoAE;

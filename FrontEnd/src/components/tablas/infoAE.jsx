import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/modales/modalconfirm';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import CancelModal from "../../components/modales/modalcancel";

const InfoAE = ({ nit, nombre_empresa, representante, razon_social }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCOpen, setIsCOpen] = useState(false);
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    const navigate = useNavigate(); // Inicializa useNavigate

    const closeModal = () => setIsOpen(false);
    const closeCModal = () => setIsCOpen(false);
    const openModal = () => setIsOpen(true);
    const openCModal = () => setIsCOpen(true);

    const handleConfirm = () => {
        fetch(`http://localhost:8000/api/v2/update-empresa-status/${nit}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ estado: 2 }),
        })
            .then(response => response.ok ? response.json() : Promise.reject('Error al actualizar el estado'))
            .then(() => openSuccessModal())
            .catch(error => console.error('Error:', error));

        closeModal();
    };

    const handleCancel = () => {
        openSuccessModal();
        closeCModal();
    };

    const openSuccessModal = () => {
        setIsSuccessModalVisible(true);
        setTimeout(() => {
            setIsSuccessModalVisible(false);
            location.reload();
        }, 1000);
    };

    const handleViewDetails = () => {
        navigate(`/detalles-empresa/${nit}`); // Redirige a la vista de detalles con el NIT
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
            <CancelModal isCOpen={isCOpen} closeCModal={closeCModal} handleCancel={handleCancel} />
            <div className="bg-transparent border-transparent flex flex-col lg:flex-row">
                <div className="flex-1 p-3 text-white text-lg xl:text-left text-center whitespace-nowrap truncate xl:w-[9rem]">
                    {nombre_empresa}
                </div>
                <div className="flex-1 p-3 text-white text-lg xl:text-left text-center whitespace-nowrap truncate xl:w-[7rem]">
                    {representante}
                </div>
                <div className="flex-1 p-3 text-white text-lg xl:text-left text-center whitespace-nowrap truncate xl:w-[9rem]">
                    {razon_social}
                </div>
                <div className="flex-1 p-3 text-white text-lg xl:text-center items-center text-center whitespace-nowrap truncate xl:w-[11rem]">
                    <button
                        onClick={handleViewDetails}
                        className="p-4 z-10 tracking-wide text-lg transition-colors duration-200 bg-transparent transform border-solid rounded-lg hover:bg-principalGreen hover:text-white hover:border-solid border hover:border-principalGreen"
                    >
                        Ver Empresa
                    </button>
                </div>
                <div className="flex-1 p-3 text-sm text-center whitespace-nowrap text-white border-b xl:border-b-transparent">
                    <button
                        onClick={openModal}
                        className="z-10 p-4 pl-5 pr-5 tracking-wide text-xl transition-colors duration-200 bg-principalGreen transform border-solid rounded-tl-lg rounded-bl-lg hover:text-principalGreen hover:bg-colorwhite"
                    >
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <button
                        onClick={openCModal}
                        className="z-10 p-4 pl-5 pr-5 tracking-wide text-xl transition-colors duration-200 bg-red transform border-solid rounded-br-lg rounded-tr-lg hover:bg-h hover:text-red hover:bg-colorwhite"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>

            {/* Modal de éxito */}
            {isSuccessModalVisible && (
                <Modalcarga />
            )}
        </>
    );
};

export default InfoAE;

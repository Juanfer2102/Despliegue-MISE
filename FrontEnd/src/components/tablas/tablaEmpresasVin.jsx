import React, { useState } from 'react'
import Buscador from "../../components/inputs/buscador/buscador";
import ConfirmModal from '../../components/modales/modalconfirm';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import { useNavigate } from 'react-router-dom';
import CancelModal from "../../components/modales/modalcancel";

const TablaEmpresasVin = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isCOpen, setIsCOpen] = useState(false);
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const closeModal = () => setIsOpen(false);
    const closeCModal = () => setIsCOpen(false);
    const openModal = () => setIsOpen(true);
    const openCModal = () => setIsCOpen(true);

    // Estilos en JSX
    const styles = {
        customScrollbar: {
            scrollbarWidth: '13px',
            scrollbarColor: '#888 #262b32',
        },
        customScrollbarTrack: {
            background: '#262b32',
            borderRadius: '12px',
        },
        customScrollbarThumb: {
            background: '#888',
            borderRadius: '10px',
        },
        customScrollbarThumbHover: {
            background: '#555',
        }
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

    const handleConfirm = () => {
        closeModal();
    };

    const handleViewDiag = () => {
        navigate("/empresas-vinculadas"); 
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
            <CancelModal isCOpen={isCOpen} closeCModal={closeCModal} handleCancel={handleCancel} />
            <div className='flex flex-col lg:flex-row w-full py-4'>
                <Buscador
                    onSearch={handleSearch}
                    placeholder={"Buscar Empresas..."}
                    roles={[]}  // No pasamos roles porque no es necesario para empresas
                    contexto="empresas"  // Definimos el contexto
                />
            </div>

            <div className="overflow-x-auto w-full rounded-xl bg-greyBg">
                <div className="flex flex-col">
                    <div className="flex xl:flex-row min-lg-flex-row max-md:flex-col bg-greyBlack text-white font-semibold">
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">NIT</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Nombre</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Sector empresarial</div>
                        <div className="flex-1 p-5 text-center">Información</div>
                        <div className="flex-1 p-5 text-center"></div>
                    </div>

                    <div className="divide-y border border-textBg border-t-0 rounded max-h-[10rem] overflow-y-auto custom-scrollbar" style={styles.customScrollbar}>

                        <div className="flex flex-col lg:flex-row text-white">
                            <div className="flex-1 p-5 xl:text-left lg:text-left text-center">125364896</div>
                            <div className="flex-1 p-5 xl:text-left lg:text-left text-center">boteritos</div>
                            <div className="flex-1 p-5 xl:text-left lg:text-left text-center">mayonesa</div>
                            <div className="flex-1 p-5 text-center">
                                <button onClick={handleViewDiag} className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                                    Ver Diagnostico
                                </button>
                            </div>
                            <div className="flex-1 p-3 text-sm text-center text-white border-b lg:border-b-transparent xl:border-b-transparent">
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
                    </div>
                </div>
            </div>

            {/* Modal de éxito */}
            {isSuccessModalVisible && (
                <Modalcarga />
            )}
        </>
    );
}

export default TablaEmpresasVin;
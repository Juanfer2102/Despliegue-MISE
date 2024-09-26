import React, { useState } from 'react'
import Buscador from "../../components/inputs/buscador/buscador";
import ConfirmModal from '../../components/modales/modalconfirm';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import { useNavigate } from 'react-router-dom';
import CancelModal from "../../components/modales/modalcancel";

const TablaEmpresasVin = () => {

    // Estados
    const [searchTerm, setSearchTerm] = useState('');  // Estado para almacenar el término de búsqueda
    const [isOpen, setIsOpen] = useState(false);  // Estado para controlar la apertura del modal de confirmación
    const [isCOpen, setIsCOpen] = useState(false);  // Estado para controlar la apertura del modal de cancelación
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);  // Estado para controlar la visibilidad del modal de éxito

    // Maneja la búsqueda actualizando el estado
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    // Funciones para abrir y cerrar los modales de confirmación y cancelación
    const closeModal = () => setIsOpen(false);
    const closeCModal = () => setIsCOpen(false);
    const openModal = () => setIsOpen(true);
    const openCModal = () => setIsCOpen(true);

    // Estilos personalizados para la barra de desplazamiento (scrollbar)
    const styles = {
        customScrollbar: {
            scrollbarWidth: '13px',  // Ancho de la barra de desplazamiento
            scrollbarColor: '#888 #262b32',  // Color del thumb y el track
        },
        customScrollbarTrack: {
            background: '#262b32',  // Color de fondo del track
            borderRadius: '12px',  // Bordes redondeados del track
        },
        customScrollbarThumb: {
            background: '#888',  // Color del thumb
            borderRadius: '10px',  // Bordes redondeados del thumb
        },
        customScrollbarThumbHover: {
            background: '#555',  // Color del thumb cuando se pasa el ratón por encima
        }
    };

    // Función que maneja la acción de cancelar y muestra un modal de éxito
    const handleCancel = () => {
        openSuccessModal();  // Muestra el modal de éxito
        closeCModal();  // Cierra el modal de cancelación
    };

    // Función para abrir el modal de éxito y recargar la página después de un segundo
    const openSuccessModal = () => {
        setIsSuccessModalVisible(true);  // Muestra el modal de éxito
        setTimeout(() => {
            setIsSuccessModalVisible(false);  // Oculta el modal
            location.reload();  // Recarga la página
        }, 1000);
    };

    // Función que maneja la confirmación del modal
    const handleConfirm = () => {
        closeModal();  // Cierra el modal de confirmación
    };

    // Función que redirige a la página de "empresas vinculadas"
    const navigate = useNavigate();
    const handleViewDiag = () => {
        navigate("/empresas-vinculadas");  // Navega a la página
    };

    return (
        <>
            {/* Modal de confirmación */}
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
            
            {/* Modal de cancelación */}
            <CancelModal isCOpen={isCOpen} closeCModal={closeCModal} handleCancel={handleCancel} />

            {/* Barra de búsqueda */}
            <div className='flex flex-col lg:flex-row w-full py-4'>
                <Buscador
                    onSearch={handleSearch}  // Llamada a la función de búsqueda
                    placeholder={"Buscar Empresas..."}  // Texto de sugerencia en el buscador
                    roles={[]}  // No se pasan roles porque no es necesario para este contexto
                    contexto="empresas"  // Definimos el contexto para la búsqueda
                />
            </div>

            {/* Tabla de empresas */}
            <div className="overflow-x-auto w-full rounded-xl bg-greyBg">
                <div className="flex flex-col">
                    {/* Encabezado de la tabla */}
                    <div className="flex xl:flex-row min-lg-flex-row max-md:flex-col bg-greyBlack text-white font-semibold">
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">NIT</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Nombre</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Sector empresarial</div>
                        <div className="flex-1 p-5 text-center">Información</div>
                        <div className="flex-1 p-5 text-center"></div>  {/* Columna vacía para botones */}
                    </div>

                    {/* Contenido de la tabla */}
                    <div className="divide-y border border-textBg border-t-0 rounded max-h-[10rem] overflow-y-auto custom-scrollbar" style={styles.customScrollbar}>
                        {/* Fila de ejemplo con datos estáticos */}
                        <div className="flex flex-col lg:flex-row text-white">
                            <div className="flex-1 p-5 xl:text-left lg:text-left text-center">125364896</div>
                            <div className="flex-1 p-5 xl:text-left lg:text-left text-center">boteritos</div>
                            <div className="flex-1 p-5 xl:text-left lg:text-left text-center">mayonesa</div>
                            <div className="flex-1 p-5 text-center">
                                <button onClick={handleViewDiag} className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                                    Ver Diagnostico
                                </button>
                            </div>
                            {/* Botones de confirmación y cancelación */}
                            <div className="flex-1 p-3 text-sm text-center text-white border-b lg:border-b-transparent xl:border-b-transparent">
                                <button
                                    onClick={openModal}  // Llama a la función para abrir el modal de confirmación
                                    className="z-10 p-4 pl-5 pr-5 tracking-wide text-xl transition-colors duration-200 bg-principalGreen transform border-solid rounded-tl-lg rounded-bl-lg hover:text-principalGreen hover:bg-colorwhite"
                                >
                                    <i className="fa-solid fa-check"></i>
                                </button>
                                <button
                                    onClick={openCModal}  // Llama a la función para abrir el modal de cancelación
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
                <Modalcarga />  // Modal de carga visible solo cuando isSuccessModalVisible es verdadero
            )}
        </>
    );
}

export default TablaEmpresasVin;

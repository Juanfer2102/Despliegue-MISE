import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ConfirmModal from '../../components/modales/modalconfirm';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import CancelModal from "../../components/modales/modalcancel";
import { Autoeva } from '../../helpers/autoeva';
import { useNavigate } from 'react-router-dom';

const DeveloperPortal = () => {
    const { nit } = useParams(); // Extrae el NIT de la URL
    const [activeTab, setActiveTab] = useState('products');
    const [isOpen, setIsOpen] = useState(false);
    const [isCOpen, setIsCOpen] = useState(false);
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [companyData, setCompanyData] = useState(null);
    const [postulanteData, setPostulanteData] = useState(null);
    const [autoevaluacionData, setAutoevaluacionData] = useState(null);
    const [calificacionesModulos, setCalificacionesModulos] = useState([]);
    const [modulos, setModulos] = useState([]);
    const navigate = useNavigate(); // Inicializa useNavigate

    useEffect(() => {
        if (nit) {
            // Fetch company data based on NIT
            fetch(`http://localhost:8000/api/v2/empresas/${nit}/`)
                .then(response => response.json())
                .then(data => {
                    setCompanyData(data);
    
                    // Fetch postulante data based on postulante ID
                    if (data.id_postulante) {
                        fetch(`http://localhost:8000/api/v2/postulante/${data.id_postulante}/`)
                            .then(response => response.json())
                            .then(postulante => setPostulanteData(postulante))
                            .catch(error => console.error('Error fetching postulante data:', error));
                    }
    
                    // Fetch autoevaluacion data based on company nit
                    fetch(`http://localhost:8000/api/v2/autoevaluacion/`)
                        .then(response => response.json())
                        .then(autoevaluaciones => {
                            console.log('Autoevaluacion data:', autoevaluaciones);
    
                            // Filtra las autoevaluaciones para el NIT específico
                            const autoevaluacionData = autoevaluaciones.filter(autoeva => autoeva.nit === parseInt(nit));
    
                            if (autoevaluacionData.length > 0) {
                                // Extrae el ID de la autoevaluación para las calificaciones
                                const autoevaluacionId = autoevaluacionData[0].id_autoevaluacion; // Solo toma la primera autoevaluación con el NIT
    
                                // Fetch calificaciones de módulos
                                fetch(`http://localhost:8000/api/v2/calificaciones-modulos/${autoevaluacionId}/`)
                                    .then(response => response.json())
                                    .then(calificaciones => {
                                        console.log('Calificaciones data:', calificaciones);
    
                                        // Fetch modulos data
                                        fetch('http://localhost:8000/api/v2/modulo-autoevaluacion/')
                                            .then(response => response.json())
                                            .then(modulosData => {
                                                console.log('Modulos data:', modulosData);
                                                setModulos(modulosData);
    
                                                // Extrae las calificaciones, relacionándolas con los módulos
                                                const calificacionesConModulos = calificaciones.map(calificacion => {
                                                    // Busca el módulo correspondiente en la lista de módulos
                                                    const modulo = modulosData.find(mod => mod.id_modulo === calificacion.id_modulo);
                                                    return {
                                                        calificacion: calificacion.calificacion,
                                                        nombre_modulo: modulo ? modulo.nombre : 'Desconocido'
                                                    };
                                                });
    
                                                console.log('Calificaciones con módulos:', calificacionesConModulos);
                                                setCalificacionesModulos(calificacionesConModulos);
                                            })
                                            .catch(error => console.error('Error fetching modulos data:', error));
                                    })
                                    .catch(error => console.error('Error fetching calificaciones data:', error));
                            } else {
                                console.log('No se encontró autoevaluación para el NIT proporcionado.');
                                setCalificacionesModulos([]);
                            }
                        })
                        .catch(error => console.error('Error fetching autoevaluacion data:', error));
                })
                .catch(error => console.error('Error fetching company data:', error));
        }
    }, [nit]);
    
    

    const closeModal = () => setIsOpen(false);
    const closeCModal = () => setIsCOpen(false);
    const openModal = () => setIsOpen(true);
    const openCModal = () => setIsCOpen(true);

    const handleCancel = () => {
        openSuccessModal();
        closeCModal();
    };

    const handleConfirm = () => {
        openSuccessModal();
        closeModal();
    };

    const openSuccessModal = () => {
        setIsSuccessModalVisible(true);
        setTimeout(() => {
            fetch(`http://localhost:8000/api/v2/update-empresa-status/${nit}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ estado: 2 }),
            })
                .then(response => response.ok ? response.json() : Promise.reject('Error al actualizar el estado'))
                .then(() => {
                    setIsSuccessModalVisible(false);
                    navigate(`/aceptar-empresas`);
                })
                .catch(error => console.error('Error:', error));
        }, 1000); // 1 segundo
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'infopostu':
                if (!postulanteData) return <div>Loading postulante data...</div>;
                return (
                    <div>
                        <div className="bg-greyBlack p-5 rounded-xl mb-4">
                            <div className="grid grid-cols-3 p-3 justify-between">
                                <div className="col-span-1">
                                    <h2 className="text-xl font-bold mb-2 text-white">Nombre</h2>
                                    <p className="text-principalGreen font-semibold mb-6">
                                        {postulanteData.nombres_postulante} {postulanteData.apellidos_postulante}
                                    </p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Celular</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{postulanteData.celular}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Correo</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{postulanteData.correo}</p>
                                </div>
                                <div className="col-span-1">
                                    <h2 className="text-xl font-bold mb-2 text-white">Municipio</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{postulanteData.municipio}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Tipo de Documento</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{postulanteData.tipo_documento}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">No. Documento</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{postulanteData.no_documento}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'infoemp':
                if (!companyData) return <div>Loading company data...</div>;
                return (
                    <div>
                        <div className="bg-greyBlack p-5 rounded-xl mb-4">
                            <div className="grid grid-cols-3 p-3 justify-between">
                                <div className="col-span-1">
                                    <h2 className="text-xl font-bold mb-2 text-white">Producto o Servicio</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{companyData.producto_servicio}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Fecha de Inicio</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{companyData.fecha_creacion}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Costos el Ultimo Año</h2>
                                    <p className="text-textBg font-semibold mb-2"> {companyData.costos_ult_ano}</p>
                                </div>
                                <div className="col-span-1">
                                    <h2 className="text-xl font-bold mb-2 text-white">Razon Social</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{companyData.razon_social}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Celular Empresa</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{companyData.celular}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Ventas el Ultimo Año</h2>
                                    <p className="text-textBg font-semibold mb-2">{companyData.ventas_ult_ano}</p>
                                </div>
                                <div className="col-span-1">
                                    <h2 className="text-xl font-bold mb-2 text-white">NIT</h2>
                                    <p className="text-principalGreen font-semibold mb-6">{companyData.nit}</p>
                                    <h2 className="text-xl font-bold mt-2 mb-2 text-white">Empleados Permanentes</h2>
                                    <p className="text-textBg font-semibold mb-2">{companyData.empleados_perm}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'autoeva': {
                return (
                    <div>
                        {
                        calificacionesModulos && calificacionesModulos.length > 0 ? (
                            calificacionesModulos.map((calificacion, index) => {


                                return (
                                    <div key={index} className="bg-greyBlack p-5 rounded-xl mb-4">
                                        <div className="grid grid-cols-2 p-3 justify-between">
                                            <div className="col-span-1">
                                                <h2 className="text-xl font-bold mb-2 text-white">Módulo</h2>
                                                <p className="text-principalGreen font-semibold mb-6">{calificacion.nombre_modulo}</p>
                                            </div>
                                            <div className="col-span-1">
                                                <h2 className="text-xl font-bold mb-2 text-white">Calificación</h2>
                                                <p className="text-principalGreen font-semibold mb-6">{calificacion.calificacion}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="bg-greyBlack p-5 rounded-xl mb-4">
                                <p className="text-white">No se encontraron calificaciones para esta autoevaluación.</p>
                            </div>
                        )}
                    </div>
                );
            }




            default:
                return null;
        }
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
            <CancelModal isCOpen={isCOpen} closeCModal={closeCModal} handleCancel={handleCancel} />
            <div className="p-2">
                <div className="flex space-x-8 mb-6">
                    <button
                        onClick={() => setActiveTab('infopostu')}
                        className={`py-2 px-4 font-semibold ${activeTab === 'infopostu' ? 'border-b-2 border-principalGreen text-white' : 'text-textBg'}`}
                    >
                        Informacion Postulante
                    </button>
                    <button
                        onClick={() => setActiveTab('infoemp')}
                        className={`py-2 px-4 font-semibold ${activeTab === 'infoemp' ? 'border-b-2 border-principalGreen text-white' : 'text-textBg'}`}
                    >
                        Informacion Empresa
                    </button>
                    <button
                        onClick={() => setActiveTab('autoeva')}
                        className={`py-2 px-4 font-semibold ${activeTab === 'autoeva' ? 'border-b-2 border-principalGreen text-white' : 'text-textBg'}`}
                    >
                        AutoEvaluacion
                    </button>
                    <div className='flex w-[65rem] py-5 items-center justify-end font-semibold'>
                        <button onClick={openModal} className='bg-principalGreen rounded-tl-xl rounded-bl-xl p-2 text-white hover:bg-white hover:text-principalGreen'>Aceptar</button>
                        <button onClick={openCModal} className='bg-red rounded-tr-xl rounded-br-xl p-2 text-white hover:bg-white hover:text-red'>Rechazar</button>
                    </div>
                </div>
                <div>
                    {renderContent()}
                </div>
            </div>
            {/* Modal de éxito */}
            {isSuccessModalVisible && (
                <Modalcarga />
            )}
        </>
    );
};

export default DeveloperPortal;

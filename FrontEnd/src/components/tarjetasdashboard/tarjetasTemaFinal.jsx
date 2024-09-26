import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DownloadPDFButton from "../inputs/botones/botonpdf";

const TarjetasTemaFinal = ({ nit }) => {
    const [temas, setTemas] = useState([]);
    const [suenos, setSuenos] = useState([]);

    // Estados para manejar modales de temas y sueños
    const [selectedTema, setSelectedTema] = useState(null);
    const [isTemaModalOpen, setIsTemaModalOpen] = useState(false);

    const [selectedSueno, setSelectedSueno] = useState(null);
    const [isSuenoModalOpen, setIsSuenoModalOpen] = useState(false);

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

    useEffect(() => {
        if (nit) {
            // Obtener temas desde el endpoint
            fetch(`http://localhost:8000/api/v2/temas/empresa/${nit}/`)
                .then(response => response.json())
                .then(data => {
                    setTemas(data);
                })
                .catch(error => console.error("Error fetching temas:", error));

            // Obtener sueños evaluados desde el nuevo endpoint
            fetch(`http://localhost:8000/api/v2/suenos-concretados/${nit}/`)
                .then(response => response.json())
                .then(data => {
                    setSuenos(data); // Guardar sueños concretados en el estado
                })
                .catch(error => console.error("Error fetching suenos:", error));
        }
    }, [nit]);


    // Manejar apertura y cierre de modales de temas y sueños
    const openTemaModal = (tema) => {
        setSelectedTema(tema);
        setIsTemaModalOpen(true);
    };

    const closeTemaModal = () => {
        setIsTemaModalOpen(false);
        setSelectedTema(null);
    };

    const openSuenoModal = (sueno) => {
        setSelectedSueno(sueno);
        setIsSuenoModalOpen(true);
    };

    const closeSuenoModal = () => {
        setIsSuenoModalOpen(false);
        setSelectedSueno(null);
    };

    return (
        <>
            <div className="bg-greyBlack rounded-xl p-4 text-white w-full">
                <div className="flex flex-row justify-around py-2">
                    <h2 className="text-2xl font-bold mb-4 text-center">Temas evaluados</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 max-h-[35rem] overflow-y-auto" style={styles.customScrollbar}>
                    {temas.map((tema) => (
                        <div
                            key={tema.id_tema}
                            className="relative flex items-center justify-center bg-darkGrey rounded-lg border border-principalGreen shadow-lg hover:shadow-xl hover:bg-principalGreen transition-all duration-300 cursor-pointer"
                            onClick={() => openTemaModal(tema)}
                        >
                            <div className="absolute inset-0 p-4 flex items-center justify-center flex-col">
                                <p className="text-lg font-semibold text-center">{tema.objetivo}</p>
                                <p className="font-bold text-principalGreen">{tema.fecha_inicio} - {tema.fecha_fin}</p>
                                <p className={`text-${tema.estado === 0 ? 'amarillo' : tema.estado === 1 ? 'principalGreen' : 'red'}`}>{tema.criterio}</p>
                            </div>
                            <div className="w-full h-full" style={{ aspectRatio: '1 / 1' }}></div>
                        </div>
                    ))}
                </div>

                {isTemaModalOpen && selectedTema && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-greyBlack text-white p-6 rounded-lg shadow-lg w-full h-[35rem] max-w-2xl overflow-auto">
                            <h3 className="text-2xl font-bold mb-4">Detalles del Tema</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[25rem] overflow-y-auto" style={styles.customScrollbar}>
                                {/* Información del tema */}
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Módulo:</strong></p>
                                    <p className="mb-4">{selectedTema.id_modulo}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Sesión:</strong></p>
                                    <p className="mb-4">{selectedTema.num_sesion}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Objetivo:</strong></p>
                                    <p className="mb-4">{selectedTema.objetivo}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Alcance:</strong></p>
                                    <p className="mb-4">{selectedTema.alcance}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Contenido:</strong></p>
                                    <p className="mb-4">{selectedTema.contenido}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Conferencista:</strong></p>
                                    <p className="mb-4">{selectedTema.conferencista}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Fecha de inicio:</strong></p>
                                    <p className="mb-4">{selectedTema.fecha_inicio}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Fecha de Fin</strong></p>
                                    <p className="mb-4">{selectedTema.fecha_fin}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Ubicación:</strong></p>
                                    <p className="mb-4">{selectedTema.ubicacion}</p>
                                </div>
                            </div>
                            <button className="mt-6 px-4 py-2 bg-red text-white rounded-lg hover:bg-white hover:text-red transition-colors duration-300" onClick={closeTemaModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}

            </div>
            <div className="bg-greyBlack rounded-xl p-4 text-white w-full">
                <div className="flex flex-row justify-around py-2">
                    <h2 className="text-2xl font-bold mb-4 text-center">Sueños evaluados</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 max-h-[35rem] overflow-y-auto" style={styles.customScrollbar}>
                    {suenos.map((suenoEvaluado) => (
                        <div
                            key={suenoEvaluado.id}
                            className="relative flex items-center justify-center bg-darkGrey rounded-lg border border-principalGreen shadow-lg hover:shadow-xl hover:bg-principalGreen transition-all duration-300 cursor-pointer"
                            onClick={() => openSuenoModal(suenoEvaluado)}
                        >
                            <div className="absolute inset-0 p-4 flex items-center justify-center flex-col">
                                <p className="text-lg font-semibold text-center">{suenoEvaluado.sueno.nivel}</p>
                                <p className="text-lg font-semibold text-center">{suenoEvaluado.sueno.sueño}</p>
                                <p className="font-bold text-principalGreen">{suenoEvaluado.fecha}</p>
                                <p className={`text-${suenoEvaluado.estado === 1 ? 'principalGreen' : 'red'}`}>
                                    {suenoEvaluado.estado === 1 ? 'Evaluado' : 'No Evaluado'}
                                </p>
                            </div>
                            <div className="w-full h-full" style={{ aspectRatio: '1 / 1' }}></div>
                        </div>
                    ))}
                </div>

                {isSuenoModalOpen && selectedSueno && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-greyBlack text-white p-6 rounded-lg shadow-lg w-full h-[35rem] max-w-2xl overflow-auto">
                            <h3 className="text-2xl font-bold mb-4">Detalles del Sueño Evaluado</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[25rem] overflow-y-auto" style={styles.customScrollbar}>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Sueño:</strong></p>
                                    <p className="mb-4">{selectedSueno.sueno.sueño}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Medición:</strong></p>
                                    <p className="mb-4">{selectedSueno.sueno.medicion || 'No especificada'}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Evidencia:</strong></p>
                                    <p className="mb-4">{selectedSueno.sueno.evidencia || 'No especificada'}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Observaciones:</strong></p>
                                    <p className="mb-4">{selectedSueno.observaciones || 'Sin observaciones'}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold mb-2"><strong>Fecha:</strong></p>
                                    <p className="mb-4">{selectedSueno.fecha}</p>
                                </div>
                            </div>
                            <button className="mt-6 px-4 py-2 bg-red text-white rounded-lg hover:bg-white hover:text-red transition-colors duration-300" onClick={closeSuenoModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

TarjetasTemaFinal.propTypes = {
    nit: PropTypes.string.isRequired,
};

export default TarjetasTemaFinal;

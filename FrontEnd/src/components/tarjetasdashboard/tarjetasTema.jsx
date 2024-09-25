import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DownloadPDFButton from "../inputs/botones/botonpdf";

const TarjetasTema = ({ nit }) => {
    const [temas, setTemas] = useState([]);
    const [selectedTema, setSelectedTema] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    // Filtrar temas que tengan estado 0 en temas_asignados
                    // const temasConEstadoCero = data.filter(tema => tema.estado === 0);
                    setTemas(data);
                })
                .catch(error => console.error("Error fetching temas:", error));
        }
    }, [nit]);

    const aprobarTema = (estado) => {
        const temaId = selectedTema.id_tema; // Aquí deberías tener el ID del tema

        fetch(`http://localhost:8000/api/v2/temas_asignados/${nit}/${temaId}/actualizar_estado/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ estado }), // Aquí envías el estado
        })
            .then(response => response.json())
            .then(data => {
                if (data.mensaje) {
                    alert(data.mensaje);
                    closeModal();
                    // Opcional: Actualizar la lista de temas o hacer un refresh de la página
                    setTemas(temas.filter(tema => tema.id_tema !== selectedTema.id_tema));
                } else {
                    console.error("Error:", data.error);
                }
            })
            .catch(error => console.error("Error actualizando el estado del tema:", error));
    };



    const openModal = (tema) => {
        setSelectedTema(tema);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTema(null);
    };

    return (
        <div className="bg-greyBlack rounded-xl p-4 text-white w-full">

            <div className="flex flex-row justify-between py-2">
                <h2 className="text-2xl font-bold mb-4 text-center">Procesos en los que se encuentra la empresa</h2>
                <div className=" flex flex-row gap-5">
                    <a href={`/diagnostico/empresa-vista/${nit}`}><button className="bg-transparent border border-white hover:bg-white rounded-md text-white hover:text-principalGreen text-center font-semibold cursor-pointer w-auto h-10 p-2">
                        Ir a Diagnostico Inicial
                    </button>
                    </a>
                    <DownloadPDFButton pdfType={"inicial"} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2 xl:max-h-[35rem] lg:max-h-[35rem] overflow-y-auto" style={styles.customScrollbar}>
                {temas.map((tema) => (
                    <div
                        key={tema.id_tema}
                        className="relative flex items-center justify-center bg-darkGrey rounded-lg border border-principalGreen shadow-lg hover:shadow-xl hover:bg-principalGreen transition-all duration-300 cursor-pointer"
                        onClick={() => openModal(tema)}
                    >
                        <div className="absolute inset-0 p-4 flex items-center justify-center flex-col">
                            <p className="text-lg font-semibold text-center">{tema.objetivo}</p>
                            <p className="font-bold text-principalGreen">{tema.fecha_inicio} - {tema.fecha_fin}</p>
                            <p className={`font-bold transition-colors duration-300 ${tema.estado === 0 ? 'text-amarillo' : tema.estado === 1 ? 'text-principalGreen' : 'text-red'} hover:text-white`}>
                                {tema.criterio}
                            </p>
                        </div>
                        <div className="w-full h-full" style={{ aspectRatio: '1 / 1' }}></div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedTema && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-greyBlack text-white p-6 rounded-lg shadow-lg w-full h-[35rem] max-w-2xl">
                        <h3 className="text-2xl font-bold mb-4">Detalles del Tema</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:max-h-[24rem] lg:overflow-y-auto" style={styles.customScrollbar}>
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

                        {/* Botones Aprobó y No Aprobó */}
                        <div className="flex justify-between mt-6">
                            <button
                                className="mt-6 px-4 py-2 bg-principalGreen text-white rounded-lg hover:bg-white hover:text-principalGreen transition-colors duration-300"
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>
                            <div className={`${selectedTema.estado === 1 && 2 ? 'hidden' : 'flex'} gap-4`}>
                                <button
                                    className="mt-6 px-4 py-2 bg-principalGreen text-white rounded-lg hover:bg-white hover:text-principalGreen transition-colors duration-300"
                                    onClick={() => aprobarTema(1)} // Aprobado
                                >
                                    Aprobar
                                </button>
                                <button
                                    className="mt-6 px-4 py-2 bg-red text-white rounded-lg hover:bg-white hover:text-red transition-colors duration-300"
                                    onClick={() => aprobarTema(2)} // No aprobado
                                >
                                    No Aprobar
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

TarjetasTema.propTypes = {
    nit: PropTypes.string.isRequired,
};

export default TarjetasTema;

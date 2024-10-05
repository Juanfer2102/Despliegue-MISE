import { useEffect, useState } from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DesempenoForm from '../../components/forms/formsdiagnostico/formsdiagnosticoini';
import BackButton from '../../components/inputs/goback/BackButton';
import Boton from '../../components/inputs/botones/boton';
import ConfirmModal from '../../components/modales/modalconfirm';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import ModalInformativo from '../../components/modales/modalexito';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EvaluacionEmpresa = () => {
    const { nit } = useParams();
    const [formularioData, setFormularioData] = useState({});
    const [isOpen, setIsOpen] = useState(false); // Modal de confirmación
    const [isLoading, setIsLoading] = useState(false); // Modal de carga
    const [showInformativeModal, setShowInformativeModal] = useState(false); // Modal informativo
    const [mensajeModal, setMensajeModal] = useState(''); // Mensaje para el modal informativo
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    const [modulos, setModulos] = useState([]);
    const [preguntas, setPreguntas] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

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

    const handleFormChange = (titulo, data) => {
        setFormularioData(prevState => ({
            ...prevState,
            [titulo]: data,
        }));
    };

    // Función para cerrar el modal informativo
    const closeInformativeModal = () => setShowInformativeModal(false);

    const handleForm = async () => {
        try {
            setIsLoading(true); // Mostrar modal de carga
            const calificaciones = [];

            // Recorre cada módulo y recoge las calificaciones
            Object.keys(formularioData).forEach(titulo => {
                const calificacionData = formularioData[titulo];
                Object.keys(calificacionData).forEach(key => {
                    if (key.startsWith('valoracion_')) {
                        const preguntaId = calificacionData[`pregunta_${key.split('_')[1]}`];
                        const calificacion = calificacionData[key];
                        if (preguntaId && calificacion) {
                            calificaciones.push({
                                calificacion,
                                id_pregunta: preguntaId,
                                nit: nit,
                            });
                        }
                    }
                });
            });

            console.log('Datos a enviar:', calificaciones); // Verifica los datos en la consola

            const response = await fetch('https://despliegue-mise.onrender.com/api/v2/calificacion/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(calificaciones),
            });

            if (response.ok) {
                setMensajeModal('Calificaciones guardadas con éxito');
                changeDiagState(nit);
                setShowInformativeModal(true); // Mostrar modal informativo
                navigate(`/diagnostico/empresa/${nit}`);
            } else {
                const errorData = await response.json();
                console.error('Error al guardar las calificaciones:', errorData);
                setMensajeModal('Error al guardar las calificaciones');
                setShowInformativeModal(true); // Mostrar modal informativo
            }
        } catch (error) {
            console.error('Error al guardar las calificaciones:', error);
            setMensajeModal('Error al guardar las calificaciones');
            setShowInformativeModal(true); // Mostrar modal informativo
        } finally {
            setIsLoading(false); // Ocultar modal de carga
            closeModal();
        }
    };

    function changeDiagState(nit) {
        fetch(`https://despliegue-mise.onrender.com/api/v2/update-empresa-diag-status/${nit}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ diagnostico_value: 1 }),
        })
            .then(response => response.ok ? response.json() : Promise.reject('Error al actualizar el estado'))
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        const fetchEmpresaData = async () => {
            try {
                const response = await fetch(`https://despliegue-mise.onrender.com/api/v2/empresas/${nit}/`);
                if (response.ok) {
                    const data = await response.json();
                    setNombreEmpresa(data.nombre_empresa);
                } else {
                    console.error('Error al obtener los datos de la empresa');
                }
            } catch (error) {
                console.error('Error de red al obtener los datos de la empresa', error);
            }
        };

        fetchEmpresaData();
    }, [nit]);

    useEffect(() => {
        const fetchModulos = async () => {
            try {
                const response = await fetch('https://despliegue-mise.onrender.com/api/v2/modulos/');
                if (response.ok) {
                    const data = await response.json();
                    setModulos(data);
                } else {
                    console.error('Error al obtener los módulos');
                }
            } catch (error) {
                console.error('Error de red al obtener los módulos', error);
            } finally {
                setLoading(false);
            }
        };

        fetchModulos();
    }, []);

    useEffect(() => {
        const fetchPreguntasPorModulo = async (idModulo) => {
            try {
                const response = await fetch(`https://despliegue-mise.onrender.com/api/v2/preguntas/modulo/${idModulo}/`);
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        setPreguntas(prevState => ({
                            ...prevState,
                            [idModulo]: data,
                        }));
                    } else {
                        console.error(`Datos de preguntas no válidos para el módulo ${idModulo}:`, data);
                        setPreguntas(prevState => ({
                            ...prevState,
                            [idModulo]: [],
                        }));
                    }
                } else {
                    console.error(`Error al obtener las preguntas para el módulo ${idModulo}:`, response.statusText);
                    setPreguntas(prevState => ({
                        ...prevState,
                        [idModulo]: [],
                    }));
                }
            } catch (error) {
                console.error(`Error de red al obtener las preguntas para el módulo ${idModulo}:`, error);
                setPreguntas(prevState => ({
                    ...prevState,
                    [idModulo]: [],
                }));
            }
        };

        modulos.forEach(modulo => {
            fetchPreguntasPorModulo(modulo.id_modulo);
        });
    }, [modulos]);

    return (
        <>
            {isLoading && <Modalcarga />} {/* Modal de carga */}
            {showInformativeModal && <ModalInformativo mensaje={mensajeModal} onClose={closeInformativeModal} />} {/* Modal informativo */}
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleForm} />
            <LayoutDashboard title="MISE">
                <main className="flex flex-row w-full bg-greyBlack h-screen">
                    <div className="flex flex-col w-full h-full">
                        <div className="flex content-center justify-end h-20 w-full" />
                        <div className="bg-greyBg flex flex-col h-full w-full px-8 pt-2 overflow-auto">
                            <div className="gap-8 flex flex-col p-8 w-full h-full rounded-md">
                                <div className="rounded-xl flex flex-col gap-6 h-full">
                                    <BackButton text={`Diagnostico / ${nombreEmpresa || 'Cargando...'}`} />
                                    <div className="flex flex-col gap-6 h-full overflow-auto custom-scrollbar" style={styles.customScrollbar} >
                                        {loading ? (
                                            <p>Cargando módulos...</p>
                                        ) : (
                                            modulos.map((modulo, index) => (
                                                <div key={index} className="flex-1">
                                                    <DesempenoForm
                                                        criterios={preguntas[modulo.id_modulo]?.map(pregunta => ({ descripcion: pregunta.descripcion, id_pregunta: pregunta.id_pregunta })) || []}
                                                        titulo={modulo.nombre || 'Sin título'}
                                                        nit={nit}
                                                        onFormSubmit={handleFormChange}
                                                    />
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-end w-full px-2">
                                    <Boton onClick={openModal} text="Guardar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </LayoutDashboard>
        </>
    );
};

export default EvaluacionEmpresa;

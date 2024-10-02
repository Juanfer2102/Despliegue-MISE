import React, { useEffect, useState } from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DesempenoForm from '../../components/forms/formsdiagnostico/formsdiagnostico';
import GoBack from '../../components/inputs/goback/GoBack';
import Boton from '../../components/inputs/botones/boton';
import ConfirmModal from '../../components/modales/modalconfirm';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import ModalInformativo from '../../components/modales/modalexito';
import { useParams, useNavigate } from 'react-router-dom';

const EvaluacionEmpresaf = () => {
    const { nit } = useParams();
    const [formularioData, setFormularioData] = useState({});
    const [isOpen, setIsOpen] = useState(false); // Para confirmar modal
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    const [modulos, setModulos] = useState([]);
    const [preguntas, setPreguntas] = useState({});
    const [loading, setLoading] = useState(true); // Para mostrar "Cargando módulos..."
    
    const [isModalCargaOpen, setModalCargaOpen] = useState(false); // Para el modal de carga
    const [isModalInformativoOpen, setModalInformativoOpen] = useState(false); // Para el modal informativo
    const [modalMensaje, setModalMensaje] = useState(''); // Para el mensaje del modal
    const navigate = useNavigate(); // Para redirigir
    
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    const handleFormChange = (titulo, data) => {
        setFormularioData(prevState => ({
            ...prevState,
            [titulo]: data,
        }));
    };
    
    const handleForm = async () => {
        closeModal(); // Cerramos el modal de confirmación inmediatamente
        setModalCargaOpen(true); // Mostramos el modal de carga
        
        try {
            const calificaciones = [];
    
            Object.keys(formularioData).forEach(titulo => {
                const calificacionData = formularioData[titulo];
                Object.keys(calificacionData).forEach(key => {
                    if (key.startsWith('valoracion_')) {
                        const preguntaId = calificacionData[`pregunta_${key.split('_')[1]}`];
                        let calificacion = calificacionData[key];
                        if (preguntaId && calificacion) {
                            calificacion = parseFloat(calificacion); 
                            calificaciones.push({
                                nit: nit,
                                id_pregunta: preguntaId,
                                calificacion_final: calificacion,  
                            });
                        }
                    }
                });
            });
    
            const dataToSend = { calificaciones }; 
    
            const response = await fetch('http://localhost:8000/api/v2/update-calificacion/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
    
            if (response.ok) {
                setModalMensaje('Calificaciones guardadas con éxito');
                setModalInformativoOpen(true); // Mostramos el modal informativo de éxito
                
                setTimeout(() => {
                    navigate(`/diagnostico/empresa-vista-final/${nit}`);
                }, 2000); // Redirigir después de 2 segundos
            } else {
                const errorData = await response.json();
                setModalMensaje(`Error al guardar las calificaciones: ${errorData.message}`);
                setModalInformativoOpen(true); // Mostramos el modal informativo con el error
            }
        } catch (error) {
            setModalMensaje(`Error al guardar las calificaciones: ${error.message}`);
            setModalInformativoOpen(true); // Mostramos el modal informativo con el error
        } finally {
            setModalCargaOpen(false); // Ocultamos el modal de carga al finalizar
        }
    };
    
    useEffect(() => {
        const fetchEmpresaData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v2/empresas/${nit}/`);
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
                const response = await fetch(`http://localhost:8000/api/v2/calificaciones/empresa/${nit}/`);
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
    }, [nit]);

    useEffect(() => {
        const fetchCalificacionesPorEmpresa = async (nit) => {
            try {
                const response = await fetch(`http://localhost:8000/api/v2/calificaciones/empresa/${nit}/`);
                if (response.ok) {
                    const data = await response.json();
                    const nuevasPreguntas = {};
                    data.forEach(modulo => {
                        nuevasPreguntas[modulo.id_modulo] = modulo.preguntas;
                    });
                    setPreguntas(nuevasPreguntas);
                } else {
                    console.error(`Error al obtener las calificaciones para la empresa ${nit}:`, response.statusText);
                    setPreguntas({});
                }
            } catch (error) {
                console.error(`Error de red al obtener las calificaciones para la empresa ${nit}:`, error);
                setPreguntas({});
            }
        };
        if (nit) {
            fetchCalificacionesPorEmpresa(nit);
        }
    }, [nit]);

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleForm} />
            {isModalCargaOpen && <Modalcarga />}
            {isModalInformativoOpen && <ModalInformativo mensaje={modalMensaje} onClose={() => setModalInformativoOpen(false)} />}
            <LayoutDashboard title="MISE">
                <main className="flex flex-row w-full bg-greyBlack h-screen">
                    <div className="flex flex-col w-full h-full">
                        <div className="flex content-center justify-end h-20 w-full" />
                        <div className="bg-greyBg flex flex-col h-full w-full px-12 pt-6 overflow-auto">
                            <div className="gap-8 flex flex-col p-8 w-full h-full rounded-md">
                                <div className="rounded-xl flex flex-col gap-6 h-full">
                                    <GoBack text={`Evaluacion Final / ${nombreEmpresa || 'Cargando...'}`} />
                                    <div className="flex flex-col gap-6 h-full overflow-auto custom-scrollbar">
                                        {loading ? (
                                            <p>Cargando módulos...</p>
                                        ) : (
                                            modulos.map((modulo, index) => (
                                                <div key={index} className="flex-1">
                                                    <DesempenoForm
                                                        criterios={preguntas[modulo.id_modulo]?.map(pregunta => ({ descripcion: pregunta.descripcion, id_pregunta: pregunta.id_pregunta, calificacion: pregunta.calificacion })) || []}
                                                        titulo={modulo.nombre || 'Sin título'}
                                                        nit={nit}
                                                        onFormSubmit={handleFormChange}
                                                    />
                                                </div>
                                            ))
                                        )}
                                        <Boton text={"Guardar"} onClick={openModal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </LayoutDashboard>
        </>
    );
}

export default EvaluacionEmpresaf;

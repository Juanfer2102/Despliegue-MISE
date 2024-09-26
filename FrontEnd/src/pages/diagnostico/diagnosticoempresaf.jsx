import React from 'react';
import { useEffect, useState } from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DesempenoForm from '../../components/forms/formsdiagnostico/formsdiagnostico';
import GoBack from '../../components/inputs/goback/GoBack';
import Boton from '../../components/inputs/botones/boton';
import ConfirmModal from '../../components/modales/modalconfirm';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EvaluacionEmpresaf = () => {
    const { nit } = useParams();
    const [formularioData, setFormularioData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    const [modulos, setModulos] = useState([]);
    const [preguntas, setPreguntas] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Inicializa useNavigate

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleFormChange = (titulo, data) => {
        setFormularioData(prevState => ({
            ...prevState,
            [titulo]: data,
        }));
    };

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

    const handleForm = async () => {
        try {
            const calificaciones = [];
    
            // Recorre cada módulo y recoge las calificaciones
            Object.keys(formularioData).forEach(titulo => {
                const calificacionData = formularioData[titulo];
                Object.keys(calificacionData).forEach(key => {
                    if (key.startsWith('valoracion_')) {
                        const preguntaId = calificacionData[`pregunta_${key.split('_')[1]}`];
                        let calificacion = calificacionData[key];
                        
                        if (preguntaId && calificacion) {
                            // Convierte la calificación a número
                            calificacion = parseFloat(calificacion); // Usa parseInt si no aceptas decimales
                            
                            // Crea un objeto con la estructura deseada
                            calificaciones.push({
                                nit: nit,
                                id_pregunta: preguntaId,
                                calificacion_final: calificacion,  // Cambiado a 'calificacion_final'
                            });
                        }
                    }
                });
            });
    
            // Estructura los datos en un objeto antes de enviarlos
            const dataToSend = { calificaciones };  // Envolviendo en un objeto
    
            console.log('Datos a enviar:', dataToSend); // Verifica los datos en la consola
    
            // Realiza la solicitud POST al backend
            const response = await fetch('http://localhost:8000/api/v2/update-calificacion/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),  // Envía el objeto
            });
    
            if (response.ok) {
                alert('Calificaciones guardadas con éxito');
                navigate(`/diagnostico/empresa-vista-final/${nit}`);
            } else {
                const errorData = await response.json();
                console.error('Error al guardar las calificaciones:', errorData);
                alert('Error al guardar las calificaciones');
            }
        } catch (error) {
            console.error('Error al guardar las calificaciones:', error);
        } finally {
            closeModal();
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
    }, [nit]); // Añadir nit como dependencia

    useEffect(() => {
        const fetchCalificacionesPorEmpresa = async (nit) => {
            try {
                const response = await fetch(`http://localhost:8000/api/v2/calificaciones/empresa/${nit}/`);
                if (response.ok) {
                    const data = await response.json();
    
                    // Suponiendo que data es un array que contiene la información de los módulos
                    const nuevasPreguntas = {};
                    data.forEach(modulo => {
                        // Guardamos las preguntas por id_modulo
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
    
        // Llama a la función para obtener las calificaciones y preguntas
        if (nit) {
            fetchCalificacionesPorEmpresa(nit);
        }
    }, [nit]);
    

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleForm} />
            <LayoutDashboard title="MISE">
                <main className="flex flex-row w-full bg-greyBlack h-screen">
                    <div className="flex flex-col w-full h-full">
                        <div className="flex content-center justify-end h-20 w-full" />
                        <div className="bg-greyBg flex flex-col h-full w-full px-12 pt-6 overflow-auto">
                            <div className="gap-8 flex flex-col p-8 w-full h-full rounded-md">
                                <div className="rounded-xl flex flex-col gap-6 h-full">
                                    <GoBack text={`Evaluacion Final / ${nombreEmpresa || 'Cargando...'}`} />
                                    <div className="flex flex-col gap-6 h-full overflow-auto custom-scrollbar" style={styles.customScrollbar}>
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

import { useEffect, useState } from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DesempenoForm from '../../components/forms/formsdiagnostico/formsdiagnostico';
import GoBack from '../../components/inputs/goback/GoBack';
import Boton from '../../components/inputs/boton';
import ConfirmModal from '../../components/modales/modalconfirm';

import { useParams } from 'react-router-dom';

const DiagnosticoEmpresa = () => {
    const { nit } = useParams();
    const [formularioData, setFormularioData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [nombreEmpresa, setNombreEmpresa] = useState(''); // Estado para el nombre de la empresa
    const [modulos, setModulos] = useState([]); // Estado para los módulos
    const [preguntas, setPreguntas] = useState({}); // Estado para las preguntas asociadas a cada módulo
    const [loading, setLoading] = useState(true); // Estado de carga

    // Función para abrir el modal
    const openModal = () => setIsOpen(true);

    // Función para cerrar el modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Función para manejar los cambios en los formularios
    const handleFormChange = (titulo, data) => {
        setFormularioData(prevState => ({
            ...prevState,
            [titulo]: {
                ...prevState[titulo],
                ...data,
            },
        }));
    };

    // Función para manejar el envío del formulario
    const handleForm = async (event) => {
        event.preventDefault();
        console.log('Datos del formulario:', formularioData);
        closeModal();
    };

    // Llamada a la API para obtener los datos de la empresa por NIT
    useEffect(() => {
        const fetchEmpresaData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v2/empresas/${nit}/`);
                if (response.ok) {
                    const data = await response.json();
                    setNombreEmpresa(data.nombre_empresa); // Extraer y guardar el nombre de la empresa
                } else {
                    console.error('Error al obtener los datos de la empresa');
                }
            } catch (error) {
                console.error('Error de red al obtener los datos de la empresa', error);
            }
        };

        fetchEmpresaData();
    }, [nit]); // El efecto depende del NIT

    // Llamada a la API para obtener los módulos
    useEffect(() => {
        const fetchModulos = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/modulos/');
                if (response.ok) {
                    const data = await response.json();
                    setModulos(data); // Asigna los módulos obtenidos al estado
                } else {
                    console.error('Error al obtener los módulos');
                }
            } catch (error) {
                console.error('Error de red al obtener los módulos', error);
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchModulos();
    }, []);

    // Llamada a la API para obtener las preguntas por cada módulo
    useEffect(() => {
        const fetchPreguntasPorModulo = async (id_modulo) => {
            try {
                const response = await fetch(`http://localhost:8000/api/v2/preguntas/${id_modulo}/`);
                if (response.ok) {
                    const data = await response.json();
                    setPreguntas(prevState => ({
                        ...prevState,
                        [id_modulo]: data, // Almacena las preguntas en el estado bajo el id del módulo
                    }));
                } else {
                    console.error(`Error al obtener las preguntas para el módulo ${id_modulo}`);
                }
            } catch (error) {
                console.error(`Error de red al obtener las preguntas para el módulo ${id_modulo}`, error);
            }
        };

        // Para cada módulo, realiza la llamada para obtener las preguntas
        modulos.forEach(modulo => {
            fetchPreguntasPorModulo(modulo.id);
        });
    }, [modulos]); // Se ejecuta una vez que los módulos estén cargados

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
                                    {/* Mostrar el nombre de la empresa dinámicamente */}
                                    <GoBack text={`Diagnostico / ${nombreEmpresa || 'Cargando...'}`} />
                                    <div className="flex flex-col gap-6 h-full overflow-auto custom-scrollbar">
                                        {loading ? (
                                            <p>Cargando módulos...</p>
                                        ) : (
                                            modulos.map((modulo, index) => (
                                                <div key={index} className="flex-1">
                                                    <DesempenoForm
                                                        criterios={preguntas[modulo.id_modulo]?.map(pregunta => ({ descripcion: pregunta.descripcion })) || []} // Mostrar descripciones de preguntas
                                                        titulo={modulo.nombre} // Usar el nombre del módulo como título
                                                        onFormChange={handleFormChange}
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
};

export default DiagnosticoEmpresa;

import { useState, useEffect } from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DesempenoForm from '../../components/forms/formsdiagnostico/formsdiagnostico';
import GoBack from '../../components/inputs/goback/GoBack';
import Boton from '../../components/inputs/boton';
import Modalcarga from '../../components/modales/modalcarga/modalcarga';
import ConfirmModal from '../../components/modales/modalconfirm';

const DiagnosticoEmpresa = () => {
    const [formularios, setFormularios] = useState([]);
    const [formularioData, setFormularioData] = useState({});
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchFormularios = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/modulos/');
                const data = await response.json();
                setFormularios(data);
                console.log(data);
            } catch (error) {
                console.error('Error al obtener los módulos:', error);
            }
        };

        fetchFormularios();
    }, []);

    const openModal = () => setIsOpen(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleFormChange = (titulo, data) => {
        setFormularioData(prevState => ({
            ...prevState,
            [titulo]: data
        }));
    };

    const handleForm = async (event) => {
        event.preventDefault();
        console.log('Datos del formulario:', formularioData);
        closeModal();
        openSuccessModal();
    };

    const openSuccessModal = () => {
        setIsSuccessModalVisible(true);
        setTimeout(() => {
            setIsSuccessModalVisible(false);
        }, 1000); // 1 segundo
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleForm} />
            <LayoutDashboard title="Diagnóstico Empresa">
                <main className="flex flex-row w-full bg-greyBlack h-screen">
                    <div className="flex flex-col w-full h-full">
                        <div className="flex content-center justify-end h-20 w-full" />
                        <div className="bg-greyBg flex flex-col h-full w-full px-12 pt-6 overflow-auto">
                            <div className="gap-8 flex flex-col p-8 w-full h-full rounded-md">
                                <div className="rounded-xl flex flex-col gap-6 h-full">
                                    <GoBack text={"Diagnóstico / Arroz Chino"} />
                                    <div className="flex flex-col gap-6 h-full overflow-auto">
                                        {formularios.map((formulario, index) => (
                                            <div key={index} className="flex-1">
                                                <DesempenoForm
                                                    moduloId = {formulario.id_modulo}
                                                    titulo={formulario.nombre}
                                                    escala={formulario.escala}
                                                    objetivo={formulario.objetivo}
                                                    observaciones={formulario.observaciones}
                                                    alcance={formulario.alcance}
                                                    estado_actual={formulario.estado_actual}
                                                    nivel_ideal={formulario.nivel_ideal}
                                                    onFormChange={handleFormChange}
                                                />
                                            </div>
                                        ))}
                                        <Boton text={"Guardar"} onClick={openModal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </LayoutDashboard>
            {isSuccessModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <div className="loading-balls">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DiagnosticoEmpresa;

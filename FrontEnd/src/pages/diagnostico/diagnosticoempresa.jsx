import { useState } from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DesempenoForm from '../../components/forms/formsdiagnostico/formsdiagnostico';
import GoBack from '../../components/inputs/goback/GoBack';
import Boton from '../../components/inputs/boton';
import ConfirmModal from '../../components/modales/modalconfirm';

const DiagnosticoEmpresa = () => {
    const [formularioData, setFormularioData] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const formularios = [
        {
            titulo: 'Desempeño Administrativo',
            criterios: [
                { descripcion: 'Grado de compromiso que asume para el cumplimiento de las metas. Grado de tranquilidad que le genera a su superior.' },
                { descripcion: 'Coherencia entre el trabajo solicitado y el efectivamente realizado.' },
            ],
        },
        {
            titulo: 'Desempeño Técnico',
            criterios: [
                { descripcion: 'Conocimiento de las distintas herramientas necesarias para desarrollar sus labores.' },
                { descripcion: 'Grado de cumplimiento de las normas, procedimientos y políticas existentes.' },
            ],
        },
    ];

    const openModal = () => setIsOpen(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleFormChange = (titulo, data) => {
        setFormularioData(prevState => ({
            ...prevState,
            [titulo]: {
                ...prevState[titulo],
                ...data,
            },
        }));
    };

    const handleForm = async (event) => {
        event.preventDefault();
        console.log('Datos del formulario:', formularioData); // Mostrar los valores de los inputs en la consola
        closeModal();
    };

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
                                    <GoBack text={"Diagnostico / Arroz Chino"} />
                                    <div className="flex flex-col gap-6 h-full overflow-auto custom-scrollbar">
                                        {formularios.map((formulario, index) => (
                                            <div key={index} className="flex-1">
                                                <DesempenoForm
                                                    criterios={formulario.criterios}
                                                    titulo={formulario.titulo}
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
        </>
    );
};

export default DiagnosticoEmpresa;

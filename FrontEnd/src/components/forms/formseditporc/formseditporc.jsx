import { useState } from 'react';
import Input3 from "../../inputs/input3/input3.jsx";
import { ProgressCircleHero } from "../../inputs/porcentaje/porcentaje.jsx";
import ConfirmModal from '../../modales/modalconfirm';
import Modalcarga from '../../modales/modalcarga/modalcarga.jsx';

/**
 * Componente `Formseditporc` para editar y visualizar porcentajes de desarrollo.
 * El componente permite ingresar porcentajes y visualizarlos mediante un gráfico circular.
 * Incluye un modal para confirmar la acción de guardar y otro para mostrar un estado de éxito.
 * 
 * @returns {JSX.Element} El componente `Formseditporc`.
 */
export const Formseditporc = () => {
    // Estados para la visibilidad de modales y valores del formulario
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    // Estados para los valores del formulario
    const [values, setValues] = useState({
        porcentaje1: "",
        nporcentaje1: "",
        // porcentaje2: "",
        // nporcentaje2: "",
        // porcentaje3: "",
        // nporcentaje3: "",
    });

    /**
     * Cierra el modal de confirmación.
     */
    const closeModal = () => {
        setIsOpen(false);
    };

    /**
     * Abre el modal de confirmación.
     */
    const openModal = () => setIsOpen(true);

    /**
     * Maneja los cambios en los campos de entrada del formulario.
     * 
     * @param {Event} event - Evento del formulario.
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    /**
     * Maneja el envío del formulario.
     * 
     * @param {Event} event - Evento del formulario.
     */
    const handleForm = async (event) => {
        event.preventDefault();
        closeModal();
        openSuccessModal();
    };

    /**
     * Abre el modal de éxito y lo cierra automáticamente después de 1 segundo.
     */
    const openSuccessModal = () => {
        console.log("Inputs value:", values); // Mostrar los valores de los inputs en la consola
        setIsSuccessModalVisible(true);
        setTimeout(() => {
            setIsSuccessModalVisible(false);
        }, 1000); // 1 segundo
    };

    return (
        <>
            {/* Modal de confirmación */}
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleForm} />

            <form className="bg-greyBlack gap-8 flex flex-col p-4 sm:p-8 xl:w-full lg:w-full rounded-md max-h-[28rem] overflow-y-auto custom-scrollbar">
                {/* Container for form rows */}
                <div className="flex flex-col gap-8 sm:gap-12">
                    {/* Primera Fila */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
                        <div className='flex flex-col gap-[8rem] sm:gap-8 w-full sm:w-1/2'>
                            <Input3
                                name={"porcentaje1"}
                                value={values.porcentaje1}
                                onChange={handleInputChange}
                                width="w-full"
                                widthInput="w-full"
                                DataType="Nombre"
                                inputPlaceholder="No Desarrollado"
                                inputType="text"
                            />
                            <Input3
                                name={"nporcentaje1"}
                                value={values.nporcentaje1}
                                onChange={handleInputChange}
                                width="w-full"
                                widthInput="w-full"
                                DataType="Porcentaje de Desarrollo"
                                inputPlaceholder="25%"
                                inputType="number"
                            />
                        </div>
                        <div className='text-white w-full sm:w-1/2'>
                            <ProgressCircleHero text={values.porcentaje1} value={values.nporcentaje1} />
                        </div>
                    </div>

                    {/* Segunda Fila (comentada) */}
                    {/* <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
                        <div className='flex flex-col gap-4 sm:gap-8 w-full sm:w-1/2'>
                            <Input3
                                name={"porcentaje2"}
                                value={values.porcentaje2}
                                onChange={handleInputChange}
                                width="w-full"
                                widthInput="w-full"
                                DataType="Nombre"
                                inputPlaceholder="No Desarrollado"
                                inputType="text"
                            />
                            <Input3
                                name={"nporcentaje2"}
                                value={values.nporcentaje2}
                                onChange={handleInputChange}
                                width="w-full"
                                widthInput="w-full"
                                DataType="Porcentaje de Desarrollo"
                                inputPlaceholder="25%"
                                inputType="number"
                            />
                        </div>
                        <div className='text-white w-full sm:w-1/2'>
                            <ProgressCircleHero text={values.porcentaje2} value={values.nporcentaje2} />
                        </div>
                    </div> */}

                    {/* Tercera Fila (comentada) */}
                    {/* <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
                        <div className='flex flex-col gap-4 sm:gap-8 w-full sm:w-1/2'>
                            <Input3
                                name={"porcentaje3"}
                                value={values.porcentaje3}
                                onChange={handleInputChange}
                                width="w-full"
                                widthInput="w-full"
                                DataType="Nombre"
                                inputPlaceholder="No Desarrollado"
                                inputType="text"
                            />
                            <Input3
                                name={"nporcentaje3"}
                                value={values.nporcentaje3}
                                onChange={handleInputChange}
                                width="w-full"
                                widthInput="w-full"
                                DataType="Porcentaje de Desarrollo"
                                inputPlaceholder="25%"
                                inputType="number"
                            />
                        </div>
                        <div className='text-white w-full sm:w-1/2'>
                            <ProgressCircleHero text={values.porcentaje3} value={values.nporcentaje3} />
                        </div>
                    </div> */}
                </div>

                {/* Botón de guardar */}
                <div className="mt-6 flex justify-start">
                    <button
                        className="bg-principalGreen rounded-md text-white text-center font-semibold cursor-pointer w-full sm:w-[6rem] h-10 p-2"
                        type="button"
                        onClick={openModal}
                    >
                        <p>Guardar</p>
                    </button>
                </div>
            </form>

            {/* Modal de éxito */}
            {isSuccessModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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

export default Formseditporc;

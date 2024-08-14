import React, { useState } from 'react';
import Input3 from '../inputs/input3/input3.jsx';
import Boton from '../inputs/boton.jsx';
import { TextareaHero } from '../inputs/textarea/TextArea.jsx';
import ConfirmModal from './modalconfirm.jsx';
import iconGB from "./../../images/icons/iconsEditUser/GoBack.png";
import MultiSelectComponent from '../inputs/selectores/selectormultiple.jsx';

const ModalComponent = ({ condicion }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleForm = (event) => {
        console.log("Inputs value:", values);
    };

    const [values, setValues] = useState({
        nom_mod_edit: "",
    });

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectionChange = (selectedValues) => {
        setSelectedOptions(selectedValues);
    };

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
        { value: 'option4', label: 'Opción 4' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleConfirm = () => {
        // Lógica de confirmación
        console.log("Inputs value:", values);
        closeModal();
        location.reload()
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />

            {condicion === 1 && (
                // Nuevo Modulo
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-3 text-textBg items-center font-semibold">
                        <img src={iconGB.src} alt="" onClick={() => window.history.back()}
                            style={{ cursor: 'pointer' }} />
                        <p class="">Nuevo Modulo</p>
                    </div>
                    <div className="flex-col bg-greyBlack rounded-xl gap-3 text-center p-10 flex justify-center items-start">
                        <p className="text-xl h-5 pb-10 text-white">Nuevo Modulo</p>
                        <div className="flex flex-col justify-start gap-6">
                            <Input3 DataType="Nombre" inputPlaceholder="Nombre Modulo" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[25rem]" additionalClass="" />
                            <Input3 DataType="Preguntas" inputPlaceholder="Preguntas Modulo" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[25rem]" additionalClass="" />
                            <Input3 DataType="Sueños" inputPlaceholder="SUEÑOS EXPRESS" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[25rem]" additionalClass="" />
                            <Boton onClick={openModal} />
                        </div>
                    </div>
                </div>
            )}

            {condicion === 2 && (
                // Editar Modulo
                <>
                    <div className='flex flex-col gap-5'>
                        <div className="flex flex-row gap-3 text-textBg items-center font-semibold">
                            <img src={iconGB.src} alt="" onClick={() => window.history.back()}
                                style={{ cursor: 'pointer' }} />
                            <p class="">Editar Modulo</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                <div className="flex flex-col justify-center items-center gap-6">
                                    <div className="flex flex-row items-center text-start content-center h-[4rem]">
                                        <p className="font-semibold text-textBg w-[10rem]">Nombre</p>
                                        <p className="w-[17rem] text-textBg font-semibold">Nombre Modulo</p>
                                    </div>
                                    <div className="flex flex-row items-center text-start content-center h-[4rem]">
                                        <p className="font-semibold text-textBg w-[10rem]">Preguntas</p>
                                        <p className="w-[17rem] text-textBg font-semibold">Preguntas Modulo</p>
                                    </div>
                                    <div className="flex flex-row items-center text-start content-center h-[4rem]">
                                        <p className="font-semibold text-textBg w-[10rem]">Sueños</p>
                                        <p className="w-[17rem] text-textBg font-semibold">SUEÑOS EXPRESS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                <p className="text-xl h-5 pb-10 text-white">Editar Modulo</p>
                                <form onSubmit={handleForm} className="flex flex-col justify-center items-center gap-6">
                                    <Input3 value={values.nom_mod_edit} name={"nom_mod_edit"} onChange={handleInputChange} DataType="Nombre" inputPlaceholder="Nombre Modulo" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                </form>
                                <Boton onClick={openModal} />
                            </div>
                        </div>
                    </div>
                </>
            )}

            {condicion === 3 && (
                // Nuevo Sueño
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3 text-textBg items-center font-semibold">
                        <img src={iconGB.src} alt="" onClick={() => window.history.back()}
                            style={{ cursor: 'pointer' }} />
                        <p class="">Nuevo Sueño</p>
                    </div>
                    <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                        <p className="text-xl h-5 pb-4 text-white">Nuevo Sueño</p>
                        <div className="container flex-col bg-greyBlack rounded-xl max-h-[24rem] overflow-y-auto custom-scrollbar gap-3 text-center p-5 flex justify-center items-start">
                            <div className="flex flex-col justify-center gap-6">
                                <Input3 DataType="Sueño" inputPlaceholder="Deseo definir mi propósito empresarial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                <TextareaHero DataType="Medición" height="max-h-[5rem]" width="w-[10rem]" widthInput="w-[20rem]" />
                                <Input3 DataType="Modulo" inputPlaceholder="Estrategia y dirección gerencial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                <Input3 DataType="Nivel" inputPlaceholder="SUEÑOS EXPRESS" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                <Boton onClick={openModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {condicion === 4 && (
                // Editar Sueños
                <>
                    <div className='flex flex-col gap-5'>
                        <div className="flex flex-row gap-3 text-textBg items-center font-semibold">
                            <img src={iconGB.src} alt="" onClick={() => window.history.back()}
                                style={{ cursor: 'pointer' }} />
                            <p class="">Editar Sueño</p>
                        </div>
                        <div className="flex flex-row gap-[15rem]">
                            <div className='flex flex-col gap-5'>
                                <p className="text-xl h-5 text-white">Informacion de Sueño</p>
                                <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                    <div className="flex flex-col justify-center items-center gap-6">
                                        <div className="flex flex-row items-center text-start content-center h-[3rem]">
                                            <p className="font-semibold text-textBg w-[10rem]">Sueño</p>
                                            <p className="w-[15rem] text-textBg font-semibold">Deseo definir mi propósito empresarial</p>
                                        </div>
                                        <div className="flex flex-row items-center text-start content-center h-[10rem]">
                                            <p className="font-semibold text-textBg w-[10rem]">Medicion</p>
                                            <div className="max-h-[10rem] overflow-y-auto custom-scrollbar">
                                                <p className="w-[14.5rem] text-textBg font-semibold">Empresario con modelo de Marco filosófico: Propósito superior, propósito empresarial, visión, misión y valores corporativos</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center text-start content-center h-[3rem]">
                                            <p className="font-semibold text-textBg w-[10rem]">Modulo</p>
                                            <div className="w-[15rem] text-textBg font-semibold">Estrategia y dirección gerencial</div>
                                        </div>
                                        <div className="flex flex-row items-center text-start content-center h-[2rem]">
                                            <p className="font-semibold text-textBg w-[10rem]">Nivel</p>
                                            <p className="w-[15rem] text-textBg font-semibold">SUEÑOS EXPRESS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-5'>
                                <p className="text-xl h-5 pb-4 text-white">Editar Sueño</p>
                                <div className="container flex-col bg-greyBlack rounded-xl max-h-[25rem] overflow-y-auto custom-scrollbar gap-3 text-center p-5 flex justify-center items-start">
                                    <div className="flex flex-col justify-center gap-6">
                                        <Input3 DataType="Sueño" inputPlaceholder="Deseo definir mi propósito empresarial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                        <TextareaHero DataType="Medición" height="max-h-[8rem]" width="w-[10rem]" widthInput="w-[15rem]" />
                                        <Input3 DataType="Modulo" inputPlaceholder="Estrategia y dirección gerencial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                        <Input3 DataType="Nivel" inputPlaceholder="SUEÑOS EXPRESS" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                        <Boton onClick={openModal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {condicion === 5 && (
                // Editar Pregunta
                <>
                    <div className='flex flex-col gap-5'>
                        <div className="flex flex-row gap-3 text-textBg items-center font-semibold">
                            <img src={iconGB.src} alt="" onClick={() => window.history.back()}
                                style={{ cursor: 'pointer' }} />
                            <p class="">Editar Pregunta</p>
                        </div>
                        <div className='flex flex-row gap-[15rem]'>
                            <div className="flex flex-col gap-5">
                                <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                    <p className="text-xl h-5 pb-10 text-white">Informacion de Pregunta</p>
                                    <div className="flex flex-col justify-center items-center gap-6">
                                        <div className="flex flex-row items-center text-start content-center h-[4rem]">
                                            <p className="font-semibold text-textBg w-[10rem]">Pregunta</p>
                                            <p className="w-[17rem] text-textBg font-semibold">¿La gerencia utiliza herramientas para la gestión de su tiempo y actividades?</p>
                                        </div>
                                        <div className="flex flex-row items-center text-start content-center h-[4rem]">
                                            <p className="font-semibold text-textBg w-[10rem]">Modulo</p>
                                            <p className="w-[17rem] text-textBg font-semibold">CAPACIDADES GERENCIALES</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                    <p className="text-xl h-5 pb-10 text-white">Editar Pregunta</p>
                                    <div className="flex flex-col justify-center gap-6">
                                        <TextareaHero DataType="Medición" height="max-h-[10rem]" width="w-[10rem]" widthInput="w-[17rem]" />
                                        <Input3 DataType="Modulo" inputPlaceholder="CAPACIDADES GERENCIALES" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[17rem]" additionalClass="" />
                                        <Boton onClick={openModal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {condicion === 6 && (
                // Nueva Pregunta
                <>
                    <div className='flex flex-col gap-5'>
                        <div className="flex flex-row gap-3 text-textBg items-center font-semibold">
                            <img src={iconGB.src} alt="" onClick={() => window.history.back()}
                                style={{ cursor: 'pointer' }} />
                            <p class="">Nueva Pregunta</p>
                        </div>
                        <div className='flex flex-row gap-[15rem]'>
                            <div className='flex flex-row gap-5'>
                                <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                    <p className="text-xl h-5 pb-10 text-white">Editar Pregunta</p>
                                    <div className="flex flex-col justify-center gap-6">
                                        <TextareaHero DataType="Medición" height="max-h-[10rem]" width="w-[10rem]" widthInput="w-[20rem]" />
                                        <Input3 DataType="Modulo" inputPlaceholder="CAPACIDADES GERENCIALES" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                        <Boton onClick={openModal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    );
};

export default ModalComponent;

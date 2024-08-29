import React, { useState } from 'react';
import Input3 from '../inputs/input3/input3.jsx';
import Boton from '../inputs/boton.jsx';
import { TextareaHero } from '../inputs/textarea/TextArea.jsx';
import ConfirmModal from './modalconfirm.jsx';
import iconGB from "./../../images/icons/iconsEditUser/GoBack.png";
import GoBack from '../inputs/goback/goBack.jsx';
import Selectormultiple from '../inputs/selectores/selectormultiple.jsx';


const ModalComponent = ({ condicion }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleForm = (event) => {
        event.preventDefault(); // Evitar el recargo de la página
    };

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleMultiSelectChange = (name, values) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [name]: values,
        }));

        setValues((prevValues) => ({
            ...prevValues,
            [name]: values,
        }));
    };

    const [values, setValues] = useState({
        nom_mod_edit: "",
        preg_mod_edit: "",
        sue_mod_edit: "",
        nom_sue_edit: "",
        medi_sue_edit: "",
        nom_preg_edit: "",
        obj_tall_edit: "",
        alc_tall_edit: "",
        tem_form_edit: "",
        ubi_tall_edit: "",
        new_mod: "",
        new_preg_mod: "",
        new_sue_mod: "",
        new_sue: "",
        new_medi: "",
        new_preg: "",
        new_obj_tall: "",
        new_alc_tall: "",
        new_tem_form: "",
        new_ubi_tall: "",

    });


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleConfirm = () => {
        // Lógica de confirmación
        let filteredValues = {};

        switch (condicion) {
            case 1: // Nuevo Modulo
                filteredValues = {
                    new_mod: values.new_mod,
                    new_preg_mod: values.new_preg_mod,
                    new_sue_mod: values.new_sue_mod,
                };
                break;
            case 2: // Editar Modulo
                filteredValues = {
                    nom_mod_edit: values.nom_mod_edit,
                    preg_mod_edit: values.preg_mod_edit,
                    sue_mod_edit: values.sue_mod_edit,
                };
                break;
            case 3: // Nuevo Sueño
                filteredValues = {
                    new_sue: values.new_sue,
                    new_medi: values.new_medi,
                };
                break;
            case 4: // Editar Sueño
                filteredValues = {
                    nom_sue_edit: values.nom_sue_edit,
                    medi_sue_edit: values.medi_sue_edit,
                };
                break;
            case 5: // Editar Pregunta
                filteredValues = {
                    nom_preg_edit: values.nom_preg_edit,
                };
                break;
            case 6: // Nueva Pregunta
                filteredValues = {
                    new_preg: values.new_preg,
                };
                break;
            case 7: // Editar Taller
                filteredValues = {
                    obj_tall_edit: values.obj_tall_edit,
                    alc_tall_edit: values.alc_tall_edit,
                    tem_form_edit: values.tem_form_edit,
                    ubi_tall_edit: values.ubi_tall_edit,
                };
                break;
            case 8: // Nuevo Taller
                filteredValues = {
                    new_obj_tall: values.new_obj_tall,
                    new_alc_tall: values.new_alc_tall,
                    new_tem_form: values.new_tem_form,
                    new_ubi_tall: values.new_ubi_tall,
                };
                break;
            default:
                break;
        }

        console.log("Filtered inputs:", filteredValues);
        closeModal();
        // location.reload()
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />

            {condicion === 1 && (
                // Nuevo Modulo
                <div className="flex flex-col gap-5">
                    <GoBack text={"Nuevo Modulo"} />
                    <form onSubmit={handleForm} className="flex-col bg-greyBlack rounded-xl gap-3 text-center p-10 flex justify-center items-start">
                        <div className="flex flex-col justify-start gap-6">
                            <Input3 name={"new_mod"} value={values.new_mod} onChange={handleInputChange} DataType="Nombre" inputPlaceholder="Nombre Modulo" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[25rem]" additionalClass="" />
                            <Selectormultiple name={"new_preg_mod"} onChange={(values) => handleMultiSelectChange("new_preg_mod", values)} DataType="Preguntas" height="h-10" width="w-[10rem]" widthInput="w-[25rem]" />
                            <Selectormultiple name={"new_sue_mod"} onChange={(values) => handleMultiSelectChange("new_sue_mod", values)} DataType="Sueños" height="h-10" width="w-[10rem]" widthInput="w-[25rem]" />
                            <Boton onClick={openModal} text={"Confirmar"} />
                        </div>
                    </form>
                </div>
            )}

            {condicion === 2 && (
                // Editar Modulo
                <>
                    <div className='flex flex-col gap-5'>
                        <GoBack text={"Editar Modulo"} />
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
                                <form onSubmit={handleForm} className="flex flex-col justify-center items-center gap-6">
                                    <Input3 value={values.nom_mod_edit} name={"nom_mod_edit"} onChange={handleInputChange} DataType="Nombre" inputPlaceholder="Nombre Modulo" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                    <Selectormultiple name={"preg_mod_edit"} onChange={(values) => handleMultiSelectChange("preg_mod_edit", values)} DataType="Preguntas" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" />
                                    <Selectormultiple name={"sue_mod_edit"} onChange={(values) => handleMultiSelectChange("sue_mod_edit", values)} DataType="Sueños" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" />
                                </form>
                                <Boton onClick={openModal} text={"Confirmar"} />
                            </div>
                        </div>
                    </div>
                </>
            )}

            {condicion === 3 && (
                // Nuevo Sueño
                <div className="flex flex-col gap-3">
                    <GoBack text={"Nuevo Sueño"} />
                    <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                        <div className="container flex-col bg-greyBlack rounded-xl max-h-[24rem] overflow-y-auto custom-scrollbar gap-3 text-center p-5 flex justify-center items-start">
                            <div className="flex flex-col justify-center gap-6">
                                <Input3 name={"new_sue"} value={values.new_sue} onChange={handleInputChange} DataType="Sueño" inputPlaceholder="Deseo definir mi propósito empresarial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                <TextareaHero name={"new_medi"} value={values.new_medi} onChange={handleInputChange} DataType="Medición" height="max-h-[5rem]" width="w-[10rem]" widthInput="w-[20rem]" />
                                <Input3 DataType="Modulo" inputPlaceholder="Estrategia y dirección gerencial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                <Input3 DataType="Nivel" inputPlaceholder="SUEÑOS EXPRESS" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                <Boton onClick={openModal} text={"Confirmar"} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {condicion === 4 && (
                // Editar Sueños
                <>
                    <div className='flex flex-col gap-5'>
                        <GoBack text={"Editar Sueño"} />
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

                            <div className='flex flex-col gap-5 pt-10'>
                                <div className="container flex-col bg-greyBlack rounded-xl max-h-[25rem] overflow-y-auto custom-scrollbar gap-3 text-center p-5 flex justify-center items-start">
                                    <div className="flex flex-col justify-center gap-6">
                                        <Input3 name={"nom_sue_edit"} value={values.nom_sue_edit} onChange={handleInputChange} DataType="Sueño" inputPlaceholder="Deseo definir mi propósito empresarial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                        <TextareaHero name={"medi_sue_edit"} value={values.medi_sue_edit} onChange={handleInputChange} DataType="Medición" height="max-h-[8rem]" width="w-[10rem]" widthInput="w-[15rem]" />
                                        <Input3 DataType="Modulo" inputPlaceholder="Estrategia y dirección gerencial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                        <Input3 DataType="Nivel" inputPlaceholder="SUEÑOS EXPRESS" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                        <Boton onClick={openModal} text={"Confirmar"} />
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
                        <GoBack text={"Editar Pregunta"} />
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
                                    <div className="flex flex-col justify-center gap-6">
                                        <TextareaHero name={"nom_preg_edit"} value={values.nom_preg_edit} onChange={handleInputChange} DataType="Pregunta" height="max-h-[10rem]" width="w-[10rem]" widthInput="w-[17rem]" />
                                        <Input3 DataType="Modulo" inputPlaceholder="CAPACIDADES GERENCIALES" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[17rem]" additionalClass="" />
                                        <Boton onClick={openModal} text={"Confirmar"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {condicion === 6 && (
                // Editar preguntas taller
                <div
                    class="container flex-col bg-greyBlack rounded-xl gap-3 text-start p-5 flex justify-center "
                >
                    <p class="text-xl p-3 text-white">Editar Taller</p>

                    <div class="flex flex-col items-center justify-center gap-4">
                        <Input3 DataType="Modulo" inputPlaceholder="CAPACIDADES GERENCIALES" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Tema o titulo de la formacion" inputPlaceholder="MISE Labs: Maneja tu tiempo y actividades con Trello" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Obgetivo" inputPlaceholder="Desarrollar habilidades practicas para manejo de tiempo y actividades con Trello" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Alcanze de la formacion" inputPlaceholder="Ruta de acompañamiento para la apropiacion de conocimientos" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Contenido" inputPlaceholder="Habilidades gerenciales, Creacion de cuenta de trello, creacion de tablero en trello" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Conferencista y facilitador" inputPlaceholder="Marybel Salazar, Líder CRM Viernes estrategia empresarial" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Fecha" inputPlaceholder="Martes, abril 16,2024" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Horario" inputPlaceholder="2:00pm a 5:00pm" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                        <Input3 DataType="Ubicacion" inputPlaceholder="Cámara de Comercio de Palmira - Calle 28 N° 31-30" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                    </div>
                </div>
            )}

            {condicion === 7 && (
                // Nueva Pregunta
                <>
                    <div className='flex flex-col gap-5'>
                        <div className="flex flex-row gap-3 text-textBg items-center font-semibold">
                            <img src={iconGB} alt="" onClick={() => window.history.back()}
                                style={{ cursor: 'pointer' }} />
                            <p class="">Nueva Pregunta</p>
                        </div>
                        <div className='flex flex-row gap-[15rem]'>
                            <div className='flex flex-row gap-5'>
                                <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                    <div className="flex flex-col justify-center gap-6">
                                        <TextareaHero name={"new_preg"} value={values.new_preg} onChange={handleInputChange} DataType="Pregunta" height="max-h-[10rem]" width="w-[10rem]" widthInput="w-[20rem]" />
                                        <Input3 DataType="Modulo" inputPlaceholder="CAPACIDADES GERENCIALES" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                        <Boton onClick={openModal} text={"Confirmar"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {condicion === 8 && (
                // Editar taller
                <>
                    <div className='flex flex-col gap-5'>
                        <GoBack text={"Editar Taller"} />
                        <div className='flex flex-row gap-[15rem]'>
                            <div className='flex flex-row gap-5'>
                                <div
                                    className="container flex-col bg-greyBlack rounded-xl gap-3 text-start p-5 flex justify-center "
                                >
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className='flex flex-row items-center justify-center gap-8'>
                                            <Input3 DataType="Modulo" inputPlaceholder="CAPACIDADES GERENCIALES" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                                            <Input3 name={"tem_form_edit"} value={values.tem_form_edit} onChange={handleInputChange} DataType="Tema o titulo de la formacion" inputPlaceholder="MISE Labs: Maneja tu tiempo y actividades con Trello" inputType="text" height="h-16" width="w-[15rem]" widthInput="w-[20rem]" additionalClass="" />
                                        </div>
                                        <div className='flex flex-row items-center justify-center gap-8'>
                                            <TextareaHero name={"obj_tall_edit"} value={values.obj_tall_edit} onChange={handleInputChange} DataType="Objetivo" height="max-h-[10rem]" width="w-[12rem]" widthInput="w-[20rem]" />
                                            <TextareaHero name={"alc_tall_edit"} value={values.alc_tall_edit} onChange={handleInputChange} DataType="Alcance de la formacion" height="max-h-[10rem]" width="w-[15rem]" widthInput="w-[20rem]" />
                                        </div>
                                        <div className='flex flex-row items-center justify-center gap-8'>
                                            <Input3 DataType="Fecha" inputPlaceholder="Martes, abril 16,2024" inputType="date" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                                            <Input3 DataType="Horario" inputPlaceholder="2:00pm a 5:00pm" inputType="text" height="h-16" width="w-[15rem]" widthInput="w-[20rem]" additionalClass="" />
                                        </div>
                                        <div className='flex flex-row items-center justify-center gap-[31rem]'>
                                            <Input3 name={"ubi_tall_edit"} value={values.ubi_tall_edit} onChange={handleInputChange} DataType="Ubicacion" inputPlaceholder="Cámara de Comercio de Palmira - Calle 28 N° 31-30" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                                            <Boton onClick={openModal} text={"Confirmar"} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}

            {condicion === 9 && (
                // Nuevo taller
                <>
                    <div className='flex flex-col gap-5'>
                        <GoBack text={"Nuevo Taller"} />
                        <div className='flex flex-row gap-[15rem]'>
                            <div className='flex flex-row gap-5'>
                                <div
                                    className="container flex-col bg-greyBlack rounded-xl gap-3 text-start p-5 flex justify-center "
                                >
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className='flex flex-row items-center justify-center gap-8'>
                                            <Input3 DataType="Modulo" inputPlaceholder="CAPACIDADES GERENCIALES" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                                            <Input3 name={"new_tem_form"} value={values.new_tem_form} onChange={handleInputChange} DataType="Tema o titulo de la formacion" inputPlaceholder="MISE Labs: Maneja tu tiempo y actividades con Trello" inputType="text" height="h-16" width="w-[15rem]" widthInput="w-[20rem]" additionalClass="" />
                                        </div>
                                        <div className='flex flex-row items-center justify-center gap-8'>
                                            <TextareaHero name={"new_obj_tall"} value={values.new_obj_tall} onChange={handleInputChange} DataType="Objetivo" height="max-h-[10rem]" width="w-[12rem]" widthInput="w-[20rem]" />
                                            <TextareaHero name={"new_alc_tall"} value={values.new_alc_tall} onChange={handleInputChange} DataType="Alcance de la formacion" height="max-h-[10rem]" width="w-[15rem]" widthInput="w-[20rem]" />
                                        </div>
                                        <div className='flex flex-row items-center justify-center gap-8'>
                                            <Input3 DataType="Fecha" inputPlaceholder="Martes, abril 16,2024" inputType="date" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                                            <Input3 DataType="Horario" inputPlaceholder="2:00pm a 5:00pm" inputType="text" height="h-16" width="w-[15rem]" widthInput="w-[20rem]" additionalClass="" />
                                        </div>
                                        <div className='flex flex-row items-center justify-center gap-[31rem]'>
                                            <Input3 name={"new_ubi_tall"} value={values.new_ubi_tall} onChange={handleInputChange} DataType="Ubicacion" inputPlaceholder="Cámara de Comercio de Palmira - Calle 28 N° 31-30" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[20rem]" additionalClass="" />
                                            <Boton onClick={openModal} text={"Confirmar"} />
                                        </div>

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

import React, { useState } from 'react';
import Input3 from '../inputs/input3/input3.jsx';
import Boton from '../inputs/boton.jsx';
import { TextareaHero } from '../inputs/textarea/TextArea.jsx';
import ConfirmModal from './modalconfirm.jsx';
import SelectComponent from '../inputs/selectores/selectores.jsx';
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
        mod_sue_edit: "",
        nivel_sue_edit: "",
        nom_preg_edit: "",
        preg_mod_edit: "",
        mod_tall_edit: "",
        obj_tall_edit: "",
        alc_tall_edit: "",
        tem_form_edit: "",
        ubi_tall_edit: "",
        date_tall_edit: "",
        hora_tall_edit: "",
        new_mod: "",
        new_preg_mod: "",
        new_sue_mod: "",
        new_sue: "",
        new_medi: "",
        new_mod_sue: "",
        new_nivel_sue: "",
        new_preg: "",
        new_mod_preg: "",
        new_obj_tall: "",
        new_mod_tall: "",
        new_alc_tall: "",
        new_tem_form: "",
        new_ubi_tall: "",
        new_date_tall: "",
        new_hora_tall: "",

    });

    const modulos_taller = [
        { value: 'Superadmin', label: 'Superadmin' },
        { value: 'Coordinador', label: 'Coordinador' },
        { value: 'Pasante', label: 'Pasante' },
    ];


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
                    new_mod_sue: values.new_mod_sue,
                    new_nivel_sue: values.new_nivel_sue,
                };
                break;
            case 4: // Editar Sueño
                filteredValues = {
                    nom_sue_edit: values.nom_sue_edit,
                    medi_sue_edit: values.medi_sue_edit,
                    mod_sue_edit: values.mod_sue_edit,
                    nivel_sue_edit: values.nivel_sue_edit,
                };
                break;
            case 5: // Editar Pregunta
                filteredValues = {
                    nom_preg_edit: values.nom_preg_edit,
                    preg_mod_edit: values.preg_mod_edit,
                };
                break;
            case 6: // Nueva Pregunta
                filteredValues = {
                    new_preg: values.new_preg,
                    new_mod_preg: values.new_mod_preg,
                };
                break;
            case 7: // Editar Taller
                filteredValues = {
                    mod_tall_edit: values.mod_tall_edit,
                    obj_tall_edit: values.obj_tall_edit,
                    alc_tall_edit: values.alc_tall_edit,
                    tem_form_edit: values.tem_form_edit,
                    ubi_tall_edit: values.ubi_tall_edit,
                    hora_tall_edit: values.hora_tall_edit,
                    date_tall_edit: values.date_tall_edit
                };
                break;
            case 8: // Nuevo Taller
                filteredValues = {
                    new_mod_tall: values.new_mod_tall,
                    new_obj_tall: values.new_obj_tall,
                    new_alc_tall: values.new_alc_tall,
                    new_tem_form: values.new_tem_form,
                    new_ubi_tall: values.new_ubi_tall,
                    new_hora_tall: values.new_hora_tall,
                    new_date_tall: values.new_date_tall
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
                        <div className="container flex-col bg-greyBlack rounded-xl max-h-[26rem] overflow-y-auto custom-scrollbar gap-3 text-center p-5 flex justify-center items-start">
                            <div className="flex flex-col justify-center gap-6">
                                <Input3 name={"new_sue"} value={values.new_sue} onChange={handleInputChange} DataType="Sueño" inputPlaceholder="Deseo definir mi propósito empresarial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[20rem]" additionalClass="" />
                                <TextareaHero name={"new_medi"} value={values.new_medi} onChange={handleInputChange} DataType="Medición" height="max-h-[5rem]" width="w-[10rem]" widthInput="w-[20rem]" />
                                <div className='text-textBg items-center text-start content-center gap-[2.5rem] flex flex-row'>
                                    <div className="w-[12rem]">
                                        <p className="font-semibold">Modulo</p>
                                    </div>
                                    <SelectComponent
                                        name="new_mod_sue"
                                        type="Modulo"
                                        options={modulos_taller}
                                        value={values.new_mod_sue}
                                        onChange={(value) => handleInputChange({ target: { name: 'new_mod_sue', value } })}
                                    />
                                </div>
                                <div className='text-textBg items-center text-start content-center gap-[2.5rem] flex flex-row'>
                                    <div className="w-[12rem]">
                                        <p className="font-semibold">Nivel</p>
                                    </div>
                                    <SelectComponent
                                        name="new_nivel_sue"
                                        type="Nivel"
                                        options={modulos_taller}
                                        value={values.new_nivel_sue}
                                        onChange={(value) => handleInputChange({ target: { name: 'new_nivel_sue', value } })}
                                    />
                                </div>
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
                        <div className="flex flex-row gap-[5rem]">
                            <div className='flex flex-col gap-5'>
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
                                <div className="container flex-col bg-greyBlack rounded-xl max-h-[25rem] overflow-y-auto custom-scrollbar gap-3 text-center p-5 flex justify-center items-start">
                                    <div className="flex flex-col justify-center gap-6">
                                        <Input3 name={"nom_sue_edit"} value={values.nom_sue_edit} onChange={handleInputChange} DataType="Sueño" inputPlaceholder="Deseo definir mi propósito empresarial" inputType="text" height="h-10" width="w-[10rem]" widthInput="w-[15rem]" additionalClass="" />
                                        <TextareaHero name={"medi_sue_edit"} value={values.medi_sue_edit} onChange={handleInputChange} DataType="Medición" height="max-h-[8rem]" width="w-[10rem]" widthInput="w-[15rem]" />
                                        <div className='text-textBg items-center text-start content-center gap-[2.5rem] flex flex-row'>
                                            <div className="w-[13rem]">
                                                <p className="font-semibold">Modulo</p>
                                            </div>
                                            <SelectComponent
                                                name="mod_sue_edit"
                                                type="Modulo"
                                                options={modulos_taller}
                                                value={values.mod_sue_edit}
                                                onChange={(value) => handleInputChange({ target: { name: 'mod_sue_edit', value } })}
                                            />
                                        </div>
                                        <div className='text-textBg items-center text-start content-center gap-[2.5rem] flex flex-row'>
                                            <div className="w-[13rem]">
                                                <p className="font-semibold">Nivel</p>
                                            </div>
                                            <SelectComponent
                                                name="nivel_sue_edit"
                                                type="Nivel"
                                                options={modulos_taller}
                                                value={values.nivel_sue_edit}
                                                onChange={(value) => handleInputChange({ target: { name: 'nivel_sue_edit', value } })}
                                            />
                                        </div>
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
                        <div className='flex flex-row gap-[5rem]'>
                            <div className="flex flex-col gap-5">
                                <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
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
                                        <div className='text-textBg items-center text-start content-center gap-[2.5rem] flex flex-row'>
                                            <div className="w-[12rem]">
                                                <p className="font-semibold">Modulo</p>
                                            </div>
                                            <SelectComponent
                                                name="preg_mod_edit"
                                                type="Modulo"
                                                options={modulos_taller}
                                                value={values.preg_mod_edit}
                                                onChange={(value) => handleInputChange({ target: { name: 'preg_mod_edit', value } })}
                                            />
                                        </div>
                                        <Boton onClick={openModal} text={"Confirmar"} />
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
                        <GoBack text={"Nueva Pregunta"} />
                        <div className='flex flex-row gap-[15rem]'>
                            <div className='flex flex-row gap-5'>
                                <div className="container flex-col bg-greyBlack rounded-xl gap-3 text-center p-5 flex justify-center items-start">
                                    <div className="flex flex-col justify-center gap-6">
                                        <TextareaHero name={"new_preg"} value={values.new_preg} onChange={handleInputChange} DataType="Pregunta" height="max-h-[10rem]" width="w-[10rem]" widthInput="w-[20rem]" />
                                        <div className='text-textBg items-center text-start content-center gap-[6rem] flex flex-row'>
                                            <div className="w-[6rem]">
                                                <p className="font-semibold">Modulo</p>
                                            </div>
                                            <SelectComponent
                                                name="new_mod_preg"
                                                type="Modulo"
                                                options={modulos_taller}
                                                value={values.new_mod_preg}
                                                onChange={(value) => handleInputChange({ target: { name: 'new_mod_preg', value } })}
                                            />
                                        </div>
                                        <Boton onClick={openModal} text={"Confirmar"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {condicion === 7 && (
                // Editar taller
                <div className='flex flex-col gap-5 w-full'>
                    <GoBack text={"Editar Taller"} />
                    <div className='flex flex-row gap-[15rem]'>
                        <div className='flex flex-row gap-5'>
                            <div
                                className="container flex-row bg-greyBlack rounded-xl gap-5 text-center p-5 flex justify-between items-start"
                            >
                                <div className="flex flex-col items-start justify-center gap-5 text-textBg">
                                    <div className='text-textBg items-center text-start content-center gap-[6rem] flex flex-row'>
                                        <div className="w-[12rem]">
                                            <p className="font-semibold">Modulo</p>
                                        </div>
                                        <SelectComponent
                                            name="mod_tall_edit"
                                            type="Modulo"
                                            options={modulos_taller}
                                            value={values.mod_tall_edit}
                                            onChange={(value) => handleInputChange({ target: { name: 'mod_tall_edit', value } })}
                                        />
                                    </div>
                                    <TextareaHero name={"obj_tall_edit"} value={values.obj_tall_edit} onChange={handleInputChange} DataType="Objetivo" height="max-h-[10rem]" width="w-[12rem]" widthInput="w-[15rem]" />
                                    <Input3 name={"date_tall_edit"} value={values.date_tall_edit} onChange={handleInputChange} DataType="Fecha" inputPlaceholder="Martes, abril 16,2024" inputType="date" height="h-16" width="w-[12rem]" widthInput="w-[15rem]" additionalClass="" />
                                    <Input3 name={"ubi_tall_edit"} value={values.ubi_tall_edit} onChange={handleInputChange} DataType="Ubicacion" inputPlaceholder="Cámara de Comercio de Palmira - Calle 28 N° 31-30" inputType="text" height="h-16" width="w-[12rem]" widthInput="w-[15rem]" additionalClass="" />
                                </div>
                                <div className="flex flex-col items-start justify-center gap-5">
                                    <Input3 name={"tem_form_edit"} value={values.tem_form_edit} onChange={handleInputChange} DataType="Tema o titulo de la formacion" inputPlaceholder="MISE Labs: Maneja tu tiempo y actividades con Trello" inputType="text" height="h-16" width="w-[15rem]" widthInput="w-[15rem]" additionalClass="" />
                                    <TextareaHero name={"alc_tall_edit"} value={values.alc_tall_edit} onChange={handleInputChange} DataType="Alcance de la formacion" height="max-h-[10rem]" width="w-[15rem]" widthInput="w-[15rem]" />
                                    <Input3 name={"hora_tall_edit"} value={values.hora_tall_edit} onChange={handleInputChange} DataType="Horario" inputPlaceholder="2:00pm a 5:00pm" inputType="text" height="h-16" width="w-[15rem]" widthInput="w-[15rem]" additionalClass="" />
                                    <div className='py-3'>
                                        <Boton onClick={openModal} text={"Confirmar"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {condicion === 8 && (
                // Nuevo taller
                <>
                    <div className='flex flex-col gap-5 w-full'>
                        <GoBack text={"Nuevo Taller"} />
                        <div className='flex flex-row gap-[15rem]'>
                            <div className='flex flex-row gap-5'>
                                <div
                                    className="container flex-row bg-greyBlack rounded-xl gap-5 text-center p-5 flex justify-between items-start"
                                >
                                    <div className="flex flex-col items-start justify-center gap-5 text-textBg">
                                        <Input3
                                            name={"new_mod_tall"}
                                            value={values.new_mod_tall} // Corregir para usar el nombre correcto en el estado
                                            onChange={handleInputChange}
                                            DataType="Modulo"
                                            inputPlaceholder="hola"
                                            inputType="text"
                                            height="h-16"
                                            width="w-[12rem]"
                                            widthInput="w-[15rem]"
                                            additionalClass=""
                                        />
                                        <TextareaHero
                                            name={"new_obj_tall"} // Corregir nombre del campo
                                            value={values.new_obj_tall} // Usar el nombre correcto en el estado
                                            onChange={handleInputChange}
                                            DataType="Objetivo"
                                            height="max-h-[10rem]"
                                            width="w-[12rem]"
                                            widthInput="w-[15rem]"
                                        />
                                        <Input3
                                            name={"new_date_tall"}
                                            value={values.new_date_tall} // Corregir para usar el nombre correcto en el estado
                                            onChange={handleInputChange}
                                            DataType="Fecha"
                                            inputPlaceholder="Martes, abril 16,2024"
                                            inputType="date"
                                            height="h-16"
                                            width="w-[12rem]"
                                            widthInput="w-[15rem]"
                                            additionalClass=""
                                        />
                                        <Input3
                                            name={"new_ubi_tall"}
                                            value={values.new_ubi_tall} // Asegúrate de que el estado sea consistente
                                            onChange={handleInputChange}
                                            DataType="Ubicacion"
                                            inputPlaceholder="Cámara de Comercio de Palmira - Calle 28 N° 31-30"
                                            inputType="text"
                                            height="h-16"
                                            width="w-[12rem]"
                                            widthInput="w-[15rem]"
                                            additionalClass=""
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-5">
                                        <Input3
                                            name={"new_tem_form"}
                                            value={values.new_tem_form} // Consistencia con el estado
                                            onChange={handleInputChange}
                                            DataType="Tema o titulo de la formacion"
                                            inputPlaceholder="MISE Labs: Maneja tu tiempo y actividades con Trello"
                                            inputType="text"
                                            height="h-16"
                                            width="w-[15rem]"
                                            widthInput="w-[15rem]"
                                            additionalClass=""
                                        />
                                        <TextareaHero
                                            name={"new_alc_tall"}
                                            value={values.new_alc_tall} // Consistencia en el estado
                                            onChange={handleInputChange}
                                            DataType="Alcance de la formacion"
                                            height="max-h-[10rem]"
                                            width="w-[15rem]"
                                            widthInput="w-[15rem]"
                                        />
                                        <Input3
                                            name={"new_hora_tall"}
                                            value={values.new_hora_tall} // Consistencia con el estado
                                            onChange={handleInputChange}
                                            DataType="Horario"
                                            inputPlaceholder="2:00pm a 5:00pm"
                                            inputType="text"
                                            height="h-16"
                                            width="w-[15rem]"
                                            widthInput="w-[15rem]"
                                            additionalClass=""
                                        />
                                        <div className='py-3'>
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

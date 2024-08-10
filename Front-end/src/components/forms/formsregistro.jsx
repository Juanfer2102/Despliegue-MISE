import React, { useState } from "react";
import SelectComponent from "../inputs/selectores.jsx";
import './formsregistro.css';

export const FormRegistro = () => {

    const optionsdocu = [
        { value: 'Cedula de Ciudadania', label: 'Cedula de Ciudadania' },
        { value: 'Cedula de Extranjeria', label: 'Cedula de Extranjeria' },
        { value: 'Permiso Especial de Permanencia', label: 'Permiso Especial de Permanencia' },
    ];

    const optionsgender = [
        { value: 'Masculino', label: 'Masculino' },
        { value: 'Femenino', label: 'Femenino' },
    ];

    const optionscity = [
        { value: 'Palmira', label: 'Palmira' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Pradera', label: 'Pradera' },
        { value: 'Candelaria', label: 'Candelaria' },
    ];

    // Estado para almacenar los valores de los inputs
    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        documento: "",
        ndocumento: "",
        correo: "",
        celular: "",
        genero: "",
        ciudad: "",
        TyC: false,
    });

    // Función para manejar cambios en los inputs y selectores
    const handleInputChange = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        });
    }

    // Función para manejar el envío del formulario
    const handleForm = (event) => {
        event.preventDefault();
        console.log("Inputs value:", values); // Mostrar los valores de los inputs en la consola
    }

    return (
        <>
            <form onSubmit={handleForm} className="form flex flex-col gap-6">
                <div className="flex flex-row w-full gap-5">
                    <input className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white" type="text" value={values.nombre} name="nombre" placeholder="Ingrese su nombre..." autoComplete="off" onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                    <input className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white" type="text" value={values.apellido} name="apellido" placeholder="Ingrese su apellido..." autoComplete="off" onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                </div>
                <div className="flex flex-row w-full gap-5">
                    <SelectComponent Select="documento" options={optionsdocu} value={values.documento} onChange={handleInputChange} />
                    <input className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white" type="number" value={values.ndocumento} name="ndocumento" placeholder="Ingrese su numero de documento..." autoComplete="off" onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                </div>
                <input className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white" type="email" value={values.correo} name="correo" placeholder="Ingrese su correo..." autoComplete="off" onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                <input className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white" type="number" value={values.celular} name="celular" placeholder="Ingrese su numero de celular..." autoComplete="off" onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                <div className="flex flex-row w-full gap-5">
                    <SelectComponent Select="genero" options={optionsgender} value={values.genero} onChange={handleInputChange} />
                    <SelectComponent Select="ciudad" options={optionscity} value={values.ciudad} onChange={handleInputChange} />
                </div>
                <div className="flex h-8 gap-2 items-center justify-start">
                    <input
                        className="border-2 border-solid border-principalGreen h-full w-8"
                        type="checkbox"
                        name="TyC"
                        id="TyC"
                        checked={values.TyC}
                        onChange={(e) => handleInputChange(e.target.name, e.target.checked)}
                    />
                    <p className="text-xl">Acepto términos y condiciones</p>
                </div>
                <div className="flex justify-center pt-8">
                    <button
                        className="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg"
                        type="submit"
                    >
                        Siguiente
                    </button>
                </div>
            </form>
        </>
    );
}

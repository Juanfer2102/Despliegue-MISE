import React, { useState } from 'react';
import SelectComponent from '../../inputs/selectores/selectores';
import './formsautoevaaluacion.css';

export const FormAuto = () => {

    const optionseducacion = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
    ];

    const [values, setValues] = useState({
        estrategia: "",
        operaciones: "",
        marketing: "",
        ventas: "",
        talentoHumano: "",
    });

    const handleInputChange = (name, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log("Inputs value:", values);
        // window.location.href = "/registroEmpresa/registroEmpresa";
    }

    return (
        <div className='bg-greyBlack rounded-2xl w-max h-max p-12 flex flex-col gap-6'>
            <div className="flex flex-row justify-between">
                <p className="font-bold text-3xl text-left">Diagnóstico</p>
            </div>
            <p>
                DE 1 A 10, SIENDO 1 LA CALIFICACIÓN MÁS BAJA Y 10 LA MÁS ALTA,<br />
                CALIFIQUE CÓMO EVALÚA EL DESEMPEÑO DE SU EMPRESA EN LAS<br />
                SIGUIENTES ÁREAS
            </p>
            <form onSubmit={handleForm} className="form rounded-xl p-3 flex flex-col gap-4">
                <div className="flex flex-col gap-3 w-full">
                    <div className='flex flex-row gap-3 items-center px-6'>
                        <p className='text-xl w-full'>Estrategia y Dirección</p>
                        <SelectComponent
                            type={"Calificación..."}
                            Select="estrategia"
                            options={optionseducacion}
                            value={values.estrategia}
                            onChange={(value) => handleInputChange("estrategia", value)}
                        />
                    </div>
                    <div className='flex flex-row gap-3 items-center px-6'>
                        <p className='text-xl w-full'>Operaciones</p>
                        <SelectComponent
                            type={"Calificación..."}
                            Select="operaciones"
                            options={optionseducacion}
                            value={values.operaciones}
                            onChange={(value) => handleInputChange("operaciones", value)}
                        />
                    </div>
                    <div className='flex flex-row gap-3 items-center px-6'>
                        <p className='text-xl w-full'>Marketing</p>
                        <SelectComponent
                            type={"Calificación..."}
                            Select="marketing"
                            options={optionseducacion}
                            value={values.marketing}
                            onChange={(value) => handleInputChange("marketing", value)}
                        />
                    </div>
                    <div className='flex flex-row gap-3 items-center px-6'>
                        <p className='text-xl w-full'>Ventas</p>
                        <SelectComponent
                            type={"Calificación..."}
                            Select="ventas"
                            options={optionseducacion}
                            value={values.ventas}
                            onChange={(value) => handleInputChange("ventas", value)}
                        />
                    </div>
                    <div className='flex flex-row gap-3 items-center px-6'>
                        <p className='text-xl w-full'>Talento Humano</p>
                        <SelectComponent
                            type={"Calificación..."}
                            Select="talentoHumano"
                            options={optionseducacion}
                            value={values.talentoHumano}
                            onChange={(value) => handleInputChange("talentoHumano", value)}
                        />
                    </div>
                    <div className="flex justify-start">
                        <button type='submit' className="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg">
                            Postular
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormAuto;

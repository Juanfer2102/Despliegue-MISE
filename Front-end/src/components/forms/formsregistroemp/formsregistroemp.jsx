import React, { useState, useEffect } from 'react';
import SelectComponent from '../../inputs/selectores/selectores';
import './formsregistroemp.css';

export const FormRegistro = () => {
    const [representanteData, setRepresentanteData] = useState({});
    const [values, setValues] = useState({
        producto: "",
        fecha_inicio: "",
        celular: "",
        razon_social: "",
        nit: "",
        no_empleados: "",
        ventas_añopasado: "",
        gastos_costos: "",
    });

    useEffect(() => {
        // Recuperar datos del representante del almacenamiento local
        const data = JSON.parse(localStorage.getItem('representanteData'));
        setRepresentanteData(data);
    }, []);

    const handleInputChange = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log("Datos del Representante:", representanteData);
        console.log("Datos de la Empresa:", values);
        // Lógica para enviar los datos
    };

    return (
        <>
            <div className="flex flex-row w-[40rem] justify-between">
                <p className="font-bold text-3xl text-left">Registro Empresa</p>
                <svg
                    fill="#ffffff"
                    height="45px"
                    width="45px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-51.2 -51.2 614.40 614.40"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                    onClick={() => window.history.back()}
                    style={{ cursor: 'pointer' }}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path
                                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499 l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933 l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333 S395.776,277.333,384,277.333z"
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <form onSubmit={handleForm} className="form bg-greyBlack rounded-xl p-3 flex flex-col">
                <div className='flex flex-col gap-3'>
                    <input
                        className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                        type="date"
                        value={values.fecha_inicio || ''}
                        name="fecha_inicio"
                        placeholder="Fecha de Inicio de la Empresa"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className='flex flex-row gap-3'>
                    <input
                        className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                        type="text"
                        value={values.producto || ''}
                        name="producto"
                        placeholder="Producto o Servicio..."
                        autoComplete="off"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                    <input
                        className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                        type="number"
                        value={values.celular || ''}
                        name="celular"
                        placeholder="Ingrese su número de celular..."
                        autoComplete="off"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className='flex flex-row gap-3'>
                    <input
                        className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                        type="text"
                        value={values.razon_social || ''}
                        name="razon_social"
                        placeholder="Razón Social de la Empresa..."
                        autoComplete="off"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                    <input
                        className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                        type="number"
                        value={values.nit || ''}
                        name="nit"
                        placeholder="Ingrese el NIT de la empresa"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>

                <input
                    className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                    type="number"
                    value={values.no_empleados || ''}
                    name="no_empleados"
                    placeholder="Ingrese el número de empleados permanentes..."
                    autoComplete="off"
                    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
                <input
                    className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                    type="number"
                    value={values.ventas_añopasado || ''}
                    name="ventas_añopasado"
                    placeholder="Ingrese el total de ventas del año anterior..."
                    autoComplete="off"
                    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
                <input
                    className="h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white"
                    type="number"
                    value={values.gastos_costos || ''}
                    name="gastos_costos"
                    placeholder="Ingrese el total de gastos y costos del año anterior..."
                    autoComplete="off"
                    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
                <div className="flex justify-start">
                    <button type='submit' className="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg">
                        Postular
                    </button>
                </div>
            </form >
        </>
    );
}

export default FormRegistro;

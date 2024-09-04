import React, { useState } from 'react';
import SelectComponent from '../../inputs/selectores/selectores';
import './formsregistroemp.css';
import { DatePicker } from '@tremor/react';
import ConfirmModal from '../../modales/modalconfirm.jsx';
import Boton from '../../inputs/boton.jsx';

export const FormRegistro = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [errors, setErrors] = useState({});

    const [isModalVisible, setIsModalVisible] = useState(false);

    const optionstamaño = [
        { value: 'Microempresa', label: 'Microempresa' },
        { value: 'Pequeña empresa', label: 'Pequeña empresa' },
        { value: 'Mediana empresa', label: 'Mediana empresa' },
        { value: 'Empresa grande', label: 'Empresa grande' },
    ];

    const [values, setValues] = useState({
        producto: '',
        fecha_inicio: '',
        celular: '',
        razon_social: '',
        nit: '',
        no_empleados: '',
        ventas_anopasado: '',
        gastos_costos: '',
        fecha_registro: null,
        tamano_empresa: '',
    });

    const formatCurrency = (value) => {
        const number = parseFloat(value.replace(/[^0-9.-]+/g, ''));
        if (isNaN(number)) return '';
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        }).format(number);
    };


    const handleBlur = (name) => {
        if (name === 'gastos_costos' || name === 'ventas_anopasado') {
            setValues(prevValues => ({
                ...prevValues,
                [name]: formatCurrency(prevValues[name]),
            }));
        }
    };



    const handleInputChange = (name, value) => {
        if (name === "razon_social") {
            // Filtrar caracteres no permitidos para nombre y apellido
            value = value.replace(/[0-9]/g, "");
        }
        if (name === "celular") {
            if (value.length > 10) {
                return; // Evitar que se ingrese más de 10 dígitos
            }
        }
        if (name === "nit") {
            if (value.length > 9) {
                return; // Evitar que se ingrese más de 10 dígitos
            }
        }
        if (name === "ndocumento") {
            if (value.length > 5) {
                return; // Evitar que se ingrese más de 10 dígitos
            }
        }
        if (name === "ventas_anopasado") {
            if (value.length > 10) {
                return; // Evitar que se ingrese más de 10 dígitos
            }
        }
        if (name === "gastos_costos") {
            if (value.length > 10) {
                return; // Evitar que se ingrese más de 10 dígitos
            }
        }
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!values.fecha_inicio) {
            newErrors.fecha_inicio = "Debe ingresar la fecha de inicio de la empresa.";
        }

        if (!values.celular) {
            newErrors.celular = "Debe ingresar un numero de celular.";
        }

        if (!values.razon_social) {
            newErrors.razon_social = "Debe ingresar la razon social de la empresa.";
        }

        if (!values.nit) {
            newErrors.nit = "Debe ingresar el NIT de la empresa.";
        }

        if (!values.no_empleados) {
            newErrors.no_empleados = "Debe ingresar el numero de empleados de la empresa.";
        }
        if (!values.ventas_anopasado) {
            newErrors.ventas_anopasado = "Debe ingresar las ventas del año pasado.";
        }

        if (!values.gastos_costos) {
            newErrors.gastos_costos = "Debe ingresar los gastos o costos del año pasado.";
        }

        if (!values.tamano_empresa) {
            newErrors.tamano_empresa = "Debe seleccionar el tamaño de la empresa.";
        }

        return newErrors;
    }

    const handleConfirm = (event) => {
        event.preventDefault();

        const now = new Date();
        const updatedValues = {
            ...values,
            fecha_registro: now.toLocaleString(),
        };

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            closeModal();
            setIsModalVisible(true);
        } else {
            // Recuperar los datos del postulante desde localStorage
            const postulanteData = JSON.parse(localStorage.getItem('postulanteData'));

            // Si no hay datos de postulante, manejar el error
            if (!postulanteData) {
                console.error('No se encontraron datos del postulante en localStorage');
                return;
            }

            // Preparar los datos de la empresa
            const empresaData = {
                nit: updatedValues.nit,
                nombre_empresa: updatedValues.nombre_empresa,
                celular_empresa: updatedValues.celular_empresa,
                razon_social: updatedValues.razon_social,
                direccion: updatedValues.direccion,
                act_economica: updatedValues.act_economica,
                gerente: updatedValues.gerente,
                producto_servicio: updatedValues.producto_servicio,
                correo_empresa: updatedValues.correo_empresa,
                pagina_web: updatedValues.pagina_web,
                fecha_creacion: updatedValues.fecha_creacion,
                ventas_ult_ano: updatedValues.ventas_ult_ano,
                costos_ult_ano: updatedValues.costos_ult_ano,
                empleados_perm: updatedValues.empleados_perm,
                sector: updatedValues.sector,
                estado: updatedValues.estado,
                id_programa: updatedValues.id_programa,
                fecha_registro: updatedValues.fecha_registro
            };

            // Enviar los datos a la API
            fetch('http://localhost:8000/api/v2/registro-postulante/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postulante: postulanteData,
                    empresa: empresaData,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.id) { // Asumimos que `data` contiene la respuesta del postulante registrado
                        console.log('Registro exitoso:', data);
                        // Limpiar el localStorage si es necesario
                        localStorage.removeItem('postulanteData');

                        // Redirigir a la vista de autoevaluación
                        window.location.href = "/autoevaluacion";
                    } else {
                        console.error('Error en el registro:', data);
                    }
                })
                .catch(error => {
                    console.error('Error al enviar los datos:', error);
                });

            // Actualizar los valores antes de cerrar el modal
            setValues(updatedValues);
            closeModal();
        }
    };

    const closeModalE = () => {
        setIsModalVisible(false);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => setIsOpen(true);

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />

            <div className="flex flex-row w-[45rem] justify-between">
                <p className="font-bold text-3xl text-left">Registro Empresa</p>
                <svg
                    fill="#ffffff"
                    height="45px"
                    width="45px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-51.2 -51.2 614.40 614.40"
                    xml:space="preserve"
                    stroke="#ffffff"
                    onClick={() => window.history.back()}
                    style={{ cursor: 'pointer' }}
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"></g>
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
            <form className="form w-[45rem] flex flex-col gap-6 bg-greyBlack p-3 rounded-xl">
                <div className="flex flex-col gap-6 w-full">
                    <div className='flex flex-row gap-3'>
                        <input
                            className={`h-full w-[41rem] rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white`}
                            type="text"
                            value={values.producto}
                            name="producto"
                            placeholder="Producto o Servicio..."
                            autoComplete="off"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        />

                        <DatePicker
                            name="fecha_inicio"
                            className="mx-auto pt-2 h-[3.5rem] colors:tremor-background-subtle z-10"
                            onValueChange={(value) => {
                                handleInputChange('fecha_inicio', value);
                            }}
                        />
                    </div>
                    <div className='flex flex-row gap-3'>
                        <input
                            className={`h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white`}
                            type="text"
                            value={values.razon_social}
                            name="razon_social"
                            placeholder="Razon Social de la Empresa..."
                            autoComplete="off"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        />

                        <input
                            className={`h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white`}
                            type="number"
                            value={values.celular}
                            name="celular"
                            placeholder="Ingrese su número de celular..."
                            autoComplete="off"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        />
                    </div>
                    <SelectComponent
                        type={"Tamaño de la empresa..."}
                        Select="tamano_empresa"
                        options={optionstamaño}
                        value={values.tamano_empresa || ''}
                        onChange={(value) => handleInputChange("tamano_empresa", value)}
                    />
                    <div className='flex flex-row gap-3'>
                        <input
                            className={`h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white`}
                            type="number"
                            value={values.no_empleados}
                            name="no_empleados"
                            placeholder="Ingrese el numero de empleado permanentes..."
                            autoComplete="off"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        />

                        <input
                            className={`h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white`}
                            type="number"
                            value={values.nit}
                            name="nit"
                            placeholder="Ingrese el NIT de la empresa"
                            autoComplete="off"
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        />
                    </div>
                    <input
                        className={`h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white`}
                        type="text"
                        value={values.ventas_anopasado}
                        name="ventas_anopasado"
                        placeholder="Ingrese el total de ventas del año anterior..."
                        autoComplete="off"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        onBlur={() => handleBlur('ventas_anopasado')}
                    />
                    <input
                        className={`h-[3.5rem] w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white`}
                        type="text"
                        value={values.gastos_costos}
                        name="gastos_costos"
                        placeholder="Ingrese el total de gastos y costos del año anterior..."
                        autoComplete="off"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        onBlur={() => handleBlur('gastos_costos')}
                    />
                    <div className="flex justify-start">
                        <Boton text={"Siguiente"} onClick={openModal} />
                    </div>
                </div>
            </form>

            {/* Modal para mostrar los errores */}
            <div
                className={`fixed top-10 right-0 rounded-l-3xl w-1/3 bg-white shadow-lg transform ${isModalVisible ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-500 ease-in-out`}
            >
                <div className="bg-red rounded-tl-3xl text-white p-4">
                    <h2 className="text-xl font-bold">Error de Registro</h2>
                    <button
                        className="absolute top-2 right-2 text-white"
                        onClick={closeModalE}
                    >
                        X
                    </button>
                </div>
                <div className="p-4">
                    <ul>
                        {Object.values(errors).map((error, index) => (
                            <li key={index} className="text-black">
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FormRegistro;
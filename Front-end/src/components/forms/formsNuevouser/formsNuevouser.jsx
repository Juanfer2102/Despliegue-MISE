import React, { useState } from 'react';
import InputComponent from '../../inputs/input3';
import Boton from '../../inputs/boton.jsx';
import SelectComponent from '../../inputs/selectores.jsx';

export const FormsNuevouser = () => {

    const roles = [
        { value: '1', label: 'Superadmin' },
        { value: '2', label: 'Coordinador' },
        { value: '3', label: 'Postulante' },
    ];

    const programas = [
        { value: 'MISE - Fortalecimiento', label: 'MISE - Fortalecimiento' },
    ];


    const [values, setValues] = useState({
        nombres: "",
        estado: "Activo",
        apellidos: "",
        documento: "",
        correo: "",
        celular: "",
        contrasena: "",
        id_usuario: "",
        id_rol: "1",
        programa: "MISE - Fortalecimiento"
    });

    const handleInputChange = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = async (event) => {
        event.preventDefault();
        console.log("Inputs value:", values); // Mostrar los valores de los inputs en la consola

        try {
            const response = await fetch('http://localhost:8000/api/v2/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Server response:", data); // Mostrar la respuesta del servidor en la consola
                // Aquí puedes agregar lógica para manejar la respuesta positiva, como mostrar un mensaje de éxito
            } else {
                console.error("Error submitting form:", data); // Mostrar errores en la consola
                // Aquí puedes agregar lógica para manejar errores, como mostrar un mensaje de error
            }
        } catch (error) {
            console.error("Network error:", error); // Mostrar errores de red en la consola
        }
    }


    return (
        <form onSubmit={handleForm} className="flex flex-col text-textBg w-full font-semibold gap-5 py-4 overflow-y-visible">
            <div className='flex flex-row gap-5'>
                <div className=' flex flex-col pl-3 font-semibold gap-5 py-4'>
                    <InputComponent
                        width="w-44"
                        widthInput="w-full"
                        DataType="Nombre"
                        inputPlaceholder="Nombre"
                        inputType="text"
                        height="h-12"
                        additionalClass="w-full"
                        name="nombres"
                        value={values.nombres}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}

                    />
                    <InputComponent
                        width="w-44"
                        widthInput="w-full"
                        DataType="Apellido"
                        inputPlaceholder="Apellido"
                        inputType="text"
                        height="h-12"
                        additionalClass="w-full"
                        name="apellidos"
                        value={values.apellidos}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}

                    />
                    <InputComponent
                        width="w-44"
                        widthInput="w-full"
                        DataType="Correo"
                        inputPlaceholder="Correo Electronico"
                        inputType="email"
                        height="h-12"
                        additionalClass=""
                        name="correo"
                        value={values.correo}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}

                    />
                    <SelectComponent Select="id_rol" options={roles} value={values.id_rol} onChange={handleInputChange} />
                </div>

                <div className='flex flex-col pl-3 font-semibold gap-5 py-4'>
                    <InputComponent
                        width="w-44"
                        widthInput="w-full"
                        DataType="Celular"
                        inputPlaceholder="Numero de Celular"
                        inputType="number"
                        height="h-12"
                        additionalClass=""
                        name="celular"
                        value={values.celular}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}

                    />
                    <InputComponent
                        width="w-44"
                        widthInput="w-full"
                        DataType="Documento"
                        inputPlaceholder="Numero Documento"
                        inputType="number"
                        height="h-12"
                        additionalClass=""
                        name="documento"
                        value={values.documento}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}

                    />

                    <InputComponent
                        width="w-44"
                        widthInput="w-full"
                        DataType="Contraseña"
                        inputPlaceholder="*********"
                        inputType="password"
                        height="h-12"
                        additionalClass=""
                        name="contrasena"
                        value={values.contrasena}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}

                    />

                    <InputComponent
                        width="w-44"
                        widthInput="w-full"
                        DataType="Id de Usuario"
                        inputPlaceholder="Id de Usuario"
                        inputType="number"
                        height="h-12"
                        additionalClass=""
                        name="id_usuario"
                        value={values.id_usuario}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}

                    />
                    <SelectComponent Select="programa" options={programas} value={values.programa} onChange={handleInputChange} />
                </div>

            </div>

            <div>
                <button
                    className="bg-principalGreen rounded-md text-white text-center font-semibold cursor-pointer w-[6rem] h-10 p-2"
                    type="submit"
                >
                    <p>Guardar</p>
                </button>
            </div>

        </form>
    );
};

export default FormsNuevouser;


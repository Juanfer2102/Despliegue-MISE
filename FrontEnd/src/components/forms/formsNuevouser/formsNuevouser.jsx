import React, { useState } from 'react';
import InputComponent from '../../inputs/input3/input3.jsx';
import SelectComponent from '../../inputs/selectores/selectores.jsx';
import ConfirmModal from '../../modales/modalconfirm';
import Modalcarga from '../../modales/modalcarga/modalcarga.jsx';

export const FormsNuevouser = () => {

    const roles = [
        { value: '1', label: 'Superadmin' },
        { value: '2', label: 'Coordinador' },
        { value: '3', label: 'Pasante' },
    ];

    const programas = [
        { value: 'MISE - Fortalecimiento', label: 'MISE - Fortalecimiento' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    const [values, setValues] = useState({
        nombres: "",
        estado: "Activo",
        apellidos: "",
        documento: "",
        correo: "",
        celular: "",
        contrasena: "",
        id_rol: "",
        programa: ""
    });

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => setIsOpen(true);

    const handleInputChange = (name, value) => {
        // Validaciones de campo específicas
        let error = "";

        if (name === "nombres" || name === "apellidos") {
            if (/[^a-zA-Z\s]/.test(value)) {
                error = "No se permiten números ni caracteres especiales";
            }
        }

        if (name === "celular") {
            if (value.length > 10) {
                return; // Evitar que se ingrese más de 10 dígitos
            }
            if (!/^\d*$/.test(value)) {
                error = "Solo se permiten números";
            }

            else if (value.length < 10) {
                error = "Debe tener minimo 10 dígitos";
            }
        }

         if (name === "documento") {
            if (value.length > 10) {
                return; // Evitar que se ingrese más de 10 dígitos
            }
            if (!/^\d*$/.test(value)) {
                error = "Solo se permiten números";
            }

            else if (value.length < 7) {
                error = "Debe tener minimo 7 dígitos";
            }
        }
/*
        if (name === "contrasena") {
            if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
                error = "Debe contener al menos una mayúscula, un número y un carácter especial";
            }
        }
*/
        setValues({
            ...values,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    // Función para verificar si algún campo está vacío o tiene errores
    const isFormValid = () => {
        return (
            Object.values(values).every(value => value !== "") &&
            Object.values(errors).every(error => error === "")
        );
    };

    const handleForm = async (event) => {
        event.preventDefault();
        console.log("Inputs value:", values); // Mostrar los valores de los inputs en la consola
        closeModal();
        openSuccessModal();
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

    const openSuccessModal = () => {
        setIsSuccessModalVisible(true);
        setTimeout(() => {
            setIsSuccessModalVisible(false);
            location.reload();
        }, 1000); // 5 segundos
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleForm} />
            <form className="flex flex-col text-textBg w-full font-semibold gap-5 py-4 overflow-y-visible">
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
                        {errors.nombres && <p className="text-red">{errors.nombres}</p>}
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
                        {errors.apellidos && <p className="text-red">{errors.apellidos}</p>}
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
                        <div className={`text-textBg items-center text-start content-center flex flex-row`}>
                            <div className="w-[11rem]">
                                <p className="font-semibold">Rol</p>
                            </div>
                            <div className='w-[12.8rem]'>
                                <SelectComponent name="id_rol" type="Rol..." options={roles} value={values.id_rol} onChange={(value) => handleInputChange("id_rol", value)} />
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={openModal}
                                className={`rounded-md text-white text-center font-semibold w-[6rem] h-10 p-2 ${isFormValid() ? 'bg-principalGreen opacity-100 cursor-pointer' : 'bg-principalGreen opacity-50 cursor-not-allowed'}`}
                                type="button"
                                disabled={!isFormValid()}
                            >
                                <p>Guardar</p>
                            </button>
                        </div>
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
                        {errors.celular && <p className="text-red">{errors.celular}</p>}
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
                        {errors.documento && <p className="text-red">{errors.documento}</p>}
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
                        {errors.contrasena && <p className="text-red">{errors.contrasena}</p>}
                        <div className={`text-textBg items-center text-start content-center flex flex-row`}>
                            <div className="w-[11rem]">
                                <p className="font-semibold">MISE</p>
                            </div>
                            <div className='w-[12.8rem]'>
                                <SelectComponent name="programa" type="Programa..." options={programas} value={values.programa} onChange={(value) => handleInputChange("programa", value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {/* Modal de éxito */}
            {isSuccessModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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

export default FormsNuevouser;

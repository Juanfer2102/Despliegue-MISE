import React, { useState } from "react";
import './formslogin.css';

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        correo: "",
        contraseña: "",
    });
    const [errors, setErrors] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const validateForm = () => {
        const newErrors = {};

        if (!values.correo) {
            newErrors.correo = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
            newErrors.correo = "El correo electrónico no es válido.";
        }

        if (!values.contraseña) {
            newErrors.contraseña = "La contraseña es obligatoria.";
        } else {
            if (values.contraseña.length < 6) {
                newErrors.contraseña = "La contraseña debe tener al menos 6 caracteres.";
            }
            if (!/[A-Z]/.test(values.contraseña)) {
                newErrors.contraseña = "La contraseña debe contener al menos una letra mayúscula.";
            }
            if (!/\d/.test(values.contraseña)) {
                newErrors.contraseña = "La contraseña debe contener al menos un número.";
            }
            if (!/[!@#$%^&*]/.test(values.contraseña)) {
                newErrors.contraseña = "La contraseña debe contener al menos un carácter especial.";
            }
        }

        return newErrors;
    }

    const handleForm = (event) => {
        event.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsModalVisible(true);
        } else {
            console.log("Inputs value:", values);
            // Redirige a la URL deseada si todo es válido
            // window.location.href = "/empresasRegistradas/empresasRegistradas";
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    }

    return (
        <>
            <form onSubmit={handleForm} className="form flex flex-col gap-6">
                <input 
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border ${errors.correo ? 'border-red-500' : 'border-white'}`} 
                    type="email" 
                    value={values.correo} 
                    name="correo" 
                    placeholder="Ingrese su correo..." 
                    autoComplete="off" 
                    onChange={handleInputChange} 
                />

                <input 
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border ${errors.contraseña ? 'border-red-500' : 'border-white'}`} 
                    type={showPassword ? "text" : "password"} 
                    value={values.contraseña} 
                    name="contraseña" 
                    placeholder="Ingrese su contraseña..." 
                    onChange={handleInputChange} 
                />

                <div className="flex h-8 gap-2 items-center justify-center">
                    <input
                        className="border border-solid checked:bg-principalGreen border-principalGreen h-full w-8"
                        type="checkbox"
                        name="showpassword"
                        id="3"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                    />
                    <p className="text-xl">Mostrar contraseña</p>
                </div>

                <div className="flex justify-center">
                    <button
                        id="login-button"
                        className="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg"
                        type="submit"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>

            {/* Modal para mostrar los errores */}
            <div
                className={`modal-container ${isModalVisible ? 'show' : ''}`}
            >
                <div className="modal-header">
                    <h2 className="text-xl font-bold">Errores de validación</h2>
                    <button
                        className="close-button"
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>
                <div className="modal-body">
                    <ul>
                        {Object.values(errors).map((error, index) => (
                            <li key={index} className="text-red">
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Form;

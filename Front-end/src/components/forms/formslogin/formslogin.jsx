import React, { useState } from "react";
import './formslogin.css';
import ModalLogIn from '../../modales/modalis.jsx'; 

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        correo: "",
        contrasena: "",
    });
    
    const [errors, setErrors] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalisVisible, setIsModalIsVisible] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!values.correo) {
            newErrors.correo = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
            newErrors.correo = "El correo electrónico no es válido.";
        }

        if (!values.contrasena) {
            newErrors.contrasena = "La contraseña es obligatoria.";
        } else {
            if (values.contrasena.length < 6) {
                newErrors.contrasena = "La contraseña debe tener al menos 6 caracteres.";
            }
        }

        return newErrors;
    };

    const handleForm = async(event) => {
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

         try {
            const response = await fetch("http://localhost:8000/api/v2/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
    
            const data = await response.json();
            
            if (response.ok) {
                setIsModalIsVisible(true);
                console.log("Login con éxito:", data);
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("refresh_token", data.refresh_token);
                // Redirigir o cargar datos del usuario
            } else {
                console.log("Error al iniciar sesión:", data);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const closeModalis = () => {
        setIsModalIsVisible(false);
    };

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
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border ${errors.contrasena ? 'border-red-500' : 'border-white'}`} 
                    type={showPassword ? "text" : "password"} 
                    value={values.contrasena} 
                    name="contrasena" 
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
            <ModalLogIn 
                isOpen={isModalisVisible} 
                onConfirm={closeModalis} 
            />
        </>
    );
};

export default Form;

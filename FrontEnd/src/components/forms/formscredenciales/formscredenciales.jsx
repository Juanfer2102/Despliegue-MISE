import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './formscredenciales.css';
import ModalInformativo from '../../modales/modalexito';

const Formscredenciales = () => {
    const { uid, token } = useParams();
    const [errors, setErrors] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [values, setValues] = useState({
        contrasena: "",
        confirmcontrasena: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Solo verificar que la contraseña tenga más de 8 caracteres
        if (values.contrasena.length <= 8) {
            newErrors.contrasena = "La contraseña debe tener más de 8 caracteres.";
        }

        if (values.contrasena !== values.confirmcontrasena) {
            newErrors.confirmcontrasena = "Las contraseñas no coinciden.";
        }

        return newErrors;
    };

    const handleForm = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsModalVisible(true);
        } else {
            try {
                const response = await fetch('https://despliegue-mise.onrender.com/api/v2/set-password/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        uid: uid,
                        token: token,
                        new_password: values.contrasena,
                        confirm_password: values.confirmcontrasena,
                    }),
                });

                if (response.ok) {
                    setSuccessMessage("Contraseña cambiada exitosamente.");
                    setValues({ contrasena: "", confirmcontrasena: "" });
                } else {
                    const errorData = await response.json();
                    setErrors(errorData);

                    if (errorData.error && errorData.error.token) {
                        alert('El token es inválido o ha expirado. Redirigiendo...');
                        window.location.href = '/expiracion';
                    } else {
                        setIsModalVisible(true);
                    }
                }
            } catch (error) {
                console.error("Error al cambiar la contraseña:", error);
            }
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <form onSubmit={handleForm} className="form flex flex-col gap-2 ">
                <p className="text-left w-full">Nueva contraseña</p>
                <input
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border`}
                    type="password"
                    value={values.contrasena}
                    name="contrasena"
                    placeholder="Ingrese su nueva contraseña"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <p className="text-left w-full">Confirma contraseña</p>
                <input
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border`}
                    type="password"
                    value={values.confirmcontrasena}
                    name="confirmcontrasena"
                    placeholder="Confirme su contraseña"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <div>
                    <div className="flex justify-center">
                        <button
                            className="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg hover:bg-white hover:text-principalGreen"
                        >
                            Enviar
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <p className="text-xl text-center w-full">Cancelar</p>
                    </div>
                </div>
            </form>

            {/* Modal para mostrar los errores */}
            {isModalVisible && (
                <div className={`modal-container show`}>
                    <div className="modal-header">
                        <h2 className="text-xl font-bold">Errores de validación</h2>
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index} className="text-red">{error}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {successMessage && (
                <ModalInformativo
                    mensaje={successMessage}
                    onClose={() => {
                        window.location.href = '/login';
                    }}
                />
            )}
        </>
    );
};

export default Formscredenciales;

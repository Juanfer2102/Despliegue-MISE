import React, { useState } from 'react';
import './formscredenciales.css';

/**
 * Componente `Formscredenciales` para la gestión de credenciales de usuario, 
 * permitiendo cambiar la contraseña y validar el formulario.
 * 
 * @returns {JSX.Element} El componente `Formscredenciales`.
 */
const Formscredenciales = () => {
    const [errors, setErrors] = useState({}); // Estado para almacenar errores de validación
    const [isModalVisible, setIsModalVisible] = useState(false); // Estado para mostrar el modal de errores

    // Hook para definir los valores iniciales del formulario
    const [values, setValues] = useState({
        contrasena: "",
        confirmcontrasena: "",
    });

    /**
     * Valida el formulario de credenciales.
     * 
     * @returns {Object} Un objeto con los errores de validación.
     */
    const validateForm = () => {
        const newErrors = {};

        if (!values.contrasena) {
            newErrors.contrasena = "La contraseña es obligatoria.";
        }

        // Verificar que las contraseñas coincidan
        if (values.contrasena !== values.confirmcontrasena) {
            newErrors.confirmcontrasena = "Las contraseñas no coinciden.";
        }

        return newErrors;
    };

    /**
     * Maneja el cambio de valor de los campos del formulario.
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} event - El evento de cambio del campo.
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    /**
     * Maneja el envío del formulario.
     * 
     * @param {React.FormEvent} event - El evento de envío del formulario.
     */
    const handleForm = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Establece los errores de validación
            setIsModalVisible(true); // Muestra el modal de errores
        } else {
            console.log("Inputs value:", values);
            // Redirige a la URL deseada si todo es válido
            window.location.href = "/olvidasteContraseña/reescribirContraseña";
        }
    };

    /**
     * Cierra el modal de errores.
     */
    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <form onSubmit={handleForm} className="form flex flex-col gap-2">
                <p className="text-left w-full">Nueva contraseña</p>
                <input
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border`}
                    type="password"
                    value={values.contrasena}
                    name="contrasena"
                    placeholder="Ingrese su nueva contraseña..."
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <p className="text-left w-full">Confirma contraseña</p>
                <input
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border`}
                    type="password"
                    value={values.confirmcontrasena}
                    name="confirmcontrasena"
                    placeholder="Confirme su contraseña..."
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

export default Formscredenciales;

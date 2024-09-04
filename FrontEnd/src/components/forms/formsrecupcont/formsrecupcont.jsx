import React, { useState } from 'react';
import './formsrecupcont.css';

const Formsrecupcont = () => {
    const [errors, setErrors] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!values.correo) {
            newErrors.correo = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
            newErrors.correo = "El correo electrónico no es válido.";
        }
        return newErrors;
    };

    const [values, setValues] = useState({
        correo: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsModalVisible(true);
        } else {
            try {
                const response = await fetch('http://localhost:8000/api/v2/olvidaste-contraseña/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ correo: values.correo }),
                });

                if (response.ok) {
                    setTimeout(() => {
                        window.location.href = "/olvidasteContraseña/reescribirContraseña";
                    }, 2000); // Redirige después de 2 segundos
                } else {
                    const data = await response.json();
                    setErrors(data);
                    setIsModalVisible(true);
                }
            } catch (error) {
                console.error('Error:', error);
                setErrors({ server: 'Hubo un error al enviar la solicitud.' });
                setIsModalVisible(true);
            }
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <form onSubmit={handleForm} className="form flex flex-col">
                <p className="text-left w-full pb-2">Correo electrónico</p>
                <input
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border`}
                    type="email"
                    value={values.correo}
                    name="correo"
                    placeholder="Ingrese su correo..."
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <div>
                    <div className="flex justify-center mt-10">
                        <button
                            type='submit' className="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg hover:bg-white hover:text-principalGreen"
                        >
                            Pedir enlace para restablecer contraseña
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <a onClick={() => window.history.back()} className="text-xl text-center w-full cursor-pointer">Cancelar</a>
                    </div>
                </div>
            </form>

            {/* Modal para mostrar los errores */}
            <div className={`modal-container ${isModalVisible ? 'show' : ''}`}>
                <div className="modal-header">
                    <h2 className="text-xl font-bold">Errores de validación</h2>
                    <button className="close-button" onClick={closeModal}>X</button>
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

export default Formsrecupcont;

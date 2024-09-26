import React, { useState } from 'react';
import './formsrecupcont.css'; // Importa el archivo de estilos CSS para el componente

const Formsrecupcont = () => {
    // Estado para almacenar errores de validación
    const [errors, setErrors] = useState({});
    // Estado para controlar la visibilidad del modal de errores
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Función para validar el formulario
    const validateForm = () => {
        const newErrors = {};
        // Validación del campo de correo electrónico
        if (!values.correo) {
            newErrors.correo = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
            newErrors.correo = "El correo electrónico no es válido.";
        }
        return newErrors;
    };

    // Estado para almacenar los valores del formulario
    const [values, setValues] = useState({
        correo: "",
    });

    // Función para manejar los cambios en los inputs del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const handleForm = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm(); // Valida el formulario
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Establece los errores en el estado
            setIsModalVisible(true); // Muestra el modal de errores
        } else {
            try {
                // Envía los datos del formulario al servidor
                const response = await fetch('http://localhost:8000/api/v2/olvidaste-contraseña/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ correo: values.correo }),
                });

                if (response.ok) {
                    // Redirige a la página de restablecimiento de contraseña después de 2 segundos
                    setTimeout(() => {
                        window.location.href = "/olvidasteContraseña/reescribirContraseña";
                    }, 2000);
                } else {
                    const data = await response.json();
                    setErrors(data); // Establece los errores en el estado
                    setIsModalVisible(true); // Muestra el modal de errores
                }
            } catch (error) {
                console.error('Error:', error); // Manejo de errores en consola
                setErrors({ server: 'Hubo un error al enviar la solicitud.' });
                setIsModalVisible(true); // Muestra el modal de errores
            }
        }
    };

    // Función para cerrar el modal de errores
    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="w-full p-4">
            {/* Formulario de recuperación de contraseña */}
            <form onSubmit={handleForm} className="form flex flex-col space-y-6">
                <div>
                    {/* Campo de entrada para el correo electrónico */}
                    <label htmlFor="correo" className="block text-left w-full pb-2 text-sm font-medium text-white">
                        Correo electrónico
                    </label>
                    <input
                        id="correo"
                        className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-3 sm:p-4 font-sans text-sm sm:text-base font-normal outline-none transition-all placeholder-shown:border focus:border-principalGreen"
                        type="email"
                        value={values.correo}
                        name="correo"
                        placeholder="Ingrese su correo..."
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-4">
                    {/* Botón para enviar el formulario */}
                    <button
                        type='submit'
                        className="w-full bg-principalGreen px-4 py-2 font-bold text-lg sm:text-xl rounded-lg hover:bg-white hover:text-principalGreen transition-colors duration-300"
                    >
                        Pedir enlace para restablecer contraseña
                    </button>
                    {/* Botón para cancelar */}
                    <button
                        onClick={() => window.history.back()}
                        className="w-full text-white text-base sm:text-lg hover:underline cursor-pointer"
                        type="button"
                    >
                        Cancelar
                    </button>
                </div>
            </form>

            {/* Modal para mostrar los errores de validación */}
            {isModalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Errores de validación</h2>
                            <button 
                                className="text-gray-600 hover:text-gray-800"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                            {Object.values(errors).map((error, index) => (
                                <li key={index} className="text-red-500">
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Formsrecupcont;

import React, {useState} from 'react'
import './formscredenciales.css'

const Formscredenciales = () => {

    const [errors, setErrors] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!values.contrasena) {
            newErrors.contrasena = "La contraseña es obligatoria.";
        }

        return newErrors;
    };

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

    const handleForm = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsModalVisible(true);
        } else {
            console.log("Inputs value:", values);
            // Redirige a la URL deseada si todo es válido
            window.location.href = "/olvidasteContraseña/reescribirContraseña";
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <form onSubmit={handleForm} class="form flex flex-col gap-2 ">
                <p class="text-left w-full">Nueva contraseña</p>
                <input
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border`}
                    type="password"
                    value={values.contrasena}
                    name="contrasena"
                    placeholder="Ingrese su nueva contraseña..."
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <p class="text-left w-full ">Confirma contraseña</p>
                <input
                    className={`h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border`}
                    type="password"
                    value={values.confirmcontrasena}
                    name="confirmcontrasena"
                    placeholder="Confirme su contraseña..."
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                ></path>
                <path d="M3 7l9 6l9 -6"></path>


                <div>
                    <div class="flex justify-center">
                        <button
                            class="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg hover:bg-white hover:text-principalGreen"
                        >
                            Enviar
                        </button>
                    </div>
                    <div class="flex items-center justify-center mt-8">
                        <p class="text-xl text-center w-full">Cancelar</p>
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
    )
}

export default Formscredenciales;
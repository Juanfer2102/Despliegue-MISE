// ModalLogIn.jsx
import React from 'react';

/**
 * Componente de Modal que muestra un mensaje de bienvenida tras un inicio de sesión exitoso.
 *
 * @param {Object} props - Props del componente.
 * @param {boolean} props.isOpen - Estado que determina si el modal está abierto o cerrado.
 * @param {Function} props.onConfirm - Función para ejecutar al confirmar (generalmente para cerrar el modal).
 * @param {string} props.nombre - Nombre del usuario que se muestra en el mensaje de bienvenida.
 *
 * @returns {JSX.Element | null} - Un modal que muestra un mensaje de bienvenida, o `null` si el modal está cerrado.
 */
const ModalLogIn = ({ isOpen, onConfirm, nombre }) => {
    // Si el modal no está abierto, no renderiza nada
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col gap-2">
                <h2 className="text-xl font-bold text-black">¡Inicio de Sesión Exitoso!</h2>
                <p className='text-textBg'>Bienvenido, {nombre}</p>  {/* Aquí se muestra el nombre */}
                <div className="flex justify-around gap-5">
                    <button
                        className="px-4 py-2 bg-principalGreen text-white rounded-lg"
                        onClick={onConfirm}
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalLogIn;

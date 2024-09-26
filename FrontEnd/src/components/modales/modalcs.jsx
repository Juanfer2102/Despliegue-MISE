// ModalLogout.jsx
import React from 'react';

/**
 * Componente de Modal de Cierre de Sesión que solicita confirmación antes de cerrar sesión.
 *
 * @param {Object} props - Props del componente.
 * @param {boolean} props.isOpen - Estado que determina si el modal está abierto o cerrado.
 * @param {Function} props.onClose - Función para cerrar el modal.
 * @param {Function} props.onConfirm - Función para confirmar el cierre de sesión.
 *
 * @returns {JSX.Element | null} - Un modal que solicita confirmación para cerrar sesión, o `null` si el modal está cerrado.
 */
const ModalLogout = ({ isOpen, onClose, onConfirm }) => {
    // Si el modal no está abierto, no renderiza nada
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold text-black">¿Cerrar Sesión?</h2>
                <p className="text-black mb-4">Solo queremos estar seguros...</p>
                <div className="flex justify-around gap-5">
                    {/* Botón para cancelar el cierre de sesión */}
                    <button
                        className="px-4 py-2 border border-black text-black rounded-lg bg-transparent"
                        onClick={onClose}
                    >
                        No, cancelar
                    </button>
                    {/* Botón para confirmar el cierre de sesión */}
                    <button
                        className="px-4 py-2 bg-principalGreen text-white rounded-lg"
                        onClick={onConfirm}
                    >
                        Sí, Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalLogout;

import React from 'react';

/**
 * Componente de Modal de Confirmación que muestra un mensaje para confirmar una acción.
 *
 * @param {Object} props - Props del componente.
 * @param {boolean} props.isOpen - Estado que determina si el modal está abierto o cerrado.
 * @param {Function} props.closeModal - Función para cerrar el modal.
 * @param {Function} props.handleConfirm - Función para manejar la acción de confirmación.
 *
 * @returns {JSX.Element} - Un modal que solicita confirmación para una acción.
 */
const ConfirmModal = ({ isOpen, closeModal, handleConfirm }) => {

    // Función para abrir el modal (esta función no se usa actualmente en el componente)
    const openModal = () => setIsOpen(true);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-xl font-semibold text-black">¿Quieres hacer esto?</p>
                        <p className="text-black mt-2">Solo queremos estar seguros...</p>
                        <div className="flex justify-center gap-4 mt-6">
                            {/* Botón para cancelar la acción */}
                            <button onClick={closeModal} className="px-4 py-2 text-black border bg-transparent border-black rounded-md">
                                No, cancelar
                            </button>
                            {/* Botón para confirmar la acción */}
                            <button type="submit" onClick={handleConfirm} className="px-4 py-2 bg-principalGreen text-white rounded-md">
                                Sí, Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmModal;

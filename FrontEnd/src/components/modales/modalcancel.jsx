import React from 'react';

/**
 * Componente de Modal de Cancelación que muestra un mensaje de confirmación para una acción.
 *
 * @param {Object} props - Props del componente.
 * @param {boolean} props.isCOpen - Estado que determina si el modal está abierto o cerrado.
 * @param {Function} props.closeCModal - Función para cerrar el modal.
 * @param {Function} props.handleCancel - Función para manejar la acción de confirmación.
 *
 * @returns {JSX.Element} - Un modal que solicita confirmación para una acción.
 */
const CancelModal = ({ isCOpen, closeCModal, handleCancel }) => {

    // Función para abrir el modal (esta función no se usa actualmente en el componente)
    const openCModal = () => setIsCOpen(true);

    return (
        <>
            {isCOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-xl font-semibold text-black">¿Quieres hacer esto?</p>
                        <p className="text-black mt-2">Solo queremos estar seguros...</p>
                        <div className="flex justify-center gap-4 mt-6">
                            {/* Botón para cancelar la acción */}
                            <button onClick={closeCModal} className="px-4 py-2 text-black border bg-transparent border-black rounded-md">
                                No, cancelar
                            </button>
                            {/* Botón para confirmar la acción */}
                            <button type="submit" onClick={handleCancel} className="px-4 py-2 bg-principalGreen text-white rounded-md">
                                Sí, Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CancelModal;

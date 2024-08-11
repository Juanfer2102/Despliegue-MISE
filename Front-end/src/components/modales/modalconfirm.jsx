import React, { useState } from 'react';

const ConfirmModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleConfirm = () => {
        // Lógica de confirmación
        closeModal();
    };

    return (
        <div>
            {/* <button onClick={openModal} className="p-2 bg-blue-500 text-white rounded-md">
                Abrir Modal
            </button> */}

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-xl font-semibold">¿Quieres hacer esto?</p>
                        <p className="text-black mt-2">Solo queremos estar seguros...</p>
                        <div className="flex justify-center gap-4 mt-6">
                            <button onClick={closeModal} className="px-4 py-2 border bg-transparent border-black rounded-md">
                                No, cancelar
                            </button>
                            <button onClick={handleConfirm} className="px-4 py-2 bg-principalGreen text-white rounded-md">
                                Sí, Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConfirmModal;

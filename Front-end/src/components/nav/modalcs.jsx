// ModalLogout.jsx
import React from 'react';

const ModalLogout = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold text-black">¿Cerrar Sesión?</h2>
                <p className="text-black mb-4">Solo queremos estar seguros...</p>
                <div className="flex justify-around gap-5">
                    <button
                        className="px-4 py-2 border border-black text-black rounded-lg bg-transparent"
                        onClick={onClose}
                    >
                        No, cancelar
                    </button>
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

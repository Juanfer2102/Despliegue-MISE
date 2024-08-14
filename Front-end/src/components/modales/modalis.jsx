// ModalLogIn.jsx
import React from 'react';

const ModalLogIn = ({ isOpen, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold text-black">¡Inicio de Sesion Exitoso!</h2>
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

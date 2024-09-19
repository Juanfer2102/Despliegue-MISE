import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModulosView = ({ modulos, onCreateOrUpdateModulo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModulo, setCurrentModulo] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');

    const openModal = (modulo) => {
        setCurrentModulo(modulo);
        setNuevoNombre(modulo ? modulo.nombre : '');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentModulo(null);
        setNuevoNombre('');
    };

    const handleChange = (e) => {
        setNuevoNombre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateOrUpdateModulo({ id_modulo: currentModulo ? currentModulo.id_modulo : null, nombre: nuevoNombre });
        closeModal();
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-2">
                <div
                    className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                    onClick={() => openModal(null)}
                >
                    <p className="text-lg font-bold">Crear Nuevo Módulo</p>
                </div>
                {modulos.map((modulo) => (
                    <div
                        key={modulo.id_modulo}
                        className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                        onClick={() => openModal(modulo)}
                    >
                        <p className="text-lg">{modulo.nombre}</p>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
                        <h3 className="text-xl font-bold mb-4">
                            {currentModulo ? 'Editar Módulo' : 'Crear Nuevo Módulo'}
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-white">Nombre</label>
                                <input
                                    type="text"
                                    value={nuevoNombre}
                                    onChange={handleChange}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    {currentModulo ? 'Actualizar Módulo' : 'Crear Módulo'}
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

ModulosView.propTypes = {
    modulos: PropTypes.array.isRequired,
    onCreateOrUpdateModulo: PropTypes.func.isRequired
};

export default ModulosView;

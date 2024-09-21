import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModulosView = ({ modulos, onCreateOrUpdateModulo }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentModulo, setCurrentModulo] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [preguntas, setPreguntas] = useState(['']);

    // Función para abrir el modal de creación de módulo
    const openCreateModal = () => {
        setCurrentModulo(null);
        setNuevoNombre('');
        setPreguntas(['']);
        setIsCreateModalOpen(true);
    };

    // Función para abrir el modal de edición de nombre
    const openEditModal = (modulo) => {
        setCurrentModulo(modulo);
        setNuevoNombre(modulo.nombre);
        setIsEditModalOpen(true);
    };

    // Función para cerrar ambos modales
    const closeModals = () => {
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
        setCurrentModulo(null);
    };

    const handleChangeNombre = (e) => {
        setNuevoNombre(e.target.value);
    };

    const handleChangePregunta = (index, value) => {
        const updatedPreguntas = [...preguntas];
        updatedPreguntas[index] = value;
        setPreguntas(updatedPreguntas);
    };

    const handleAddPregunta = () => {
        setPreguntas([...preguntas, '']);
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        const preguntasData = preguntas.map(descripcion => ({ descripcion }));
        onCreateOrUpdateModulo({
            id_modulo: null,
            nombre: nuevoNombre,
            preguntas: preguntasData
        });
        closeModals();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onCreateOrUpdateModulo({
            id_modulo: currentModulo.id_modulo,
            nombre: nuevoNombre
        });
        closeModals();
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-2">
                <div
                    className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                    onClick={openCreateModal}
                >
                    <p className="text-lg font-bold">Crear Nuevo Módulo</p>
                </div>
                {modulos.map((modulo) => (
                    <div
                        key={modulo.id_modulo}
                        className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                        onClick={() => openEditModal(modulo)}
                    >
                        <p className="text-lg">{modulo.nombre}</p>
                    </div>
                ))}
            </div>

            {/* Modal para crear módulo */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
                        <h3 className="text-xl font-bold mb-4">Crear Nuevo Módulo</h3>
                        <form onSubmit={handleCreateSubmit}>
                            <div className="mb-4">
                                <label className="block text-white">Nombre</label>
                                <input
                                    type="text"
                                    value={nuevoNombre}
                                    onChange={handleChangeNombre}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Preguntas</label>
                                {preguntas.map((pregunta, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={pregunta}
                                        onChange={(e) => handleChangePregunta(index, e.target.value)}
                                        className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white mb-2"
                                        placeholder="Descripción de la pregunta"
                                        required
                                    />
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddPregunta}
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md mt-2 hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Añadir Pregunta
                                </button>
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Crear Módulo
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModals}
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal para editar nombre del módulo */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-lg">
                        <h3 className="text-xl font-bold mb-4">Editar Módulo</h3>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-white">Nombre</label>
                                <input
                                    type="text"
                                    value={nuevoNombre}
                                    onChange={handleChangeNombre}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Actualizar Nombre
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModals}
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

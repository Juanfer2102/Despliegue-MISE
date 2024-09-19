import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ModulosView = ({ modulos, preguntas, selectedModulo, onModuloChange, onCreateOrUpdateModulo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalModulo, setModalModulo] = useState(null);
    const [newModulo, setNewModulo] = useState({
        id_modulo: '',
        nombre: '',
        descripcion: '',
        preguntas: []
    });

    useEffect(() => {
        if (selectedModulo) {
            fetch(`http://localhost:8000/api/v2/preguntas/?id_modulo=${selectedModulo}`)
                .then(response => response.json())
                .then(data => {
                    setPreguntas(data);
                });
        }
    }, [selectedModulo]);

    const openModal = (modulo) => {
        setModalModulo(modulo);
        setNewModulo({
            ...modulo,
            preguntas: modulo.preguntas || []
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalModulo(null);
        setNewModulo({
            id_modulo: null,
            nombre: '',
            descripcion: '',
            preguntas: []
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'preguntas') {
            setNewModulo({
                ...newModulo,
                preguntas: Array.from(e.target.selectedOptions, option => option.value)
            });
        } else {
            setNewModulo({
                ...newModulo,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateOrUpdateModulo(newModulo);
        closeModal();
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-2">
                <div
                    className="bg-transparent border border-green-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                    onClick={() => openModal({})}
                >
                    <p className="text-lg font-bold">Crear Nuevo Módulo</p>
                </div>
                {modulos.map((modulo) => (
                    <div
                        key={modulo.id_modulo}
                        className="bg-transparent border border-green-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                        onClick={() => openModal(modulo)}
                    >
                        <p className="text-lg">{modulo.nombre}</p>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
                        <h3 className="text-xl font-bold mb-4">{modalModulo?.id_modulo ? 'Editar Módulo' : 'Crear Nuevo Módulo'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="mb-4">
                                    <label className="block text-white">Nombre del Módulo</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={newModulo.nombre}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white">Descripción</label>
                                    <textarea
                                        name="descripcion"
                                        value={newModulo.descripcion}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-white bg-transparent rounded-md text-white"
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white">Preguntas</label>
                                    <select
                                        name="preguntas"
                                        multiple
                                        value={newModulo.preguntas}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    >
                                        {preguntas.map((pregunta) => (
                                            <option key={pregunta.id_pregunta} value={pregunta.id_pregunta}>
                                                {pregunta.descripcion}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    {modalModulo?.id_modulo ? 'Actualizar Módulo' : 'Crear Módulo'}
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
    preguntas: PropTypes.array.isRequired,
    selectedModulo: PropTypes.number,
    onModuloChange: PropTypes.func.isRequired,
    onCreateOrUpdateModulo: PropTypes.func.isRequired
};

export default ModulosView;

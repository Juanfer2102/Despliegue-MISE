import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalEliminar from '../modales/modaleliminar';

const PreguntasView = ({ modulos, preguntas, selectedModulo, onModuloChange, onUpdatePregunta, DeletePregunta }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modalPregunta, setModalPregunta] = useState(null);
    const [editPregunta, setEditPregunta] = useState({
        id_pregunta: '',
        descripcion: ''
    });

    // Abrir el modal para editar la pregunta
    const openModal = (pregunta) => {
        setModalPregunta(pregunta);
        setEditPregunta({
            id_pregunta: pregunta.id_pregunta,
            descripcion: pregunta.descripcion
        });
        setIsModalOpen(true);
    };

    // Cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalPregunta(null);
        setEditPregunta({
            id_pregunta: '',
            descripcion: ''
        });
    };

    // Manejar los cambios en el formulario de edición
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditPregunta({
            ...editPregunta,
            [name]: value
        });
    };

    // Enviar la pregunta actualizada
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdatePregunta(editPregunta); // Llamar la función para actualizar la pregunta
        closeModal();
    };

    const handleClick = () => {
        if (modalPregunta) {
            DeletePregunta({ id_pregunta: modalPregunta.id_pregunta, estado: 1 });
        }
        closeModalA();
        closeModal();
    };

    const openModalA = () => setIsOpen(true);

    const closeModalA = () => {
        setIsOpen(false);
    };

    return (
        <>
            <ModalEliminar isOpen={isOpen} closeModal={closeModalA} handleConfirm={handleClick} />
            <div>

                {/* Lista de preguntas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-2">
                    {preguntas.map((pregunta) => (
                        <div
                            key={pregunta.id_pregunta}
                            className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                            onClick={() => openModal(pregunta)}
                        >
                            <p className="text-lg">{pregunta.descripcion}</p>
                        </div>
                    ))}
                </div>

                {/* Modal de edición de pregunta */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                        <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
                            <div className='flex flex-row justify-between'>
                                <h3 className="text-xl font-bold mb-4">Editar Pregunta</h3>
                                <button
                                    type="button"
                                    onClick={openModalA}
                                    className="bg-red text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Eliminar Pregunta
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-white">Nombre de la Pregunta</label>
                                    <textarea
                                        name="descripcion"
                                        value={editPregunta.descripcion}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-white bg-transparent rounded-md text-white"
                                        rows="3"
                                    />
                                </div>

                                <div className="flex justify-end gap-4 mt-4">
                                    <button
                                        type="submit"
                                        className="bg-principalGreen hover:bg-white hover:text-principalGreen text-white px-4 py-2 rounded-lg"
                                    >
                                        Guardar Cambios
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="bg-principalGreen hover:bg-white hover:text-principalGreen text-white px-4 py-2 rounded-lg mr-2"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

PreguntasView.propTypes = {
    modulos: PropTypes.array.isRequired,
    preguntas: PropTypes.array.isRequired,
    selectedModulo: PropTypes.string,
    onUpdatePregunta: PropTypes.func.isRequired
};

export default PreguntasView;

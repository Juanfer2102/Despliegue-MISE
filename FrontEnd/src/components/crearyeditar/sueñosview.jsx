import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SuenosView = ({ suenos, modulos, onCreateOrUpdateSuenio, DeleteSuenos }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentSueño, setCurrentSueño] = useState(null);
    const [sueño, setSueño] = useState('');
    const [nivel, setNivel] = useState('');
    const [medicion, setMedicion] = useState('');
    const [evidencia, setEvidencia] = useState('');
    const [id_modulo, setId_Modulo] = useState('');

    // Función para abrir el modal de creación de sueño
    const openCreateModal = () => {
        setCurrentSueño(null);
        setSueño('');
        setNivel('');
        setMedicion('');
        setEvidencia('');
        setId_Modulo();
        setIsCreateModalOpen(true);
    };

    // Función para abrir el modal de edición de sueño
    const openEditModal = (sueño) => {
        setCurrentSueño(sueño);
        setSueño(sueño.sueño);
        setNivel(sueño.nivel);
        setMedicion(sueño.medicion);
        setEvidencia(sueño.evidencia);
        setId_Modulo(sueño.id_modulo); // Suponiendo que cada sueño tiene un moduloId asociado
        setIsEditModalOpen(true);
    };

    // Función para cerrar ambos modales
    const closeModals = () => {
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
        setCurrentSueño(null);
    };

    const handleChangeSueño = (e) => {
        setSueño(e.target.value);
    };

    const handleChangeNivel = (e) => {
        setNivel(e.target.value);
    };

    const handleChangeMedicion = (e) => {
        setMedicion(e.target.value);
    };

    const handleChangeEvidencia = (e) => {
        setEvidencia(e.target.value);
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        onCreateOrUpdateSuenio({
            sueño: sueño,
            nivel: nivel,
            medicion: medicion,
            evidencia: evidencia,
            estado: 0,
            id_modulo: parseInt(id_modulo),
        });
        closeModals();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onCreateOrUpdateSuenio({
            id: currentSueño.id,
            sueño: sueño,
            nivel: nivel,
            medicion: medicion,
            evidencia: evidencia,
            estado: 0,
        });
        closeModals();
    };

    const handleClick = () => {
        if (currentSueño) {
            DeleteSuenos({ id: currentSueño.id, estado: 1 });
        }
        closeModals();
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-2">
                <div
                    className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                    onClick={openCreateModal}
                >
                    <p className="text-lg font-bold">Crear Nuevo Sueño</p>
                </div>
                {suenos.map((sueño) => (
                    <div
                        key={sueño.id}
                        className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                        onClick={() => openEditModal(sueño)}
                    >
                        <p className="text-lg">{sueño.sueño}</p>
                    </div>
                ))}
            </div>

            {/* Modal para crear sueño */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
                        <h3 className="text-xl font-bold mb-4">Crear Nuevo Sueño</h3>
                        <form onSubmit={handleCreateSubmit}>
                            <div className="mb-4">
                                <label className="block text-white">Sueño</label>
                                <input
                                    type="text"
                                    value={sueño}
                                    onChange={handleChangeSueño}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Nivel</label>
                                <input
                                    type="text"
                                    value={nivel}
                                    onChange={handleChangeNivel}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Medicion</label>
                                <input
                                    type="text"
                                    value={medicion}
                                    onChange={handleChangeMedicion}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Evidencia</label>
                                <textarea
                                    value={evidencia}
                                    onChange={handleChangeEvidencia}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Módulo</label>
                                <select
                                    value={id_modulo}
                                    onChange={(e) => setId_Modulo(e.target.value)}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                >
                                    <option className='text-black' value="">Selecciona un módulo</option>
                                    {modulos.map((modulo) => (
                                        <option className='text-black' key={modulo.id_modulo} value={modulo.id_modulo}>
                                            {modulo.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Crear Sueño
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

            {/* Modal para editar sueño */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-lg">
                        <div className='flex flex-row justify-between'>
                            <h3 className="text-xl font-bold mb-4">Editar Sueño</h3>
                            <button
                                type="button"
                                onClick={handleClick}
                                className="bg-red text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                            >
                                Eliminar Sueño
                            </button>
                        </div>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-white">Sueño</label>
                                <input
                                    type="text"
                                    value={sueño}
                                    onChange={handleChangeSueño}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Nivel</label>
                                <input
                                    type="text"
                                    value={nivel}
                                    onChange={handleChangeNivel}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Medicion</label>
                                <input
                                    type="text"
                                    value={medicion}
                                    onChange={handleChangeMedicion}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white">Evidencia</label>
                                <textarea
                                    value={evidencia}
                                    onChange={handleChangeEvidencia}
                                    className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300"
                                >
                                    Actualizar Sueño
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

SuenosView.propTypes = {
    suenos: PropTypes.array.isRequired,
    modulos: PropTypes.array.isRequired,
    onCreateOrUpdateSuenio: PropTypes.func.isRequired
};

export default SuenosView;

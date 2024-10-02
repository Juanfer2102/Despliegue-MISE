import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalEliminar from '../modales/modaleliminar';

const TemasView = ({ temas, modulos, preguntas, selectedModulo, onModuloChange, onCreateOrUpdateTema, DeleteTema }) => {
    // Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Estado para almacenar el tema actualmente en el modal
    const [modalTema, setModalTema] = useState(null);
    // Estado para almacenar las preguntas obtenidas de la API
    const [preguntas_, setPreguntas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Estado para manejar los datos del nuevo tema
    const [newTema, setNewTema] = useState({
        id: null,
        id_modulo: '',
        titulo_formacion: '',
        num_sesion: '',
        objetivo: '',
        alcance: '',
        contenido: '',
        conferencista: '',
        ubicacion: '',
        preguntas: [] // Cambiado a un array para manejar múltiples preguntas
    });

    // useEffect para obtener las preguntas cuando se selecciona un módulo
    useEffect(() => {
        if (selectedModulo) {
            // Fetch preguntas based on selected modulo
            fetch(`http://localhost:8000/api/v2/preguntas/?id_modulo=${selectedModulo}`)
                .then(response => response.json())
                .then(data => {
                    setPreguntas(data);
                });
        }
    }, [selectedModulo]);

    // Abre el modal y configura el estado del tema a editar o crear
    const openModal = (tema) => {
        setModalTema(tema);
        setNewTema({
            ...tema,
            id_pregunta: tema.id_pregunta || ''
        });
        setIsModalOpen(true);
    };

    // Cierra el modal y resetea el estado del tema
    const closeModal = () => {
        setIsModalOpen(false);
        setModalTema(null);
        setNewTema({
            id: null,
            id_modulo: '',
            titulo_formacion: '',
            num_sesion: '',
            objetivo: '',
            alcance: '',
            contenido: '',
            conferencista: '',
            ubicacion: '',
            id_pregunta: ''
        });
    };

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'preguntas') {
            // Convertir la selección en un array si es necesario
            setNewTema({
                ...newTema,
                preguntas: Array.from(e.target.selectedOptions, option => option.value)
            });
        } else {
            setNewTema({
                ...newTema,
                [name]: value
            });
        }
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newTema); // Verifica que preguntas se envían correctamente
        onCreateOrUpdateTema(newTema);
        closeModal();
    };

    // Maneja el clic en el botón de eliminar en el modal
    const handleClick = () => {
        if (modalTema) {
            DeleteTema({ id: modalTema.id, estado: 1 });
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-2">
                    <div
                        className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                        onClick={() => openModal({})}
                    >
                        <p className="text-lg font-bold">Crear Nuevo Tema</p>
                    </div>
                    {temas.map((tema) => (
                        <div
                            key={tema.id}
                            className="bg-transparent border border-principalGreen text-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
                            onClick={() => openModal(tema)}
                        >
                            <p className="text-lg">{tema.objetivo}</p>
                        </div>
                    ))}
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                        <div className="bg-greyBg text-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
                            <div className='flex flex-row justify-between py-3'>
                                <h3 className="text-xl font-bold mb-4">{modalTema.id ? 'Editar Tema' : 'Crear Nuevo Tema'}</h3>
                                <button
                                    type="button"
                                    onClick={openModalA}
                                    className={`bg-red text-white ${modalTema.id ? 'block' : 'hidden'} px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300`}
                                >
                                    Eliminar Modulo
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className='max-h-[30rem] overflow-y-auto p-2'>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className="mb-4">
                                        <label className="block text-white">Módulo</label>
                                        <select
                                            name="id_modulo"
                                            value={newTema.id_modulo}
                                            onChange={(e) => {
                                                handleChange(e);
                                                onModuloChange(e.target.value);
                                            }}
                                            className="mt-1 block w-full border border-white bg-transparent rounded-md text-white"
                                        >
                                            <option className='text-black' value="">Seleccionar módulo</option>
                                            {modulos.map((modulo) => (
                                                <option className='text-black' key={modulo.id_modulo} value={modulo.id_modulo}>
                                                    {modulo.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-white">Preguntas</label>
                                        <select
                                            name="preguntas"
                                            multiple // Permite seleccionar varias preguntas
                                            value={newTema.preguntas}
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

                                    <div className="mb-4">
                                        <label className="block text-gray-700">Título de Formación</label>
                                        <input
                                            type="text"
                                            name="titulo_formacion"
                                            value={newTema.titulo_formacion}
                                            onChange={handleChange}
                                            className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Número de Sesión</label>
                                        <input
                                            type="number"
                                            name="num_sesion"
                                            value={newTema.num_sesion}
                                            onChange={handleChange}
                                            className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Objetivo</label>
                                        <textarea
                                            name="objetivo"
                                            value={newTema.objetivo}
                                            onChange={handleChange}
                                            className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                            rows="3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Alcance</label>
                                        <textarea
                                            name="alcance"
                                            value={newTema.alcance}
                                            onChange={handleChange}
                                            className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                            rows="3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Contenido</label>
                                        <textarea
                                            name="contenido"
                                            value={newTema.contenido}
                                            onChange={handleChange}
                                            className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                            rows="3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Conferencista</label>
                                        <input
                                            type="text"
                                            name="conferencista"
                                            value={newTema.conferencista}
                                            onChange={handleChange}
                                            className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Ubicación</label>
                                        <input
                                            type="text"
                                            name="ubicacion"
                                            value={newTema.ubicacion}
                                            onChange={handleChange}
                                            className="mt-1 pl-1 block w-full border border-white bg-transparent rounded-md text-white"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-4 mt-4">
                                    <button type="submit" className="bg-principalGreen text-white px-4 py-2 rounded-md hover:bg-white hover:text-principalGreen transition duration-300">
                                        {modalTema.id ? 'Actualizar Tema' : 'Crear Tema'}
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
        </>
    );
};

// Definición de los tipos de las propiedades esperadas
TemasView.propTypes = {
    temas: PropTypes.array.isRequired,
    modulos: PropTypes.array.isRequired,
    preguntas: PropTypes.array.isRequired,
    selectedModulo: PropTypes.number,
    onModuloChange: PropTypes.func.isRequired,
    onCreateOrUpdateTema: PropTypes.func.isRequired
};

export default TemasView;

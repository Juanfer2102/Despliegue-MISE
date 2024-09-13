import React, { useState, useEffect } from 'react';
import Input3 from '../inputs/input3/input3.jsx';
import Boton from '../inputs/boton.jsx';
import ConfirmModal from './modalconfirm.jsx';
import GoBack from '../inputs/goback/goBack.jsx';
import Selectormultiple from '../inputs/selectores/selectormultiple.jsx';

const Editarmodulos = ({ id }) => {
    const [values, setValues] = useState({});
    const [preguntas, setPreguntas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [originalValues, setOriginalValues] = useState({});

    useEffect(() => {
        // Obtener datos del módulo
        const fetchModuleData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v2/modulos/${id}/`);
                const data = await response.json();
                setValues(data);
                setOriginalValues(data); // Guarda los datos originales
            } catch (error) {
                console.error('Error fetching module data:', error);
            }
        };

        // Obtener preguntas no asignadas
        const fetchPreguntas = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/preguntas-no-asignadas/');
                const data = await response.json();
                setPreguntas(data);
            } catch (error) {
                console.error('Error fetching preguntas:', error);
            }
        };

        if (id) {
            fetchModuleData();
        }
        fetchPreguntas();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleMultiSelectChange = (values) => {
        setValues((prev) => ({ ...prev, preg_mod_edit: values }));
    };

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleConfirm = async () => { 
        try {
            const method = Object.keys(values).length === Object.keys(originalValues).length ? 'PUT' : 'PATCH';
            const response = await fetch(`http://localhost:8000/api/v2/modulos/${id}/`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}` // Incluye el token si es necesario
                },
                body: JSON.stringify(values) // Envía los datos actualizados como JSON
            });

            if (!response.ok) {
                throw new Error('Error updating module');
            }

            const updatedModule = await response.json();
            console.log('Module updated successfully:', updatedModule);
            // Puedes actualizar el estado o redirigir al usuario si es necesario

        } catch (error) {
            console.error('Error updating module:', error);
        }

        closeModal(); // Cierra el modal después de la actualización
    };

    const renderFields = () => {
        const commonProps = {
            onChange: handleInputChange,
            height: "h-10",
            width: "w-[10rem]",
            widthInput: "w-[20rem]",
        };

        return [
            <Input3 name={values.nombre} value={values.nom_mod_edit} {...commonProps} DataType="Nombre" inputPlaceholder={values.nombre} inputType="text" />,
            <Selectormultiple name="preg_mod_edit" onChange={handleMultiSelectChange} DataType="Preguntas" items={preguntas} {...commonProps} />,
            <Selectormultiple name="sue_mod_edit" onChange={(v) => handleMultiSelectChange(v)} DataType="Sueños" {...commonProps} />
        ];
    };

    return (
        <>
            <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
            <GoBack text="Editar Modulo" />
            <div className="flex-col bg-greyBlack rounded-xl gap-3 text-center p-10 flex justify-center items-start">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center items-center gap-6">
                    {renderFields()}
                    <Boton onClick={openModal} text="Confirmar" />
                </form>
            </div>
        </>
    );
};

export default Editarmodulos;

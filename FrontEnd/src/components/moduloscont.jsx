import React, { useState, useEffect } from 'react';
import ModulosView from './modulosview';

const ModulosContainer = () => {
    const [modulos, setModulos] = useState([]);
    const [preguntas, setPreguntas] = useState([]);
    const [selectedModulo, setSelectedModulo] = useState(null);

    // Función para obtener todos los módulos
    const fetchModulos = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v2/modulos/');
            const data = await response.json();
            setModulos(data);
        } catch (error) {
            console.error('Error fetching modulos:', error);
        }
    };

    // Función para obtener todas las preguntas basadas en el módulo seleccionado
    const fetchPreguntas = async (moduloId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v2/preguntas/?id_modulo=${moduloId}`);
            const data = await response.json();
            setPreguntas(data);
        } catch (error) {
            console.error('Error fetching preguntas:', error);
        }
    };

    // Función para manejar el cambio en el módulo seleccionado
    const handleModuloChange = (moduloId) => {
        setSelectedModulo(moduloId);
        fetchPreguntas(moduloId);
    };

    const createModulo = async (moduloData) => {
        try {
            const response = await fetch('http://localhost:8000/api/v2/cmodulos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(moduloData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Modulo creado:', data);
        } catch (error) {
            console.error('Error creando módulo:', error);
        }
    };

    const updateModulo = async (id_modulo, moduloData) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v2/modulos/${id_modulo}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(moduloData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Modulo actualizado:', data);
        } catch (error) {
            console.error('Error actualizando módulo:', error);
        }
    };
    

    const createOrUpdateModulo = async (moduloData) => {
        if (selectedModulo) {
            await updateModulo(selectedModulo, moduloData);
        } else {
            await createModulo(moduloData);
        }
    };

    useEffect(() => {
        fetchModulos();
    }, []);

    return (
        <ModulosView
            modulos={modulos}
            preguntas={preguntas}
            selectedModulo={selectedModulo}
            onModuloChange={handleModuloChange}
            onCreateOrUpdateModulo={createOrUpdateModulo}
        />
    );
};

export default ModulosContainer;

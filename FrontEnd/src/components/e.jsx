import React, { useState, useEffect } from 'react';
import TemasView from './a';

const TemasContainer = () => {
    const [temas, setTemas] = useState([]);
    const [modulos, setModulos] = useState([]);
    const [preguntas, setPreguntas] = useState([]);

    const [selectedModulo, setSelectedModulo] = useState(null);

    // Función para obtener todos los temas
    const fetchTemas = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v2/temas/');
            const data = await response.json();
            setTemas(data);
        } catch (error) {
            console.error('Error fetching temas:', error);
        }
    };

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

    // Función para crear o actualizar un tema
    const createOrUpdateTema = async (temaData) => {
        try {
            const method = temaData.id ? 'PUT' : 'POST';
            const url = 'http://localhost:8000/api/v2/temas/create-update/';
    
            // Formateo de las preguntas para asegurarse de que solo pasen sus IDs
            const temaDataFormatted = {
                ...temaData,
                preguntas: temaData.preguntas.map(pregunta => ({ id_pregunta: pregunta })) // Enviar como un objeto con `id_pregunta`
            };
    
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(temaDataFormatted)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Tema creado/actualizado:', data);
            fetchTemas(); // Refrescar la lista de temas
        } catch (error) {
            console.error('Error creating/updating tema:', error);
        }
    };
    
    
    
    
    

    useEffect(() => {
        fetchTemas();
        fetchModulos();
    }, []);

    return (
        <TemasView
            temas={temas}
            modulos={modulos}
            preguntas={preguntas}
            selectedModulo={selectedModulo}
            onModuloChange={handleModuloChange}
            onCreateOrUpdateTema={createOrUpdateTema}
            onFetchTemas={fetchTemas}
        />
    );
};

export default TemasContainer;
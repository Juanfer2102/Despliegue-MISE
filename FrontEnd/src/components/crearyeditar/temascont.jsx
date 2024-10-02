import React, { useState, useEffect } from 'react';
import TemasView from './temasview';

const TemasContainer = () => {
    // Estado para almacenar la lista de temas
    const [temas, setTemas] = useState([]);
    // Estado para almacenar la lista de módulos
    const [modulos, setModulos] = useState([]);
    // Estado para almacenar la lista de preguntas
    const [preguntas, setPreguntas] = useState([]);

    // Estado para almacenar el módulo seleccionado
    const [selectedModulo, setSelectedModulo] = useState(null);

    // Función para obtener todos los temas desde el servidor
    const fetchTemas = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v2/temas/');
            const data = await response.json();
            setTemas(data);
        } catch (error) {
            console.error('Error fetching temas:', error);
        }
    };

    // Función para obtener todos los módulos desde el servidor
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
            // Determinar el método HTTP basado en la existencia del ID del tema
            const method = temaData.id ? 'PUT' : 'POST';
            const url = 'http://localhost:8000/api/v2/temas/create-update/';
    
            // Formateo de las preguntas para asegurarse de que solo se envíen los IDs
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
    
    // Función para eliminar un tema (cambiar su estado a inhabilitado)
    const DeleteTema = async (tema) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v2/eliminar/temas/${tema.id}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: tema.estado })
            });
    
            if (!response.ok) {
                throw new Error('Error al inhabilitar tema.');
            }
            fetchTemas(); // Refrescar la lista de temas
        } catch (error) {
            setError('Error al inhabilitar tema.');
            console.error('Error al inhabilitar tema:', error);
        }
    };

    // useEffect para cargar los temas y módulos al montar el componente
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
            DeleteTema={DeleteTema}
        />
    );
};

export default TemasContainer;

import React, { useState, useEffect } from 'react';
import PreguntasView from './preguntasview';

const PreguntasContainer = () => {
    const [modulos, setModulos] = useState([]);
    const [preguntas, setPreguntas] = useState([]);
    const [selectedModulo, setSelectedModulo] = useState(null);

    // Función para obtener todos los módulos
    const fetchModulos = async () => {
        try {
            const response = await fetch('https://despliegue-mise.onrender.com/api/v2/modulos/');
            const data = await response.json();
            setModulos(data);
        } catch (error) {
            console.error('Error fetching modulos:', error);
        }
    };

    // Función para obtener todas las preguntas
    const fetchPreguntas = async () => {
        try {
            const response = await fetch('https://despliegue-mise.onrender.com/api/v2/preguntas/');
            const data = await response.json();
            console.log('Preguntas recibidas:', data);
            setPreguntas(data);
        } catch (error) {
            console.error('Error fetching preguntas:', error);
        }
    };

    // Función para actualizar una pregunta
    const updatePregunta = async (preguntaData) => {
        try {
            const response = await fetch(`https://despliegue-mise.onrender.com/api/v2/preguntas/${preguntaData.id_pregunta}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preguntaData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Pregunta actualizada:', data);
            fetchPreguntas(); // Refrescar todas las preguntas
        } catch (error) {
            console.error('Error updating pregunta:', error);
        }
    };

    const DeletePregunta = async (pregunta) => {
        try {
            const response = await fetch(`https://despliegue-mise.onrender.com/api/v2/eliminar/preguntas/${pregunta.id_pregunta}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: pregunta.estado })
            });
    
            if (!response.ok) {
                throw new Error('Error al inhabilitar pregunta.');
            }
            fetchPreguntas();
        } catch (error) {
            setError('Error al inhabilitar pregunta.');
            console.error('Error al inhabilitar pregunta.', error);
        }
    };

    useEffect(() => {
        fetchModulos();
        fetchPreguntas(); // Obtener todas las preguntas al montar el componente
    }, []);

    return (
        <PreguntasView
            modulos={modulos}
            preguntas={preguntas}
            selectedModulo={selectedModulo}
            onUpdatePregunta={updatePregunta}
            DeletePregunta={DeletePregunta}
        />
    );
};

export default PreguntasContainer;

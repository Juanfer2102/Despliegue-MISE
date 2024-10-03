import React, { useState, useEffect } from 'react';
import SuenosView from './sueñosview';

const SuenosContainer = () => {
    // Estado para almacenar la lista de sueños
    const [suenos, setSuenos] = useState([]);
    // Estado para almacenar la lista de módulos
    const [modulos, setModulos] = useState([]);
    // Estado para gestionar la carga de datos
    const [loading, setLoading] = useState(false);
    // Estado para almacenar errores
    const [error, setError] = useState(null);

    // Función asíncrona para obtener la lista de sueños desde la API
    const fetchSuenos = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://despliegue-mise.onrender.com/api/v2/suenos/');
            const data = await response.json();
            setSuenos(data);
        } catch (error) {
            setError('Error fetching sueños.'); // Mensaje de error al obtener sueños
            console.error(error); // Imprime el error en consola
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    // Función asíncrona para obtener la lista de módulos desde la API
    const fetchModulos = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://despliegue-mise.onrender.com/api/v2/modulos/');
            const data = await response.json();
            setModulos(data);
        } catch (error) {
            setError('Error fetching módulos.'); // Mensaje de error al obtener módulos
            console.error(error); // Imprime el error en consola
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    // useEffect para cargar sueños y módulos al montar el componente
    useEffect(() => {
        fetchSuenos(); // Obtiene sueños
        fetchModulos(); // Obtiene módulos
    }, []); // El array vacío asegura que solo se ejecute una vez al montar

    // Función asíncrona para crear o actualizar un sueño
    const handleCreateOrUpdateSuenio = async (sueño, modulo) => {
        setLoading(true);
        try {
            const response = sueño.id
                ? await fetch(`http://localhost:8000/api/v2/suenos/${sueño.id}/`, {
                    method: 'PUT', // Actualiza un sueño existente
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ sueño: sueño.sueño, medicion: sueño.medicion, nivel: sueño.nivel, evidencia: sueño.evidencia, estado: sueño.estado })
                })
                : await fetch('http://localhost:8000/api/v2/crear-suenos/', {
                    method: 'POST', // Crea un nuevo sueño
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sueño)
                });
            if (!response.ok) {
                throw new Error('Error al guardar sueño.'); // Maneja errores de la respuesta
            }
            fetchSuenos(); // Vuelve a obtener la lista de sueños
        } catch (error) {
            setError('Error al guardar sueño.'); // Mensaje de error al guardar sueño
            console.error('Error al guardar sueño:', error); // Imprime el error en consola
            console.log(sueño, modulo); // Imprime los datos del sueño y módulo en consola
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    // Función asíncrona para eliminar un sueño
    const DeleteSueno = async (sueno) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/api/v2/eliminar/suenos/${sueno.id}/`, {
                method: 'PUT', // Actualiza el estado del sueño para inhabilitarlo
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: sueno.estado })
            });

            if (!response.ok) {
                throw new Error('Error al inhabilitar sueño.'); // Maneja errores de la respuesta
            }
            fetchSuenos(); // Vuelve a obtener la lista de sueños
        } catch (error) {
            setError('Error al inhabilitar sueño.'); // Mensaje de error al eliminar sueño
            console.error('Error al inhabilitar sueño:', error); // Imprime el error en consola
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    // Manejo de estados de carga y error
    if (loading) return <div>Cargando...</div>; // Muestra mensaje de carga
    if (error) return <div>{error}</div>; // Muestra mensaje de error

    // Renderiza el componente SuenosView con los datos y funciones necesarias
    return (
        <SuenosView suenos={suenos} modulos={modulos} onCreateOrUpdateSuenio={handleCreateOrUpdateSuenio} DeleteSuenos={DeleteSueno} />
    );

};

export default SuenosContainer;

import React, { useState, useEffect } from 'react';
import SuenosView from './sueñosview';

const SuenosContainer = () => {
    const [suenos, setSuenos] = useState([]);
    const [modulos, setModulos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSuenos = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/v2/suenos/');
            const data = await response.json();
            setSuenos(data);
        } catch (error) {
            setError('Error fetching sueños.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchModulos = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/v2/modulos/');
            const data = await response.json();
            setModulos(data);
        } catch (error) {
            setError('Error fetching módulos.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSuenos();
        fetchModulos();
    }, []);

    const handleCreateOrUpdateSuenio = async (sueño, modulo) => {
        setLoading(true);
        try {
            const response = sueño.id
                ? await fetch(`http://localhost:8000/api/v2/suenos/${sueño.id}/`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ sueño: sueño.sueño, medicion: sueño.medicion, nivel: sueño.nivel, evidencia: sueño.evidencia, estado: sueño.estado })
                })
                : await fetch('http://localhost:8000/api/v2/crear-suenos/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sueño)
                });
            if (!response.ok) {
                throw new Error('Error al guardar sueño.');
            }
            fetchSuenos();
        } catch (error) {
            setError('Error al guardar sueño.');
            console.error('Error al guardar sueño:', error);
            console.log(sueño, modulo)
        } finally {
            setLoading(false);
        }
    };

    const DeleteSueno = async (sueno) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/api/v2/eliminar/suenos/${sueno.id}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: sueno.estado })
            });
    
            if (!response.ok) {
                throw new Error('Error al inhabilitar sueño.');
            }
            fetchSuenos();
        } catch (error) {
            setError('Error al inhabilitar sueño.');
            console.error('Error al inhabilitar sueño:', error);
        } finally {
            setLoading(false);
        }
    };


    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <SuenosView suenos={suenos} modulos={modulos} onCreateOrUpdateSuenio={handleCreateOrUpdateSuenio} DeleteSuenos={DeleteSueno} />
    );

};

export default SuenosContainer;

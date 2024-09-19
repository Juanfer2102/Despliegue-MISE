import React, { useState, useEffect } from 'react';
import ModulosView from './modulosview';

const ModulosContainer = () => {
    const [modulos, setModulos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchModulos = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/v2/modulos/');
            const data = await response.json();
            setModulos(data);
        } catch (error) {
            setError('Error fetching modulos.');
            console.error('Error fetching modulos:', error);
        } finally {
            setLoading(false);
        }
    };

    const createOrUpdateModulo = async (modulo) => {
        setLoading(true);
        try {
            const response = modulo.id_modulo
                ? await fetch(`http://localhost:8000/api/v2/modulos/${modulo.id_modulo}/`, {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ nombre: modulo.nombre })
                  })
                : await fetch('http://localhost:8000/api/v2/cmodulos/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ nombre: modulo.nombre })
                  });

            if (!response.ok) {
                throw new Error('Error al guardar módulo.');
            }
            await fetchModulos();
        } catch (error) {
            setError('Error al guardar módulo.');
            console.error('Error al guardar módulo:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchModulos();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red">{error}</p>}
            <ModulosView
                modulos={modulos}
                onCreateOrUpdateModulo={createOrUpdateModulo}
            />
        </div>
    );
};

export default ModulosContainer;

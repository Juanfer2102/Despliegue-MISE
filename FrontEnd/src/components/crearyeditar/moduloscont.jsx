import React, { useState, useEffect } from 'react';
import ModulosView from './modulosview';

/**
 * El componente `ModulosContainer` maneja la lógica de obtención, creación, 
 * actualización y eliminación de módulos mediante llamadas a una API externa.
 * 
 * Utiliza `useState` para gestionar el estado de los módulos, el estado de carga,
 * y los errores. El hook `useEffect` permite que los módulos se obtengan 
 * automáticamente cuando el componente se monta.
 * 
 * Funciones principales:
 * - `fetchModulos`: Obtiene los módulos desde la API y los almacena en el estado.
 * - `createOrUpdateModulo`: Crea o actualiza un módulo dependiendo de si existe
 *   el ID del módulo. Hace una llamada POST para crear y PUT para actualizar.
 * - `DeleteModulo`: Marca un módulo como inhabilitado mediante una llamada PUT.
 */

const ModulosContainer = () => {
    // Estado para almacenar los módulos obtenidos de la API
    const [modulos, setModulos] = useState([]);
    
    // Estado para gestionar la visualización de una pantalla de carga
    const [loading, setLoading] = useState(false);
    
    // Estado para manejar errores de la API
    const [error, setError] = useState(null);

    /**
     * Obtiene la lista de módulos desde la API.
     * Activa el estado de carga mientras se realiza la llamada.
     */
    const fetchModulos = async () => {
        setLoading(true);
        try {
            // Realiza una llamada GET a la API
            const response = await fetch('http://localhost:8000/api/v2/modulos/');
            const data = await response.json();
            setModulos(data);  // Almacena los módulos obtenidos en el estado
        } catch (error) {
            setError('Error fetching modulos.');  // Captura cualquier error y lo guarda en el estado
            console.error('Error fetching modulos:', error);
        } finally {
            setLoading(false);  // Finaliza el estado de carga
        }
    };

    /**
     * Crea o actualiza un módulo. Si el módulo tiene un `id_modulo` definido, lo actualiza
     * (PUT). Si no, crea un nuevo módulo (POST).
     * @param {Object} modulo - El objeto módulo con la información a enviar.
     */
    const createOrUpdateModulo = async (modulo) => {
        setLoading(true);
        try {
            const response = modulo.id_modulo
                ? await fetch(`http://localhost:8000/api/v2/modulos/${modulo.id_modulo}/`, {
                    method: 'PUT',  // Actualiza el módulo
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre: modulo.nombre })
                })
                : await fetch('http://localhost:8000/api/v2/cmodulos/', {
                    method: 'POST',  // Crea un nuevo módulo
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre: modulo.nombre, preguntas: modulo.preguntas, estado: 0 })
                });

            if (!response.ok) {
                throw new Error('Error al guardar módulo.');
            }
            fetchModulos();  // Refresca la lista de módulos tras crear/actualizar
        } catch (error) {
            setError('Error al guardar módulo.');
            console.error('Error al guardar módulo:', error);
        } finally {
            console.log(modulos);  // Muestra los módulos en la consola
            setLoading(false);
        }
    };

    /**
     * Inhabilita un módulo cambiando su estado. Realiza una llamada PUT
     * para actualizar el estado del módulo a "inhabilitado".
     * @param {Object} modulo - El objeto módulo que se quiere inhabilitar.
     */
    const DeleteModulo = async (modulo) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/api/v2/eliminar/modulos/${modulo.id_modulo}/`, {
                method: 'PUT',  // Cambia el estado del módulo
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: modulo.estado })
            });
    
            if (!response.ok) {
                throw new Error('Error al inhabilitar módulo.');
            }
            fetchModulos();  // Refresca la lista de módulos tras la operación
        } catch (error) {
            setError('Error al inhabilitar módulo.');
            console.error('Error al inhabilitar módulo:', error);
        } finally {
            setLoading(false);
        }
    };

    // Hook `useEffect` que ejecuta `fetchModulos` cuando el componente se monta
    useEffect(() => {
        fetchModulos();
    }, []);

    return (
        <div>
            <ModulosView modulos={modulos} onCreateOrUpdateModulo={createOrUpdateModulo} DeleteModulo={DeleteModulo} />
            {loading && <p>Cargando...</p>}
        </div>
    );
};

export default ModulosContainer;

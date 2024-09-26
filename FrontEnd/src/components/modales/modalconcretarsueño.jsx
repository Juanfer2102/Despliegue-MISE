import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

// Componente Modal para concretar el sueño
const ModalConcretarSueno = ({ sueno, onClose }) => {
    const { nit } = useParams();
    const [estado, setEstado] = useState(0); // Estado por defecto: "No"
    const [observaciones, setObservaciones] = useState(""); // Observaciones vacías

    // useEffect para loguear cuando el componente se monta o cuando el sueño cambia
    useEffect(() => {
        if (sueno && sueno.id) {
            console.log(`Modal abierto para concretar el sueño con ID: ${sueno.id}`);
        }
    }, [sueno]); // Solo se ejecuta cuando `sueno` cambia

    // useEffect para registrar cambios en el estado del sueño
    useEffect(() => {
        console.log(`Estado del sueño actualizado a: ${estado === 1 ? 'Sí' : 'No'}`);
    }, [estado]); // Se ejecuta cada vez que `estado` cambia

    const concretarSueno = async () => {
        if (!sueno || !sueno.id) {
            console.error("Sueño no válido", sueno);
            return; // Asegúrate de que el sueño tiene una propiedad "id"
        }

        try {
            const response = await fetch(`http://localhost:8000/api/v2/concretar-sueno/${sueno.id}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    estado, // Enviar el estado del sueño
                    observaciones, // Enviar observaciones
                    nit: nit, // Enviar el NIT de la empresa asociada
                }),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Obtener el mensaje de error del servidor
                console.error('Error:', errorData); // Loguea el error recibido
                throw new Error('Error al concretar el sueño');
            }

            const data = await response.json();
            console.log(data);
            onClose(); // Cerrar el modal al concretar

            // Recargar la página después de cerrar el modal
            window.location.reload();

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="rounded-lg p-6 w-96 shadow-lg bg-greyBlack">
                <h2 className="text-lg font-semibold text-white mb-4">Concretar Sueño</h2>
                <p className="text-white"><strong>Sueño:</strong> {sueno.sueño}</p>

                <label className="block text-white mt-4">
                    ¿El sueño se concretó?
                    <select 
                        value={estado} 
                        onChange={(e) => setEstado(Number(e.target.value))} 
                        className="mt-1 block w-full border border-gray-600 rounded-md text-white bg-transparent pl-2"
                    >
                        <option value="0" className="text-black">No</option>
                        <option value="1" className="text-black">Sí</option>
                    </select>
                </label>

                <label className="block text-white mt-4">
                    Observaciones:
                    <textarea
                        value={observaciones}
                        onChange={(e) => setObservaciones(e.target.value)}
                        placeholder="Ingrese observaciones"
                        className="mt-1 block w-full border border-gray-600 rounded-md text-white bg-transparent p-2"
                        rows="4"
                    />
                </label>

                <div className="flex justify-end mt-4">
                    <button 
                        onClick={concretarSueno} 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                        Concretar Sueño
                    </button>
                    <button 
                        onClick={onClose} 
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalConcretarSueno;

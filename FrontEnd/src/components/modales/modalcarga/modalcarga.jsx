import React from 'react';
import './modalcarga.css';

/**
 * Componente de modal de carga que muestra un indicador de carga en el centro de la pantalla.
 *
 * Utiliza un fondo semitransparente para bloquear el contenido detrás del modal y muestra una animación de carga.
 *
 * @returns {JSX.Element} - Un modal centrado en la pantalla con un indicador de carga.
 */
const Modalcarga = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="loading-balls">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Modalcarga;

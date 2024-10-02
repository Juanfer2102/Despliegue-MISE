import React from 'react';

/**
 * Componente de entrada de texto reutilizable.
 *
 * @param {string} inputPlaceholder - El texto de marcador de posición para el campo de entrada.
 * @param {string} inputType - El tipo de entrada (por ejemplo, "text", "email").
 * @param {function} onChange - Función de manejo de cambios que se llama cuando el valor del campo cambia.
 * @param {string} name - El nombre del campo de entrada.
 * @param {string} value - El valor actual del campo de entrada.
 *
 * @returns {JSX.Element} - Un elemento de entrada HTML estilizado.
 */
const Input2 = ({ inputPlaceholder, inputType, onChange, name, value }) => {
    return (
        <input
            className="mail h-16 rounded-lg flex items-center caret-white border-solid border-white bg-transparent peer border border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 pl-2 shadow-xl gap-2"
            placeholder={inputPlaceholder}
            type={inputType}
            name={name}
            id="2"
            value={value}
            onChange={onChange}
        />
    )
}

export default Input2;

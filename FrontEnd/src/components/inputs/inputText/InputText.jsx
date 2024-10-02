import React from 'react';
import './InputComponent.css'; // Importa el archivo CSS

/**
 * Componente de entrada de texto básico.
 *
 * @param {string} inputType - El tipo de entrada (por ejemplo, "text", "email").
 * @param {string} inputPlaceholder - El texto de marcador de posición para el campo de entrada.
 * @param {string} names - El nombre del campo de entrada.
 *
 * @returns {JSX.Element} - Un elemento de entrada HTML estilizado con clases CSS.
 */
const InputText = ({ inputType, inputPlaceholder, names }) => {
  return (
    <input
      className="input-field"
      placeholder={inputPlaceholder}
      type={inputType}
      name={names}
      id="1"
    />
  );
};

export default InputText;

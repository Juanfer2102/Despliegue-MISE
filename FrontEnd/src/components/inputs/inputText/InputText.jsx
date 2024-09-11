import React from 'react';
import './InputComponent.css'; // Importa el archivo CSS

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

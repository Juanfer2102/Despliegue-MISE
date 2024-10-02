import React from 'react';
import './input3.css'; // Asegúrate de incluir el archivo CSS

/**
 * Componente de entrada de texto personalizable.
 *
 * @param {string} inputType - El tipo de entrada (por ejemplo, "text", "email").
 * @param {string} inputPlaceholder - El texto de marcador de posición para el campo de entrada.
 * @param {string} DataType - El tipo de datos que se va a mostrar como etiqueta.
 * @param {string} width - Clases de ancho para el contenedor de la etiqueta.
 * @param {string} widthInput - Clases de ancho para el campo de entrada.
 * @param {string} height - Clases de altura para el campo de entrada.
 * @param {string} additionalClass - Clases adicionales para personalizar el contenedor del componente.
 * @param {string} value - El valor actual del campo de entrada.
 * @param {function} onChange - Función que se llama cada vez que el valor del campo cambia.
 * @param {string} name - El nombre del campo de entrada.
 *
 * @returns {JSX.Element} - Un elemento de entrada HTML estilizado con etiqueta.
 */
const InputComponent = ({
  inputType,
  inputPlaceholder,
  DataType,
  width,
  widthInput,
  height,
  additionalClass,
  value,
  onChange,
  name
}) => {
  return (
    <div className={`text-textBg items-center text-start content-center flex flex-row ${additionalClass}`}>
      <div className={width}>
        <p className="font-semibold">{DataType}</p>
      </div>
      <div>
        <input
          className={`inputext border ${widthInput} ${height} rounded-md text-white peer border-solid border-white bg-transparent placeholder:text-start pl-2 text:break-normal overflow-y-auto custom-scrollbar`}
          placeholder={inputPlaceholder}
          type={inputType}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete='off'
          onFocus={(e) => e.target.removeAttribute('readonly')} // Evitar autocompletado usando readonly
          readOnly // Hacer que sea de solo lectura hasta que se seleccione
        />
      </div>
    </div>
  );
};

export default InputComponent;

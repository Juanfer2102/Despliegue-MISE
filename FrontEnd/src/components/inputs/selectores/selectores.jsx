import React from 'react';

/**
 * Componente de selección desplegable.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.id - El identificador del elemento select.
 * @param {Array} props.options - Opciones a mostrar en el select, cada una con una propiedad `value` y `label`.
 * @param {string} props.value - El valor seleccionado actualmente en el select.
 * @param {function} props.onChange - Función a llamar cuando se selecciona una opción. Recibe el valor de la opción seleccionada.
 * @param {string} props.type - Texto de la opción deshabilitada que se muestra como marcador de posición.
 * @param {string} props.name - El nombre del elemento select.
 * @returns {JSX.Element} - Un elemento select con las opciones proporcionadas.
 */
const SelectComponent = ({ id, options, value, onChange, type, name }) => {
  return (
    <select
      id={id}
      name={name}
      className="bg-transparent px-2 py-2.5 h-[3.5rem] w-full rounded-lg border font-sans text-lg font-normal focus:bg-transparent pr-8 appearance-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}  // Pasa el valor de la opción seleccionada
    >
      <option value="" disabled>{type}</option>
      {options.map((option) => (
        <option key={option.value} className="text-black" value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;

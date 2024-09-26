import React from 'react';
import { MultiSelect, MultiSelectItem } from '@tremor/react';

/**
 * Componente de selección múltiple.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.width - Clase CSS para definir el ancho del contenedor del componente.
 * @param {string} props.DataType - Texto que se muestra como etiqueta para el componente.
 * @param {string} props.name - Nombre del elemento de selección múltiple.
 * @param {string} props.widthInput - Clase CSS para definir el ancho del componente de selección.
 * @param {string} props.height - Clase CSS para definir la altura del componente de selección.
 * @param {function} props.onChange - Función a llamar cuando cambian las selecciones. Recibe el valor seleccionado.
 * @param {Array} [props.items=[]] - Array de opciones para el componente de selección múltiple. Cada opción debe tener propiedades `id_pregunta` (valor) y `descripcion` (texto de la opción).
 * @returns {JSX.Element} - Un componente de selección múltiple con las opciones proporcionadas.
 */
const Selectormultiple = ({ width, DataType, name, widthInput, height, onChange, items = [] }) => { // Definir items como array por defecto
  return (
    <div className={`text-textBg items-center text-start content-center flex flex-row`}>
      <div className={width}>
        <p className="font-semibold">{DataType}</p>
      </div>
      <div>
        <MultiSelect
          name={name}
          className={`${widthInput} ${height}`}
          onValueChange={onChange}
        >
          {items.length > 0 ? (
            items.map(item => (
              <MultiSelectItem key={item.id_pregunta} value={item.id_pregunta}>
                {item.descripcion}
              </MultiSelectItem>
            ))
          ) : (
            <p>No options available</p> // Mensaje alternativo si no hay elementos
          )}
        </MultiSelect>
      </div>
    </div>
  );
}

export default Selectormultiple;

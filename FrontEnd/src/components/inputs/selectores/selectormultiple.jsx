import React from 'react';
import { MultiSelect, MultiSelectItem } from '@tremor/react';

const Selectormultiple = ({ width, DataType, name, widthInput, height, onChange, items = [] }) => { 
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
            <p className="text-red-500">No options available</p> // Puedes cambiar el estilo del mensaje
          )}
        </MultiSelect>
      </div>
    </div>
  );
}

export default Selectormultiple;

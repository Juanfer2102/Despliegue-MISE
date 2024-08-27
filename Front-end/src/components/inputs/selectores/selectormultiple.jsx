import React from 'react';
import { MultiSelect, MultiSelectItem } from '@tremor/react';

const Selectormultiple = ({ width, DataType, name, widthInput, height, onChange }) => {
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
          <MultiSelectItem value="1">Option 1</MultiSelectItem>
          <MultiSelectItem value="2">Option 2</MultiSelectItem>
          <MultiSelectItem value="3">Option 3</MultiSelectItem>
        </MultiSelect>
      </div>
    </div>
  );
}

export default Selectormultiple;

import React from 'react';

const SelectComponent = ({ Select, options, value, onChange }) => {
  return (
    <select
      id={Select}
      className="bg-transparent caret-white px-4 py-2.5 h-full w-full rounded-lg outline-0 peer border font-sans text-lg font-normal focus:bg-transparent"
      value={value}
      onChange={(e) => onChange(Select, e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} className="text-black" value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;

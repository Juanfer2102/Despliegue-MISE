import React from 'react';

const MultiSelectComponent = ({ id, options, selectedValues, onChange, type }) => {
  const handleSelectionChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    onChange(value);
  };

  return (
    <select
      id={id}
      multiple
      className="bg-transparent caret-white px-4 py-2.5 h-full w-full rounded-lg outline-0 peer border font-sans text-lg font-normal focus:bg-transparent"
      value={selectedValues}
      onChange={handleSelectionChange}
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

export default MultiSelectComponent;

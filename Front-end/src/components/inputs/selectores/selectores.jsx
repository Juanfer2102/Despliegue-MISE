import React from 'react';

const SelectComponent = ({ Select, options, value, onChange }) => {
    const handleChange = (event) => {
        onChange(Select, event.target.value);
    };

    return (
        <select
            name={Select}
            value={value}
            onChange={handleChange}
            className="form-select block w-full h-12 p-2 rounded-md"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectComponent;

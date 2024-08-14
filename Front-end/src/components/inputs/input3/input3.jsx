import React from 'react';
import './input3.css'; // Asegúrate de incluir el archivo CSS

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
    <div className={`text-white items-center text-start content-center flex flex-row ${additionalClass}`}>
      <div className={width}>
        <p className="font-semibold text-textBg">{DataType}</p>
      </div>
      <div>
        <input
          className={`inputext border ${widthInput} ${height} rounded-md peer border-solid border-white bg-transparent placeholder:text-start placeholder:text-textBg pl-2 text:break-normal overflow-y-auto custom-scrollbar`}
          placeholder={inputPlaceholder}
          type={inputType}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputComponent;

import React from 'react'

const tarjetasModulos = ({tipoTarjeta, moduloicon}) => {
  return (
    <div className="py-4 px-5 justify-start">
      <div className="flex flex-row px-3 py-[0.73rem] gap-3 rounded-lg cursor-pointer hover:bg-principalGreen hover:scale-105 transition-all duration-150 ease-in-out">
        <i className={`fa-solid ${moduloicon} text-2xl`}></i>
        <p className="text-white pt-1.5 text-sm">{tipoTarjeta}</p>
      </div>
    </div>
  );
}

export default tarjetasModulos;
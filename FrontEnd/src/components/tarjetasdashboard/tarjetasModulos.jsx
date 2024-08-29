import React from 'react'

const TarjetasModulos = ({tipoTarjeta, moduloicon}) => {
  return (
   
      <div className="flex flex-row px-3 py-[0.50rem] gap-3 rounded-lg cursor-pointer hover:bg-principalGreen hover:scale-105 transition-all duration-150 ease-in-out">
        <i className={`fa-solid ${moduloicon} text-2xl`}></i>
        <p className="text-white pt-1.5 text-sm">{tipoTarjeta}</p>
      </div>

  );
}

export default TarjetasModulos;
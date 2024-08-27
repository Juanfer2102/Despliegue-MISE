import React from 'react';

const tarjetasEmpresasreg = ({numeroEmpresas, tipoTarjeta, empresaicon, URL}) => {
  return (
    <a 
      href={URL} 
      className="container bg-greyBlack rounded-xl p-8 cursor-pointer hover:bg-principalGreen hover:scale-105 transition-all"
    >
      <div className="flex flex-row">
        <i className={`fa-solid ${empresaicon} text-4xl`}></i>
        <p className="pl-2 text-4xl">{numeroEmpresas}</p>
      </div>
      <p className="mt-3 text-xl">{tipoTarjeta}</p>
    </a>
  );
}

export default tarjetasEmpresasreg;
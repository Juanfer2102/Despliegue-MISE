import React from 'react';

const tarjetasEmpresasreg = ({ numeroEmpresas, tipoTarjeta, empresaicon, URL }) => {
  return (
    <a
      href={URL}
      className="container bg-greyBlack rounded-xl p-4 md:p-6 lg:p-8 cursor-pointer hover:bg-principalGreen hover:scale-105 transition-all"
    >
      <div className="flex flex-col md:flex-row items-center">
        <i className={`fa-solid ${empresaicon} text-3xl md:text-4xl`}></i>
        <div className="text-center md:text-left mt-2 md:mt-0 md:pl-4">
          <p className="text-3xl md:text-4xl">{numeroEmpresas}</p>
          <p className="text-lg md:text-xl">{tipoTarjeta}</p>
        </div>
      </div>
    </a>
  );

}

export default tarjetasEmpresasreg;
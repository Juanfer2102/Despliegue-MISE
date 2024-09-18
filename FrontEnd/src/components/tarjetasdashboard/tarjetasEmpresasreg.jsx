import React from 'react';

const tarjetasEmpresasreg = ({ numeroEmpresas, tipoTarjeta, empresaicon, URL }) => {
  return (
    <a
      href={URL}
      className="w-full bg-greyBlack rounded-xl p-6 cursor-pointer hover:bg-principalGreen hover:scale-105 transition-all flex flex-row items-center justify-center space-y-4"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <i className={`fa-solid ${empresaicon} text-3xl md:text-4xl`}></i>
      <div className="text-center md:text-left mt-2 md:mt-0 md:pl-4 w-full">
          <p className="text-3xl md:text-4xl">{numeroEmpresas}</p>
          <p className="text-lg md:text-xl">{tipoTarjeta}</p>
        </div>
    </a>
  );
}

export default tarjetasEmpresasreg;

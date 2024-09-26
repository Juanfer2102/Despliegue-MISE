import React from 'react';

/**
 * Componente `tarjetasEmpresasreg`
 * 
 * Este componente representa una tarjeta de empresa que enlaza a una URL específica. La tarjeta muestra un ícono, el número de empresas y un tipo de tarjeta. Además, incluye efectos de transición y cambio de estilo en el hover.
 * 
 * Props:
 * - `numeroEmpresas` (string | number): El número de empresas que se mostrará en la tarjeta.
 * - `tipoTarjeta` (string): El tipo de tarjeta que se mostrará en la tarjeta.
 * - `empresaicon` (string): La clase del ícono Font Awesome que se mostrará en la tarjeta.
 * - `URL` (string): La URL a la que se redirigirá al hacer clic en la tarjeta.
 * 
 * @param {Object} props - Props del componente.
 * @param {string | number} props.numeroEmpresas - Número de empresas a mostrar.
 * @param {string} props.tipoTarjeta - Tipo de tarjeta a mostrar.
 * @param {string} props.empresaicon - Clase del ícono Font Awesome.
 * @param {string} props.URL - URL del enlace.
 * @returns {JSX.Element} Elemento JSX para la tarjeta de empresa.
 */
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

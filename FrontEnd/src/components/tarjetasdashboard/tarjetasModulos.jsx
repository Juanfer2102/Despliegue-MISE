import React from 'react';

/**
 * Componente `TarjetasModulos`
 * 
 * Este componente representa una tarjeta que muestra un ícono y un texto asociado a un módulo. La tarjeta tiene efectos de transición y cambio de estilo en el hover.
 * 
 * Props:
 * - `tipoTarjeta` (string): El texto que se mostrará en la tarjeta.
 * - `moduloicon` (string): La clase del ícono Font Awesome que se mostrará en la tarjeta.
 * 
 * @param {Object} props - Props del componente.
 * @param {string} props.tipoTarjeta - Texto que se mostrará en la tarjeta.
 * @param {string} props.moduloicon - Clase del ícono Font Awesome.
 * @returns {JSX.Element} Elemento JSX para la tarjeta del módulo.
 */
const TarjetasModulos = ({ tipoTarjeta, moduloicon }) => {
  return (
    <div className="flex flex-col xl:flex-row lg:flex-row items-center lg:items-start xl:items-start px-3 xl:py-[0.50rem] lg:py-[0.50rem] gap-2 xl:gap-3 lg:gap-3 rounded-lg cursor-pointer hover:bg-principalGreen hover:scale-105 transition-all duration-150 ease-in-out w-full">
      <i className={`fa-solid ${moduloicon} text-xl xl:text-2xl`}></i>
      <p className="text-white text-center xl:text-left lg:text-left text-xs xl:text-sm lg:text-sm xl:pt-1.5 lg:pt-1.5 whitespace-nowrap">{tipoTarjeta}</p>
    </div>
  );
}

export default TarjetasModulos;

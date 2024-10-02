import React from 'react';

/**
 * Componente de Modal que se utiliza para mostrar un bloque de contenido centrado con estilo personalizable.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.texto - Texto que se mostrará en el modal.
 * @param {string} props.colorborde - Clase de Tailwind CSS para el color del borde.
 * @param {string} props.colorhover - Clase de Tailwind CSS para el color y efecto al pasar el ratón sobre el modal.
 * @returns {JSX.Element} - Un modal con estilo personalizado y efectos de transición.
 */
const Modal = ({ texto, colorborde, colorhover }) => {
  return (
    <div
      className={`
        flex justify-center items-center
        w-full aspect-square
        min-w-[120px] max-w-[240px]
        border ${colorborde} rounded-xl
        p-4 sm:p-6 md:p-8
        overflow-hidden
        ${colorhover}
        transition-all duration-150 ease-in
        hover:scale-105
        cursor-pointer
      `}
    >
      <p className="text-center font-semibold text-white text-xs sm:text-sm md:text-base uppercase break-words">
        {texto}
      </p>
    </div>
  );
}

export default Modal;

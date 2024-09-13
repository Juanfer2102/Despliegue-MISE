import React from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

const Modal = ({ id, texto, colorborde, colorhover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirecciona a la vista de edición del módulo con el id correspondiente
    navigate(`/editar-modulos/${id}`);
  };

  return (
    <div
      onClick={handleClick}
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
};

export default Modal;

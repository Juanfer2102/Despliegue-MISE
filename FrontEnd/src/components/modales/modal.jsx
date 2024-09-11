import React from 'react'

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

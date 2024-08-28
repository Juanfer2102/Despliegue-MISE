import React from 'react'

const Modal = ({texto, colorborde, colorhover}) => {
  return (
    <div className={`flex w-60 h-60 custom-scrollbar border ${colorborde} rounded-xl justify-center items-center text-sm uppercase p-12 overflow-hidden ${colorhover} ease-in duration-150`}>
      <p className="text-center font-semibold text-white">{texto}</p>
    </div>
  );
}
export default Modal;

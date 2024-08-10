import React from 'react';

const Boton = ({ type }) => {
  return (
    <div
      className="bg-principalGreen rounded-md text-white text-center font-semibold cursor-pointer w-[6rem] h-10 p-2"
      type={type}
    >
      <p>Guardar</p>
    </div>
  );
};

export default Boton;





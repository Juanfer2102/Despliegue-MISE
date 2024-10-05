// Boton.jsx
import React from 'react';

/**
 * Componente de botón reutilizable para la interfaz de usuario.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onClick - Función que se ejecuta al hacer clic en el botón.
 * @param {string} props.text - Texto que se muestra en el botón.
 * 
 * @returns {JSX.Element} - Botón estilizado con texto y funcionalidad de clic.
 */
const Boton = ({ onClick, text }) => {
  return (
    <div
      className="bg-principalGreen rounded-md text-white text-center font-semibold cursor-pointer w-[10rem] h-auto p-2"
      type="submit"
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Boton;





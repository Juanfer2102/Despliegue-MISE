// Modalopciones.jsx
import React from 'react';

/**
 * Componente de Modal que muestra un mensaje y un botón para redirigir a una URL especificada.
 *
 * @param {Object} props - Props del componente.
 * @param {string} props.texto - Texto que se muestra en el mensaje del modal y en el botón.
 * @param {string} props.URL - URL a la que el botón redirige al hacer clic.
 *
 * @returns {JSX.Element} - Un modal con un mensaje y un botón para redirigir a la URL proporcionada.
 */
const Modalopciones = ({ texto, URL }) => {
  return (
    <div className="flex flex-col gap-2 text-white w-full max-w-sm">
      <p className="text-lg sm:text-xl text-center sm:text-left">{texto}</p>
      <div className="bg-greyBlack rounded-xl p-4 sm:p-6">
        <a href={URL} className="block w-full">
          <button
            className="w-full sm:w-44 h-10 px-4 tracking-wide font-semibold text-base sm:text-lg 
                       transition-colors duration-150 transform 
                       border border-solid rounded-lg 
                       hover:bg-principalGreen hover:text-white hover:border-principalGreen
                       focus:outline-none focus:ring-2 focus:ring-principalGreen focus:ring-opacity-50"
          >
            Ver {texto}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Modalopciones;

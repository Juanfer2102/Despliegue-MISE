import React from 'react'

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
}

export default Modalopciones;

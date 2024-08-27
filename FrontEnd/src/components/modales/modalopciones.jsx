import React from 'react'

export const modalopciones = ({texto, URL}) => {
  return (
    <div className="flex flex-col gap-1 text-white">
      <p className="text-xl">{texto}</p>
      <div className="container bg-greyBlack rounded-xl gap-3 text-center h-[5rem] p-8 flex justify-center items-center">
        <div className="flex justify-center items-center">
          <a href={URL}>
            <button
              className="w-44 h-10 tracking-wide font-semibold text-lg transition-colors duration-150 transform border-solid rounded-lg hover:bg-principalGreen hover:text-white hover:border-solid border hover:border-principalGreen"
            >
              Ver {texto}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

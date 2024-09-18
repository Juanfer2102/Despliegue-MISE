import React from "react";

const getColor = (calificacion) => {
  if (calificacion < 25) return "text-red"; // Color rojo para calificaciones menores a 25
  if (calificacion >= 25 && calificacion < 65) return "text-amarillo"; // Color amarillo para calificaciones entre 25 y 65
  return "text-principalGreen"; // Color verde para calificaciones mayores o iguales a 65
};

const TablaPreguntas = ({ calificaciones = [] }) => {
  console.log(calificaciones);

  // Aplana la estructura de módulos y preguntas en una sola lista de preguntas
  const preguntas = calificaciones.flatMap(modulo => modulo.preguntas);

  return (
    <div className="overflow-x-auto rounded-xl w-full h-full">
      <div className="w-full">
        <div className="bg-greyBlack border-textBg rounded-t-xl text-white sticky top-0 z-10 flex">
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">Pregunta</div>
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold hidden sm:block">Módulo</div>
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">Calificación</div>
        </div>
        <div className="text-white overflow-y-auto">
          {preguntas.length > 0 ? (
            preguntas.map((pregunta, index) => (
              <div key={pregunta.id_pregunta} className="flex border-r border-l border-b border-white">
                <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm">{pregunta.descripcion}</div>
                <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm hidden sm:block">Módulo {pregunta.id_modulo}</div>
                <div className={`flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm ${getColor(pregunta.calificacion)} ${index === preguntas.length - 1 ? 'rounded-b-xl' : ''}`}>
                  {pregunta.calificacion.toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">No hay calificaciones disponibles.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablaPreguntas;

import React from "react";

const preguntas = [
  {
    nombre:
      "¿La gerencia utiliza herramientas para la gestión de su tiempo y actividades?",
    modulo: "Capacidades gerenciales",
    calificacion: 20.0,
    desarrollo: "No Desarrollado",
  },
  {
    nombre:
      "¿La gerencia cuenta con objetivos y metas claras en cada área (financiera, clientes/mercado, procesos y desarrollo y aprendizaje) de su empresa? (mapa táctico)",
    modulo: "Capacidades gerenciales",
    calificacion: 52.0,
    desarrollo: "Parcialmente Desarrollado",
  },
  {
    nombre: "¿La empresa sabe cómo utilizar sus datos para tomar decisiones?",
    modulo: "Mejora de operaciones",
    calificacion: 92.0,
    desarrollo: "Completamente Desarrollado",
  },
];

const getColor = (calificacion) => {
    if (calificacion < 25) return "text-red"; // Color rojo para calificaciones menores a 25
    if (calificacion >= 25 && calificacion < 65) return "text-amarillo"; // Color amarillo para calificaciones entre 25 y 65
    return "text-principalGreen"; // Color verde para calificaciones mayores o iguales a 65
  };

const TablaPreguntas = () => {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full">
        <thead className="bg-greyBlack border-textBg rounded-t-xl text-white sticky top-0 z-10">
          <tr>
            <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Nombre</th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm hidden sm:table-cell">Módulo</th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Calificación</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {preguntas.map((pregunta, index) => (
            <tr key={index} className="border-r border-l border-b border-white">
              <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm">{pregunta.nombre}</td>
              <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm hidden sm:table-cell">{pregunta.modulo}</td>
              <td className={`px-2 sm:px-4 py-2 text-xs sm:text-sm ${getColor(pregunta.calificacion)} ${index === preguntas.length - 1 ? 'rounded-b-xl' : ''}`}>
                {pregunta.calificacion.toFixed(2)}
                <span className="text-gray text-xs sm:text-sm ml-1">
                  ({pregunta.desarrollo})
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPreguntas;

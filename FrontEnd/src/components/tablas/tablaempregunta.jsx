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
    <div className="overflow-x-auto">
      <table className="overflow-auto w-full rounded-xl">
        <thead className="bg-greyBlack border-textBg rounded-xl text-white top-0 z-10">
          <tr>
            <th className="text-white px-4 py-2 text-left">
              Nombre
            </th>
            <th className="text-white px-4 py-2 text-left">
              Módulo
            </th>
            <th className="text-white px-4 py-2 text-left">
              Calificación
            </th>
          </tr>
        </thead>
        <tbody className=" text-white">
          {preguntas.map((pregunta, index) => (
            <tr key={index} className="border-r border-l border-b border-white">
              <td className="px-4 py-2 w-[25rem]">{pregunta.nombre}</td>
              <td className="px-4 py-2 w-[13rem]">{pregunta.modulo}</td>
              <td className={`px-4 py-2 w-[13rem] rounded-b-xl ${getColor(pregunta.calificacion)}`}>
                {pregunta.calificacion.toFixed(2)}
                <span className="text-gray text-sm">
                  {" "}
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

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
  {
    nombre: "¿La empresa sabe cómo utilizar sus datos para tomar decisiones?",
    modulo: "Mejora de operaciones",
    calificacion: 92.0,
    desarrollo: "Completamente Desarrollado",
  },
  {
    nombre: "¿La empresa sabe cómo utilizar sus datos para tomar decisiones?",
    modulo: "Mejora de operaciones",
    calificacion: 92.0,
    desarrollo: "Completamente Desarrollado",
  },
];

// Estilos en JSX
const styles = {
  customScrollbar: {
    scrollbarWidth: '13px',
    scrollbarColor: '#888 #262b32',
  },
  customScrollbarTrack: {
    background: '#262b32',
    borderRadius: '12px',
  },
  customScrollbarThumb: {
    background: '#888',
    borderRadius: '10px',
  },
  customScrollbarThumbHover: {
    background: '#555',
  }
};

const getColor = (calificacion) => {
  if (calificacion < 25) return "text-red"; // Color rojo para calificaciones menores a 25
  if (calificacion >= 25 && calificacion < 65) return "text-amarillo"; // Color amarillo para calificaciones entre 25 y 65
  return "text-principalGreen"; // Color verde para calificaciones mayores o iguales a 65
};

const TablaPreguntas = () => {
  return (
    <div className="overflow-x-auto rounded-xl">
      <div className="w-full">
        <div className="bg-greyBlack border-textBg rounded-t-xl text-white sticky top-0 z-10 flex">
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">Pregunta</div>
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold hidden sm:block">Módulo</div>
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">Calificación</div>
        </div>
        <div className="text-white overflow-y-auto max-h-[15rem]" style={styles.customScrollbar}>
          {preguntas.map((pregunta, index) => (
            <div key={index} className="flex border-r border-l border-b border-white">
              <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm">{pregunta.nombre}</div>
              <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm hidden sm:block">{pregunta.modulo}</div>
              <div className={`flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm ${getColor(pregunta.calificacion)} ${index === preguntas.length - 1 ? 'rounded-b-xl' : ''}`}>
                {pregunta.calificacion.toFixed(2)}
                <span className="text-gray text-xs sm:text-sm ml-1">
                  ({pregunta.desarrollo})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TablaPreguntas;

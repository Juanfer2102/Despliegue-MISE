import React from "react";

// Estilos personalizados para la barra de desplazamiento en JSX
const styles = {
  customScrollbar: {
      scrollbarWidth: '13px',  // Ancho de la barra de desplazamiento
      scrollbarColor: '#888 #262b32',  // Color de la barra (thumb y track)
  },
  customScrollbarTrack: {
      background: '#262b32',  // Fondo de la pista de la barra de desplazamiento
      borderRadius: '12px',  // Bordes redondeados para la pista
  },
  customScrollbarThumb: {
      background: '#888',  // Color del thumb de la barra de desplazamiento
      borderRadius: '10px',  // Bordes redondeados para el thumb
  },
  customScrollbarThumbHover: {
      background: '#555',  // Color del thumb al pasar el ratón por encima
  }
};

// Función para obtener el color basado en la calificación
const getColor = (calificacion) => {
  if (calificacion < 25) return "text-red";  // Color rojo para calificaciones menores a 25
  if (calificacion >= 25 && calificacion < 65) return "text-amarillo";  // Color amarillo para calificaciones entre 25 y 65
  return "text-principalGreen";  // Color verde para calificaciones mayores o iguales a 65
};

// Componente que recibe calificaciones y las muestra en una tabla
const TablaPreguntas = ({ calificaciones = [] }) => {
  console.log(calificaciones);

  // Aplanar la estructura de módulos y preguntas en una sola lista de preguntas
  const preguntas = calificaciones.flatMap(modulo => modulo.preguntas);

  return (
    <div className="overflow-x-auto rounded-xl w-full h-full">
      <div className="w-full">
        {/* Cabecera de la tabla con nombres de columnas */}
        <div className="bg-greyBlack border-textBg rounded-t-xl text-white sticky top-0 z-10 flex">
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">Pregunta</div>
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold hidden sm:block">Módulo</div>
          <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">Calificación</div>
        </div>

        {/* Contenedor para la lista de preguntas con calificaciones */}
        <div className="text-white max-h-[33rem] overflow-y-auto" style={styles.customScrollbar}>
          {preguntas.length > 0 ? (
            preguntas.map((pregunta, index) => (
              <div key={pregunta.id_pregunta} className="flex border-r border-l border-b border-white">
                {/* Descripción de la pregunta */}
                <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm">{pregunta.descripcion}</div>

                {/* Número del módulo (solo visible en pantallas más grandes) */}
                <div className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm hidden sm:block">Módulo {pregunta.id_modulo}</div>

                {/* Calificación con color dependiendo del valor */}
                <div className={`flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm ${getColor(pregunta.calificacion)} ${index === preguntas.length - 1 ? 'rounded-b-xl' : ''}`}>
                  {pregunta.calificacion.toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            // Mensaje de error si no hay calificaciones disponibles
            <div className="text-center py-4">No hay calificaciones disponibles.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablaPreguntas;

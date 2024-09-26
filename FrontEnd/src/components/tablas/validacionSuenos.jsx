import React from "react";

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

// Arreglo de estilos para la validación de sueños con colores de borde diferentes
const validacionDeSueños = [
  {
    bordeColor: "border-azulclaro",
  },
  {
    bordeColor: "border-fucsia",
  },
  {
    bordeColor: "border-amarillo",
  },
];

/**
 * Componente `ValidacionDeSueños`
 * 
 * Este componente muestra una lista de sueños con una validación visual basada en colores.
 * Utiliza una estructura de cuadrícula para mostrar los sueños en una caja de desplazamiento.
 * 
 * Props:
 * - `diagnosticos` (array): Un arreglo de objetos que contienen una lista de sueños. Cada sueño es un objeto con una propiedad `sueño` que representa el texto del sueño.
 * 
 * @param {Object} props - Props del componente.
 * @param {Array} props.diagnosticos - Lista de objetos de diagnóstico que contienen los sueños a mostrar.
 * @returns {JSX.Element} Elemento JSX para la visualización de sueños.
 */
const ValidacionDeSueños = ({ diagnosticos }) => {
  return (
    <div className="p-4 bg-greyBlack xl:w-[45rem] lg:w-[35rem] text-white rounded-lg" style={styles.customScrollbar}>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">🌥️</span>
        <h2 className="text-lg font-semibold">Validación de sueños</h2>
      </div>
      <div className="grid gap-5 xl:max-h-[30rem] lg:max-h-[30rem] xl:h-[30rem] lg:h-[30rem] overflow-y-auto" style={{ gridTemplateColumns: 'repeat(2, 1fr)', ...styles.customScrollbar }}>
        {diagnosticos.map((diagnostico, index) =>
          diagnostico.suenos.map((sueno, subIndex) => (
            <div
              key={`${index}-${subIndex}`}
              className={`flex justify-center items-center bg-transparent border-l-4 ${validacionDeSueños[subIndex]?.bordeColor} rounded-md p-4 text-center text-white h-40 sm:h-48 md:h-56`}>
              <p>{sueno.sueño}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ValidacionDeSueños;

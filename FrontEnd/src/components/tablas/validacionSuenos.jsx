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

const validacionDeSueños = [
  {
    texto: "Deseo definir mi propósito empresarial",
    bordeColor: "border-azulclaro",
  },
  {
    texto: "Deseo definir mis estrategias de promoción y publicidad",
    bordeColor: "border-fucsia",
  },
  {
    texto: "Deseo definir mi margen de contribución",
    bordeColor: "border-amarillo",
  },
];

const ValidacionDeSueños = ({ diagnosticos }) => {
  return (
    <div className="p-4 bg-greyBlack xl:w-[45rem] lg:w-[35rem] text-white rounded-lg" style={styles.customScrollbar}>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">🌥️</span>
        <h2 className="text-lg font-semibold">Validación de sueños</h2>
      </div>
      <div className="grid gap-5 xl:max-h-[32rem] lg:max-h-[32rem] xl:h-[32rem] lg:h-[32rem] overflow-y-auto" style={{ gridTemplateColumns: 'repeat(2, 1fr)', ...styles.customScrollbar }}>
        {diagnosticos.map((diagnostico, index) =>
          diagnostico.suenos.map((sueno, subIndex) => (
            <div
              key={`${index}-${subIndex}`}
              className={`flex justify-center items-center bg-gray-700 border-l-4 ${validacionDeSueños[subIndex]?.bordeColor} rounded-md p-4 text-center text-white h-40 sm:h-48 md:h-56`}>
              <p>{sueno.sueño}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ValidacionDeSueños;

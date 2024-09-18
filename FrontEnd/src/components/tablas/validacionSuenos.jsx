import React from "react";

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
    <div className="p-4 bg-greyBlack xl:w-[45rem] lg:w-[35rem] text-white rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">🌥️</span>
        <h2 className="text-lg font-semibold">Validación de sueños</h2>
      </div>
      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
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

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

const ValidacionDeSueños = (URL) => {
  return (
    <div className="p-4 bg-greyBlack text-white rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">🌥️</span>
        <h2 className="text-lg font-semibold">Validación de sueños</h2>
      </div>
      <div className="flex space-x-4">
        {validacionDeSueños.map((item, index) => (
          <a href={`${URL}`}>
            <div
              key={index}
              className={` flex flex-1 w-60 h-60 justify-center items-center text-sm uppercase overflow-hidden rounded-xl border-2 ${item.bordeColor}`}
            >
              <p className="text-center font-bold">{item.texto}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ValidacionDeSueños;

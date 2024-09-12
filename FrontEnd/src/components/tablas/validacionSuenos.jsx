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
    <div className="p-4 bg-greyBlack xl:w-[45rem] lg:w-[35rem] text-white rounded-lg">
      <div className="flex items-center space-x-2">
        <span className="text-lg">🌥️</span>
        <h2 className="text-lg font-semibold">Validación de sueños</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-[10.5rem] lg:gap-[10.5rem] gap-5 xl:items-center lg:items-center xl:pt-6 lg:pt-6">
        {validacionDeSueños.map((item, index) => (
          <a href={`${URL}`} key={index} className="block">
            <div
              className={`flex justify-center items-center h-40 sm:h-48 md:h-56 xl:h-40 lg:h-40 xl:w-[10rem] lg:w-[10rem] text-sm uppercase overflow-hidden rounded-xl border-2 ${item.bordeColor}`}
            >
              <p className="text-center font-bold p-2">{item.texto}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ValidacionDeSueños;

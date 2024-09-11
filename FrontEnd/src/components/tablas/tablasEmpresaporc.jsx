import React from "react";

const TablasEmpresaporc = () => {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full rounded-xl">
        <thead className="bg-greyBlack border-textBg rounded-xl text-white sticky top-0 z-10">
          <tr>
            <th className="p-3 md:p-5 text-left">Nombre</th>
            <th className="p-3 md:p-5 text-left hidden sm:table-cell">Sector</th>
            <th className="p-3 md:p-5 text-left hidden md:table-cell">Encargado</th>
            <th className="p-3 md:p-5 text-center">Desarrollo (%)</th>
          </tr>
        </thead>
        <tbody className="divide-y border border-textBg border-t-0 rounded">
          <tr className="bg-transparent border-transparent">
            <td className="p-3 md:p-5 md:py-8 text-xs sm:text-sm text-white">
              nit
            </td>
            <td className="p-3 md:p-5 text-xs sm:text-sm text-white hidden sm:table-cell">
              nombre
            </td>
            <td className="p-3 md:p-5 text-xs sm:text-sm text-white hidden md:table-cell">
              nombre
            </td>
            <td className="p-3 md:p-5 text-xs sm:text-sm text-center">
              <div className="inline-block p-2 px-3 md:px-4 tracking-wide transition-colors bg-principalGreen transform border-solid rounded-lg text-white font-semibold">
                96%
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default TablasEmpresaporc;
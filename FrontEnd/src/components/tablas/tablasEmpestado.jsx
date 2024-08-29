import React from "react";

const TablasEmpestado = () => {
  return (
    <table className="overflow-auto w-full rounded-xl">
      <thead className="bg-greyBlack border-textBg rounded-xl text-white top-0 z-10">
        <tr>
          <th className="p-5 text-left">Nombre</th>
          <th className="p-5 text-left">Sector</th>
          <th className="p-5 text-center">Estado</th>
        </tr>
      </thead>
      <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
        <tr className="bg-transparent border-transparent">
          <td className="p-5 py-8 text-sm w-[6rem] text-white whitespace-nowrap">
            nit
          </td>
          <td className="p-5 text-sm w-[6rem] text-white whitespace-nowrap">
            nombre
          </td>
          <td className="p-5 text-sm w-[6rem] text-center whitespace-nowrap">
            <div className="p-2 pl-4 pr-5 tracking-wide text-sm transition-colors bg-principalGreen transform border-solid rounded-lg text-white font-semibold">
              Aceptado
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablasEmpestado;
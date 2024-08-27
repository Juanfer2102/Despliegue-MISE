
 import React from 'react'
 
 export const InfoEmpresas = ({ nombre, sector_empresarial, nit }) => {
   return (
    <tr className="bg-transparent border-transparent">
    <td
      className="p-5 py-8 text-sm w-[4rem] text-white whitespace-nowrap"
    >
      {nit}
    </td>
    <td
      className="p-5 text-sm w-[4rem] text-white whitespace-nowrap"
    >
      {nombre}
    </td>
    <td
      className="p-5 text-sm w-[4rem] text-left whitespace-nowrap"
    >
      <span
        className="font-medium tracking-wider text-white rounded-lg"
        >{sector_empresarial}</span
      >
    </td>
    <td
      className="p-5 text-sm w-[4rem] text-center whitespace-nowrap"
    >
      <button
        className="p-2 pl-4 pr-5 tracking-wide text-sm transition-colors duration-200 bg-transparent transform border-solid rounded-lg hover:bg-principalGreen hover:text-white hover:border-solid border hover:border-principalGreen"
      >
        Ver Detalles
      </button>
    </td>
  </tr>

   );
 }
 

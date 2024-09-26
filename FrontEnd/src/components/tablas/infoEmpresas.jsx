import React from "react";
import PropTypes from "prop-types";

export const InfoEmpresas = ({ nombre, sector_empresarial, nit }) => {
  return (
    <tr className="bg-transparent border-transparent">
      <td className="p-3 text-sm text-white whitespace-nowrap">
        {nit}
      </td>
      <td className="p-3 text-sm text-white whitespace-nowrap">
        {nombre}
      </td>
      <td className="p-3 text-sm text-left whitespace-nowrap">
        <span className="font-medium text-white rounded-lg">
          {sector_empresarial}
        </span>
      </td>
      <td className="p-3 text-sm text-center whitespace-nowrap">
        <a href="/dashboard-emp">
          <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
            Ver Detalles
          </button>
        </a>
      </td>
    </tr>
  );
  
};

InfoEmpresas.PropTypes = {
  nombre: PropTypes.string.isRequired,
  sector_empresarial: PropTypes.string.isRequired,
  nit: PropTypes.number.isRequired,
};

import React from "react";
import PropTypes from "prop-types";

export const InfoEmpresas = ({ nombre, sector_empresarial, nit }) => {
  return (
    <tr className="bg-transparent border-transparent"> {/* Fila de la tabla */}
      <td className="p-3 text-sm text-white whitespace-nowrap">
        {nit} {/* Muestra el NIT de la empresa */}
      </td>
      <td className="p-3 text-sm text-white whitespace-nowrap">
        {nombre} {/* Muestra el nombre de la empresa */}
      </td>
      <td className="p-3 text-sm text-left whitespace-nowrap">
        <span className="font-medium text-white rounded-lg">
          {sector_empresarial} {/* Muestra el sector empresarial */}
        </span>
      </td>
      <td className="p-3 text-sm text-center whitespace-nowrap">
        <a href="/dashboard-emp"> {/* Enlace para redirigir */}
          <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
            Ver Detalles {/* Botón que redirige al dashboard */}
          </button>
        </a>
      </td>
    </tr>
  );
};

InfoEmpresas.propTypes = {
  nombre: PropTypes.string.isRequired, // Validación de tipo para el nombre de la empresa
  sector_empresarial: PropTypes.string.isRequired, // Validación de tipo para el sector empresarial
  nit: PropTypes.number.isRequired, // Validación de tipo para el NIT
};

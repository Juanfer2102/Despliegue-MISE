import React, { useEffect, useState } from 'react';
import InfoAE from './infoAE'; // Asegúrate de importar tu modal

const TableComponent = () => {
  const [empresas, setEmpresas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(true); // Estado para controlar la visibilidad del buscador y filtros

  useEffect(() => {
    fetch('http://localhost:8000/api/v2/empresas/')
      .then((response) => response.json())
      .then((data) => {
        const empresasFiltradas = data.filter(empresa => empresa.estado === '1');
        setEmpresas(empresasFiltradas);
        setShowFilters(empresasFiltradas.length > 0); // Actualiza la visibilidad de los filtros
      })
      .catch((error) => console.error('Error fetching empresas:', error));
  }, []);

  // Filtra empresas según el término de búsqueda
  const filteredEmpresas = empresas.filter(empresa =>
    empresa.nombre_empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    empresa.gerente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    empresa.razon_social.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {showFilters && (
        <div className="flex items-center py-3 gap-4 text-left justify-end text-sm">
          <input
            type="text"
            placeholder="Buscar..."
            className="border border-white rounded-lg bg-transparent -m-2 p-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass text-white"></i>
          <div className="flex items-center">
            <div className="items-center flex gap-4 border-2 rounded-lg border-white bg-transparent text-white text-left p-2 pr-3 pl-3">
              <p>Más nuevas</p>
              <i className="fa-solid fa-filter"></i>
            </div>
          </div>
        </div>
      )}
      
      <table className="overflow-auto w-full justify-center rounded-xl">
        <thead className="bg-greyBlack border-textBg rounded-xl text-white top-0 z-10">
          {filteredEmpresas.length > 0 ? (
            <tr>
              <th className="p-5 text-left">Empresa</th>
              <th className="p-5 text-left">Representante</th>
              <th className="p-5 text-left">Razón Social</th>
              <th className="p-5 text-center">Información</th>
              <th className="p-5 text-center"></th>
            </tr>
          ) : (
            <tr>
              <th className="p-5 text-left" colSpan="5">
                Actualmente no se encuentran empresas disponibles para aceptar
              </th>
            </tr>
          )}
        </thead>
        <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
          {filteredEmpresas.map((empresa) => (
            <InfoAE
              nit={empresa.nit}
              key={empresa.nit}
              nombre_empresa={empresa.nombre_empresa}
              representante={empresa.gerente}
              razon_social={empresa.razon_social}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;

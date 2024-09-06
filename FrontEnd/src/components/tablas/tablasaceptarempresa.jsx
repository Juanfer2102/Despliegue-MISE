import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InfoAE from './InfoAE'; // Asegúrate de que el nombre del componente coincida

const TableComponent = () => {
  const [empresas, setEmpresas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(true); // Estado para controlar la visibilidad del buscador y filtros
  const location = useLocation(); // Hook para acceder a la ubicación actual

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v2/empresas/');
        const data = await response.json();
        // Convertir datos en array si es necesario
        const dataArray = Array.isArray(data) ? data : Object.values(data);
        // Filtrar solo las empresas activas (estado === 1)
        const empresasFiltradas = dataArray.filter(empresa => empresa.estado === 1);
        setEmpresas(empresasFiltradas);
        setShowFilters(empresasFiltradas.length > 0); // Actualiza la visibilidad de los filtros
      } catch (error) {
        console.error('Error fetching empresas:', error);
      }
    };

    fetchEmpresas();
  }, [location]); // Dependencia de la ubicación para reiniciar el estado

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
          <tr>
            <th className="p-5 text-left">Empresa</th>
            <th className="p-5 text-left">Representante</th>
            <th className="p-5 text-left">Razón Social</th>
            <th className="p-5 text-center">Información</th>
            <th className="p-5 text-center"></th>
          </tr>
        </thead>
        <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
          {filteredEmpresas.length > 0 ? (
            filteredEmpresas.map((empresa) => (
              <InfoAE
                nit={empresa.nit}
                key={empresa.nit}
                nombre_empresa={empresa.nombre_empresa}
                representante={empresa.gerente}
                razon_social={empresa.razon_social}
              />
            ))
          ) : (
            <tr>
              <td className="p-5 text-left" colSpan="5">
                Actualmente no se encuentran empresas disponibles para aceptar
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;

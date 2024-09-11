import { useEffect, useState } from 'react';
import InfoAE from './infoAE'; // Asegúrate de importar tu componente InfoAE
import Buscador from '../inputs/buscador/buscador';

const TableComponent = () => {
  const [empresas, setEmpresas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState(''); // Para filtrar por rol
  const [showFilters, setShowFilters] = useState(true); // Estado para controlar la visibilidad del buscador y filtros

  useEffect(() => {
    // Función para obtener empresas
    const fetchEmpresas = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v2/empresas/');
        const data = await response.json();
        const empresasFiltradas = data.filter(empresa => empresa.estado === '1');
        setEmpresas(empresasFiltradas);
        setShowFilters(empresasFiltradas.length > 0); // Actualiza la visibilidad de los filtros
      } catch (error) {
        console.error('Error fetching empresas:', error);
      }
    };

    // Función para obtener roles
    const fetchRoles = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v2/roles/');
        const data = await response.json();
        setRoles(data);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchEmpresas();
    fetchRoles();
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Función para manejar el cambio de rol
  const handleRoleChange = (roleId) => {
    setSelectedRoleId(roleId);
  };

  // Filtrar empresas según el término de búsqueda y el rol seleccionado
  const filteredEmpresas = empresas
    .filter(empresa =>
      empresa.nombre_empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      empresa.gerente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      empresa.razon_social.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(empresa =>
      selectedRoleId === '' || empresa.id_rol === parseInt(selectedRoleId)
    );

  return (
    <>
      {showFilters && (
        <Buscador
          onSearch={handleSearch}
          onRoleChange={handleRoleChange}  // Manejador de cambio de rol
          placeholder={"Buscar Empresas..."}
          roles={roles}  // Pasamos los roles obtenidos
          contexto=""  // Definimos el contexto como 'empresas'
        />
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

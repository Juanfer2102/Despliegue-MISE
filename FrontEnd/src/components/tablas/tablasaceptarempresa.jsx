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

  // Función para manejar la búsqueda
  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  // };

  return (
    <>
      {/* <div className='flex flex-col lg:flex-row w-full'>
        {showFilters && (
          <Buscador
            onSearch={handleSearch}
            onRoleChange={handleRoleChange}  // Manejador de cambio de rol
            placeholder={"Buscar Empresas..."}
            roles={roles}  // Pasamos los roles obtenidos
            contexto=""  // Definimos el contexto como 'empresas'
          />
        )}
      </div> */}

      <div className="w-full rounded-xl bg-greyBg">
        <div className="bg-greyBlack border-textBg rounded-t-xl text-white z-10">
          {filteredEmpresas.length > 0 ? (
            <div className="bg-greyBlack border-textBg rounded-t-xl text-white flex flex-col lg:flex-row">
              <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Empresa</div>
              <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Representante</div>
              <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Razón Social</div>
              <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Información</div>
              <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0 lg:block sm:hidden md:hidden"></div>
            </div>
          ) : (
            <div className="p-4 text-left text-sm sm:text-base">
              Actualmente no se encuentran empresas disponibles para aceptar
            </div>
          )}
        </div>

        <div className="divide-y border border-textBg border-t-0 rounded-b-xl overflow-y-auto max-h-[35rem] custom-scrollbar">
          {filteredEmpresas.map((empresa) => (
            <InfoAE
              key={empresa.nit}
              nit={empresa.nit}
              nombre_empresa={empresa.nombre_empresa}
              representante={empresa.gerente}
              razon_social={empresa.razon_social}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TableComponent;

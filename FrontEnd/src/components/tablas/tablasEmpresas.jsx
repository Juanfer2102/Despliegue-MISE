import React, { useState, useEffect } from "react";
import Buscador from "../../components/inputs/buscador/buscador";

export const TablasEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v2/empresas/");
        const data = await response.json();
        setEmpresas(data);
      } catch (error) {
        console.error("Error fetching empresas:", error);
      }
    };

    fetchEmpresas();
  }, []);

  // Filtrar empresas con estado 2
  const empresasConEstado2 = empresas.filter(
    (empresa) => empresa.estado === 2 && empresa.diagnostico === 1
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row w-full py-4'>
        <Buscador
          onSearch={handleSearch}
          placeholder={"Buscar Empresas..."}
          roles={[]}  // No pasamos roles porque no es necesario para empresas
          contexto="empresas"  // Definimos el contexto
        />
      </div>

      <div className="overflow-x-auto w-full rounded-xl bg-greyBg">
        <div className="flex flex-col">
          <div className="flex xl:flex-row min-lg-flex-row max-md:flex-col bg-greyBlack text-white font-semibold">
            <div className="flex-1 p-5 xl:text-left text-center">NIT</div>
            <div className="flex-1 p-5 xl:text-left text-center">Nombre</div>
            <div className="flex-1 p-5 xl:text-left text-center">Sector empresarial</div>
            <div className="flex-1 p-5 text-center">Información</div>
          </div>

          <div className="divide-y border max-h-[25rem] md:max-h-[50rem] overflow-y-auto custom-scrollbar border-textBg border-t-0 rounded">
            {empresasConEstado2
              .filter(empresa =>
                `${empresa.nit} ${empresa.nombre_empresa}`.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((empresa) => (
                <div key={empresa.nit} className="flex flex-col lg:flex-row text-white">
                  <div className="flex-1 p-5 xl:text-left text-center">{empresa.nit}</div>
                  <div className="flex-1 p-5 xl:text-left text-center">{empresa.nombre_empresa}</div>
                  <div className="flex-1 p-5 xl:text-left text-center">{empresa.sector}</div>
                  <div className="flex-1 p-5 text-center">
                    <a href="/dashboard-emp">
                      <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                        Ver Detalles
                      </button>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

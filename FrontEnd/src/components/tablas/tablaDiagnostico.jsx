import { useEffect, useState } from 'react';
import InfoDiag from './infoDiagnostico';
import Buscador from '../inputs/buscador/buscador';

const TablaDiagnostico = () => {
    const [empresas, setEmpresas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Petición para obtener las empresas desde la API
    useEffect(() => {
        const fetchEmpresas = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/empresas/');
                const data = await response.json();

                // Filtrar empresas que tienen diagnostico_value igual a 0 y estado igual a 2
                const empresasFiltradas = data.filter(empresa => empresa.diagnostico_value === 0 && empresa.estado === 2);
                setEmpresas(empresasFiltradas);
                console.log(empresasFiltradas);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchEmpresas();
    }, []);

    // Actualizar el término de búsqueda
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
            <div className="w-full justify-center rounded-b-xl">
                <div className="border-textBg rounded-t-xl text-white z-10">
                    {empresas.length > 0 ? (
                        <>
                            {/* Barra de búsqueda */}
                            <div className='flex flex-row w-full'>
                                <Buscador
                                    onSearch={handleSearch}
                                    placeholder={"Buscar Empresa..."}
                                />
                            </div>

                            {/* Cabecera de la tabla */}
                            <div className="bg-greyBlack border-textBg rounded-t-xl text-white flex">
                                <div className="flex-1 p-5 text-left">NIT</div>
                                <div className="flex-1 p-5 text-center">Nombre</div>
                                <div className="flex-1 p-5 text-center">Actividad Económica</div>
                                <div className="flex-1 p-5 text-center"></div> {/* Nueva columna para el botón */}
                            </div>

                            {/* Filtrar y mostrar empresas */}
                            <div className="border border-textBg border-t-0 rounded">
                                {empresas
                                    .filter(empresa =>
                                        `${empresa.nit} ${empresa.nombre_empresa}`.toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                    .map(empresa => (
                                        <InfoDiag
                                            key={empresa.nit}
                                            nit={empresa.nit}
                                            nombre_empresa={empresa.nombre_empresa}
                                            act_economica={empresa.act_economica}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <div className=" bg-greyBlack rounded-xl p-4 text-left text-sm sm:text-base">
                            Actualmente no se encuentran empresas disponibles para diagnosticar
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TablaDiagnostico;

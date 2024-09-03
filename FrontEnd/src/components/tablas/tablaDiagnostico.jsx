import { useState } from 'react'
import InfoDiag from './infoDiagnostico';
import Buscador from '../inputs/buscador/buscador';

const TablaDiagnostico = () => {

    const [empresas, setEmpresas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
            <div className='flex flex-row w-full'>
                <Buscador onSearch={handleSearch} placeholder={"Buscar Empresa..."} filtro={"Pene"} />
            </div>
            <div className="overflow-y-auto max-h-[40rem] custom-scrollbar w-full justify-center rounded-b-xl">
                <div className="bg-greyBlack border-textBg rounded-t-xl text-white flex">
                    <div className="flex-1 p-5 text-left">NIT</div>
                    <div className="flex-1 p-5 text-center">Nombre</div>
                    <div className="flex-1 p-5 text-center">Actividad Economica</div>
                    <div className="flex-1 p-5 text-center"></div> {/* Nueva columna para el botón */}
                </div>
                <div className="overflow-auto divide-y border border-textBg border-t-0 rounded">
                    {/* {empresas
                        .filter(empresas => `${empresas.nit} ${empresas.nombre_empresa}`.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(empresas => (
                            <InfoDiag
                                key={empresas.nit}
                                nombre={empresas.nombre_empresa}
                                MISE={empresas.actividad_economica}
                            />
                        ))
                    } */}
                    <InfoDiag
                        nit={123456}
                        nombre_empresa={"Aña"}
                        act_economica={"Arroz chino"}
                    />
                </div>
            </div>
        </>
    );
}

export default TablaDiagnostico;
import React, { useEffect, useState } from 'react';
import Buscador from "../inputs/buscador/buscador";
import ModalCarga from '../modales/modalcarga/modalcarga';

const TablaEmpresasVin = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [empresas, setEmpresas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    useEffect(() => {
        const fetchEmpresas = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/empresas-culminadas/');
                const data = await response.json();
                setEmpresas(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching empresas:', error);
                setIsLoading(false);
            }
        };

        fetchEmpresas();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    // Estilos en JSX
    const styles = {
        customScrollbar: {
            scrollbarWidth: '13px',
            scrollbarColor: '#888 #262b32',
        },
    };

    const filteredEmpresas = empresas.filter((empresa) =>
        empresa.nombre_empresa.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">NIT</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Nombre</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Razón Social</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Gerente</div>
                        <div className="flex-1 p-5 xl:text-left lg:text-left text-center">Correo</div>
                    </div>

                    <div className="divide-y border border-textBg border-t-0 rounded max-h-[10rem] overflow-y-auto custom-scrollbar" style={styles.customScrollbar}>
                        {isLoading ? (
                            <div className="flex justify-center p-5 text-white">Cargando...</div>
                        ) : (
                            filteredEmpresas.map((empresa) => (
                                <div key={empresa.nit} className="flex flex-col lg:flex-row text-white">
                                    <div className="flex-1 p-5 xl:text-left lg:text-left text-center">{empresa.nit}</div>
                                    <div className="flex-1 p-5 xl:text-left lg:text-left text-center">{empresa.nombre_empresa}</div>
                                    <div className="flex-1 p-5 xl:text-left lg:text-left text-center">{empresa.razon_social}</div>
                                    <div className="flex-1 p-5 xl:text-left lg:text-left text-center">{empresa.gerente}</div>
                                    <div className="flex-1 p-5 xl:text-left lg:text-left text-center">{empresa.correo}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Modal de carga */}
            {isSuccessModalVisible && (
                <ModalCarga />
            )}
        </>
    );
}

export default TablaEmpresasVin;

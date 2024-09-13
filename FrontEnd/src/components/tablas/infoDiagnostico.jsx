import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoDiag = ({ nit, nombre_empresa, act_economica }) => {

    const CompanyName = nombre_empresa;
    const navigate = useNavigate();

    const handleEditClick = () => {
        // Redirigir a la página de diagnóstico del NIT de la empresa seleccionada
        navigate(`/diagnostico/empresa/${nit}`);
    };


    return (
        <div className={`${CompanyName} bg-transparent border-transparent flex xl:flex-row lg:flex-row flex-col`}>
            <div className="flex-1 xl:p-5 xl:py-8 lg:p-5 lg:py-8 p-2 pt-4 text-sm xl:text-left lg:text-left text-center text-white whitespace-nowrap">
                {nit}
            </div>
            <div className="flex-1 xl:p-5 xl:py-8 lg:p-5 lg:py-8 p-2 text-sm text-center text-white whitespace-nowrap">
                {nombre_empresa}
            </div>
            <div className="flex-1 xl:p-5 xl:py-8 lg:p-5 lg:py-8 p-2 text-sm text-center text-white whitespace-nowrap border-b-0 border-b-transparent">

                {act_economica}

            </div>
            <div className="flex-1 p-5  text-sm xl:text-right lg:text-right text-center whitespace-nowrap border-b-0 border-b-transparent">
                <button
                    className="bg-principalGreen text-white font-semibold rounded-lg px-4 py-2 hover:bg-white hover:text-principalGreen"
                    onClick={handleEditClick}
                >
                    Diagnosticar
                </button>
            </div>
        </div>
    );
};

export default InfoDiag;

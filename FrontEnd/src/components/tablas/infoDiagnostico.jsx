import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoDiag = ({ nit, nombre_empresa, act_economica }) => {

    const CompanyName = nombre_empresa;
    const navigate = useNavigate();

    const handleEditClick = () => {
        // Redirigir a la página de diagnóstico del NIT de la empresa seleccionada
        navigate(`/evaluacion/empresa/${nit}`);
    };


    return (
        <div className={`${CompanyName} bg-transparent border-transparent flex`}>
            <div className="flex-1 p-5 py-8 text-sm whitespace-nowrap">
                <p className="text-white w-[8rem]">
                    {nit}
                </p>
            </div>
            <div className="flex-1 p-5 py-8 text-sm text-center text-white whitespace-nowrap">
                {nombre_empresa}
            </div>
            <div className="flex-1 p-5 py-8 text-sm text-center text-white whitespace-nowrap border-b-0 border-b-transparent">
                
                    {act_economica}
                
            </div>
            <div className="flex-1 p-5  text-sm text-right whitespace-nowrap border-b-0 border-b-transparent">
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

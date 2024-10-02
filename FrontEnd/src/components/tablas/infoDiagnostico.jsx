import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoDiag = ({ nit, nombre_empresa, act_economica }) => {

    const CompanyName = nombre_empresa; // Asigna el nombre de la empresa a una constante
    const navigate = useNavigate(); // Inicializa el hook useNavigate de react-router-dom

    // Función para manejar el clic en el botón de diagnóstico
    const handleEditClick = () => {
        // Redirigir a la página de diagnóstico del NIT de la empresa seleccionada
        navigate(`/evaluacion/empresa/${nit}`); // Navega a la ruta de evaluación usando el NIT
    };

    return (
        <div className={`${CompanyName} bg-transparent border-transparent flex`}> {/* Contenedor principal */}
            <div className="flex-1 p-5 py-8 text-sm whitespace-nowrap">
                <p className="text-white w-[8rem]">
                    {nit} {/* Muestra el NIT de la empresa */}
                </p>
            </div>
            <div className="flex-1 p-5 py-8 text-sm text-center text-white whitespace-nowrap">
                {nombre_empresa} {/* Muestra el nombre de la empresa */}
            </div>
            <div className="flex-1 p-5 py-8 text-sm text-center text-white whitespace-nowrap border-b-0 border-b-transparent">
                {act_economica} {/* Muestra la actividad económica de la empresa */}
            </div>
            <div className="flex-1 p-5 text-sm text-right whitespace-nowrap border-b-0 border-b-transparent">
                <button
                    className="bg-principalGreen text-white font-semibold rounded-lg px-4 py-2 hover:bg-white hover:text-principalGreen" // Estilo del botón
                    onClick={handleEditClick} // Maneja el clic en el botón
                >
                    Diagnosticar {/* Texto del botón */}
                </button>
            </div>
        </div>
    );
};

export default InfoDiag;

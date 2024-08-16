import React, { useState, useEffect } from 'react';
import { InfoEmpresas } from "./infoEmpresas";

export const TablasEmpresas = () => {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        const fetchEmpresas = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/empresas/');
                const data = await response.json();
                setEmpresas(data);
            } catch (error) {
                console.error('Error fetching empresas:', error);
            }
        };

        fetchEmpresas();
    }, []);

    return (
        <table className="overflow-auto w-full justify-center rounded-xl">
            <thead className="bg-greyBlack border-textBg rounded-xl w-[20rem] text-white top-0 z-10">
                <tr>
                    <th className="w-[4rem] p-5 text-left">Nombre</th>
                    <th className="w-[4rem] p-5 text-left">Sector empresarial</th>
                    <th className="w-[4rem] p-5 text-left">Fecha</th>
                    <th className="w-[4rem] p-5 text-center">Información</th>
                </tr>
            </thead>
            <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
                {empresas.map((empresa) => (
                    <InfoEmpresas
                        key={empresa.nit}
                        nombre={empresa.nombre_empresa}
                        sector_empresarial={empresa.sector}
                        fecha={new Date(empresa.fecha_creacion).toLocaleDateString()}
                    />
                ))}
            </tbody>
        </table>
    );
};

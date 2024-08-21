import React, { useEffect, useState } from 'react';
import InfoAE from './infoAE'; // Asegúrate de importar tu modal

const TableComponent = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v2/empresas/')
      .then((response) => response.json())
      .then((data) => {
        const empresasFiltradas = data.filter(empresa => empresa.estado === '1');
        setEmpresas(empresasFiltradas);
      })
      .catch((error) => console.error('Error fetching empresas:', error));
  }, []);


  return (
    <>
      
      <table className="overflow-auto w-full justify-center rounded-xl">
        <thead className="bg-dimgray border-textBg rounded-xl w-[20rem] text-white top-0 z-10">
          <tr>
            <th className="w-[4rem] p-5 text-left">Empresa</th>
            <th className="w-[4rem] p-5 text-left">Representante</th>
            <th className="w-[4rem] p-5 text-left">Razón Social</th>
            <th className="w-[4rem] p-5 text-center">Información</th>
            <th className="w-[2rem] p-5 text-center"></th>
          </tr>
        </thead>
        <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
        
            <InfoAE
              key={"1"}
              nombre_empresa={"s"}
              representante={"sa"}
              razon_social={"q"}
            />
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;

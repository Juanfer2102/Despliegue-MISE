import React from 'react';
import DeveloperPortal from './aceptaremp';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import GoBack from '../../components/inputs/goback/GoBack';

const VerInfoEmp = () => {
  return (
    <LayoutDashboard title="Aceptar Empresa">
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center justify-end h-20 w-full">
            {/* Aquí podrías agregar otros elementos si es necesario */}
          </div>
          <div className="bg-greyBg flex flex-col px-6 py-6 h-full w-full">
            <GoBack text="Informacion Empresas" />
            <DeveloperPortal />
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default VerInfoEmp;

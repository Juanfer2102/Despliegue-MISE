import React from 'react';
import DeveloperPortal from './aceptaremp';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import GoBack from '../../components/inputs/goback/GoBack';

const DetalleEmpresas = () => {
  return (
    <LayoutDashboard title="Aceptar Empresa">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full">
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

export default DetalleEmpresas;

import React from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import TablaDiagnostico from '../../components/tablas/tablaDiagnostico';
import GoBack from '../../components/inputs/goback/GoBack';

const VerEmpDiag = () => {
  return (
    <LayoutDashboard title="Diagnóstico de Empresas">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="h-20 bg-greyBlack flex justify-end"></div>
          <div className="bg-greyBg flex flex-col py-2 xl:gap-5 lg:gap-5 w-full xl:h-full px-4 lg:px-4 xl:px-4 pt-4 xl:pt-2 lg:pt-2">
            <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-8 rounded-md">
              <div className="flex flex-col gap-2 h-full rounded-xl">
                <GoBack text={"Diagnóstico de Empresas"} />
                <div className="h-full overflow-x-auto rounded-xl">
                  <TablaDiagnostico />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );

};

export default VerEmpDiag;

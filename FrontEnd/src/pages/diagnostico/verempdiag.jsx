import React from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import TablaDiagnostico from '../../components/tablas/tablaDiagnostico';
import GoBack from '../../components/inputs/goback/GoBack';

const VerEmpDiag = () => {
  return (
    <LayoutDashboard title="Diagnóstico de Empresas">
      <main className="w-full bg-greyBlack h-screen overflow-x-hidden">
        <div className="flex-1 flex flex-col">
          <div className="h-20 flex justify-end"></div>
          <div className="bg-greyBg flex flex-col h-full px-4 sm:px-6 md:px-12 pt-6">
            <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-8 rounded-md">
              <div className="flex flex-col gap-6 h-full rounded-xl">
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

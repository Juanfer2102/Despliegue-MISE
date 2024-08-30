import React from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import  TablaDiagnostico  from '../../components/tablas/tablaDiagnostico';

const VerEmpDiag = () => {
  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="flex content-center justify-end h-20 w-full" />
          <div className="bg-greyBg flex flex-col h-full w-full px-12 pt-6">
            <div className="gap-8 flex flex-col p-8 w-full rounded-md">
              <div className="rounded-xl flex flex-col gap-6">
                <div className="flex flex-row justify-start items-center w-full">
                  <p className="text-white font-bold text-2xl">Usuarios Registrados</p>
                </div>
                <div className="max-h-[40rem] rounded-xl">
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

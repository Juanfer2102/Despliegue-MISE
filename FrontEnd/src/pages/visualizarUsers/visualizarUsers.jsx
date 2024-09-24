import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import TablasUsers from "../../components/tablas/tablasUsers.jsx";

const VerUsers = () => {
  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 w-full rounded-md">
              <div className="flex flex-col gap-4 lg:gap-6 rounded-xl">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                  <p className="text-white font-bold text-xl lg:text-2xl">Usuarios Registrados</p>
                </div>
                <div className="max-h-[40rem] overflow-auto rounded-xl">
                  <TablasUsers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default VerUsers;

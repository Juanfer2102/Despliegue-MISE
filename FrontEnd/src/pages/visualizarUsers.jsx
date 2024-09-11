import React from 'react';
import LayoutDashboard from "../layouts/LayoutDashboard";
import TablasUsers from "../components/tablas/tablasUsers.jsx";

const VerUsers = () => {
  return (
  <LayoutDashboard title="Editar Usuario">
    <main className="flex flex-col lg:flex-row w-full bg-greyBlack h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="h-20 w-full">
        </div>
        <div className="bg-greyBg flex flex-col w-full xl:h-full px-4 xl:px-12 pt-4 xl:pt-6">
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

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modaleditar from "../../components/modales/modaleditar";
import BotonGuardar from "../../components/modales/modalcarga/modalcarga";

const ModulosPage = () => {
  return (
    <LayoutDashboard title="Modulos">
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full">
            <BotonGuardar />
          </div>
          <div className="bg-greyBg flex flex-col px-8 py-5 h-full w-full">
            <div className="left flex flex-row gap-5 p-1">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={8} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default ModulosPage;

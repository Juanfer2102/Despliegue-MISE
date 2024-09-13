import React from "react";

import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Grafica from "../../components/inputs/barcharts/graficabarras.jsx";
import { ProgressCircleHero } from "../../components/inputs/porcentaje/porcentaje.jsx";
import TablasEmpestado from "../../components/tablas/tablasEmpestado.jsx";
import TablasEmpresaporc from "../../components/tablas/tablasEmpresaporc.jsx";

const Dashboard = () => {
  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack xl:h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col w-full xl:h-full px-4 xl:px-12 lg:px-12 pt-4 xl:pt-6">
            <div className="flex flex-col lg:flex-row gap-5 h-full">
              <div className="flex flex-col gap-5">
                <Grafica />
                <TablasEmpresaporc />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <div className="w-full bg-greyBlack p-4 sm:p-5 rounded-xl text-white">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8">
                    <p className="pt-1 text-center sm:text-left">
                      Porcentaje de Desarrollo
                    </p>
                    <a href="/editar-porcentaje" className="flex justify-center">
                      <button className="bg-principalGreen text-center rounded-xl h-10 px-2 hover:bg-white hover:text-principalGreen hover:border-principalGreen hover:border">
                        Editar Porcentaje
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5 pt-8 sm:pt-12 justify-center">
                    <ProgressCircleHero text="No Desarro..." value={25} width="w-full sm:w-1/3 max-w-[13rem]" />
                    <ProgressCircleHero text="Parcial... Desa.." value={25} width="w-full sm:w-1/3 max-w-[13rem]" />
                    <ProgressCircleHero text="Desarro..." value={50} width="w-full sm:w-1/3 max-w-[13rem]" />
                  </div>
                </div>
                <div className="w-full">
                  <TablasEmpestado />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Dashboard;

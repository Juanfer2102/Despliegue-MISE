import React from "react";

import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Grafica from "../../components/inputs/barcharts/graficabarras.jsx";
import { ProgressCircleHero } from "../../components/inputs/porcentaje/porcentaje.jsx";
import TablasEmpestado from "../../components/tablas/tablasEmpestado.jsx";
import TablasEmpresaporc from "../../components/tablas/tablasEmpresaporc.jsx";

const Dashboard = () => {
  return (
    <LayoutDashboard title="Dashboard">
      <main className="flex flex-row w-full bg-greyBlack h-full">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex pr-5 pt-3.5 justify-end h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col gap-8 px-8 py-5 h-full w-full">
            <div className="flex flex-row gap-10">
              <div className="w-[60rem] flex flex-col justify-between gap-[2rem]">
                <Grafica />
                <div className="w-full pt-10 px-5">
                  <TablasEmpresaporc />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-[2rem]">
                <div className=" w-[45rem] h-[26.5rem] bg-greyBlack p-5 rounded-xl text-white items-start content-start">
                  <div className="flex flex-row gap-[21rem]">
                    <p className="pt-1 align-middle text-center">
                      Porcentaje de Desarrollo
                    </p>
                    <a href="/editar-porcentaje">
                      <button className="bg-principalGreen text-center rounded-xl h-[2rem] w-[10rem] hover:bg-white hover:text-principalGreen hover:border-principalGreen hover:border">
                        Editar Porcentaje
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-row gap-5 pt-[5rem]">
                    <ProgressCircleHero text={"No Desarrollado"} value={25} width={"w-[13rem]"} />
                    <ProgressCircleHero
                      text={"Parcialmente Desa.."}
                      value={25}
                      width={"w-[13rem]"}
                    />
                    <ProgressCircleHero text={"Desarrollado"} value={50} width={"w-[13rem]"} />
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

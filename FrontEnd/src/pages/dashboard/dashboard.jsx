import React from "react";

import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Grafica from "../../components/inputs/barcharts/graficabarras.jsx";
import { ProgressCircleHero } from "../../components/inputs/porcentaje/porcentaje.jsx";

const Dashboard = () => {

  return (
    <LayoutDashboard title="Dashboard">
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div
            className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full"
          >
          </div>
          <div className="bg-greyBg flex flex-col gap-8 px-8 py-5 h-full w-full">
            <div className="flex flex-row gap-5">
              <Grafica />
              <div
                className="flex flex-col bg-greyBlack content-start h-[17rem] rounded-xl p-5 text-white items-start"
              >
                <div className="flex flex-row gap-[11.5rem]">
                  <p className="pt-1 align-middle text-center">Porcentaje de Desarrollo</p>
                  <a href="/editar-porcentaje"><button className="bg-principalGreen text-center rounded-xl h-[2rem] w-[10rem] hover:bg-white hover:text-principalGreen hover:border-principalGreen hover:border">Editar Porcentaje</button></a>
                </div>
                <div className="flex flex-row gap-5 pt-5">
                  <ProgressCircleHero text={"No Desarrollado"} value={25} />
                  <ProgressCircleHero text={"Parcialmente Desa.."} value={25} />
                  <ProgressCircleHero text={"Desarrollado"} value={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>

  )
}

export default Dashboard;
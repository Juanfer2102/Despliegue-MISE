import React from "react";

import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Grafica from "../../components/inputs/barcharts/graficabarras.jsx";
import { ProgressCircleHero } from "../../components/inputs/porcentaje/porcentaje.jsx";

const Dashboard = () => {

  return (
    <LayoutDashboard title="Dashboard">
      <main className="flex flex-row w-full bg-greyBlack h-full">
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
                <div className="w-full pt-10">
                  <table className="overflow-auto w-full  rounded-xl">
                    <thead className="bg-greyBlack border-textBg rounded-xl text-white top-0 z-10">
                      <tr>
                        <th className="p-5 text-left">Nombre</th>
                        <th className="p-5 text-left">Sector</th>
                        <th className="p-5 text-center">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
                      <tr className="bg-transparent border-transparent">
                        <td
                          className="p-5 py-8 text-sm w-[6rem] text-white whitespace-nowrap"
                        >
                          nit
                        </td>
                        <td
                          className="p-5 text-sm w-[6rem] text-white whitespace-nowrap"
                        >
                          nombre
                        </td>
                        <td
                          className="p-5 text-sm w-[6rem] text-center whitespace-nowrap"
                        >
                          <div
                            className="p-2 pl-4 pr-5 tracking-wide text-sm transition-colors bg-principalGreen transform border-solid rounded-lg"
                          >
                            Aceptado
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full pt-10">
                  <table className="overflow-auto w-full  rounded-xl">
                    <thead className="bg-greyBlack border-textBg rounded-xl text-white top-0 z-10">
                      <tr>
                        <th className="p-5 text-left">Nombre</th>
                        <th className="p-5 text-left">Sector</th>
                        <th className="p-5 text-center">Encargado</th>
                        <th className="p-5 text-center">Desarrollo (%)</th>
                      </tr>
                    </thead>
                    <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
                      <tr className="bg-transparent border-transparent">
                        <td
                          className="p-5 py-8 text-sm w-[6rem] text-white whitespace-nowrap"
                        >
                          nit
                        </td>
                        <td
                          className="p-5 text-sm w-[6rem] text-white whitespace-nowrap"
                        >
                          nombre
                        </td>
                        <td
                          className="p-5 text-sm w-[6rem] text-white whitespace-nowrap"
                        >
                          nombre
                        </td>
                        <td
                          className="p-5 text-sm w-[6rem] text-center whitespace-nowrap"
                        >
                          <div
                            className="p-2 pl-4 pr-5 tracking-wide text-sm transition-colors bg-principalGreen transform border-solid rounded-lg"
                          >
                            96%
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
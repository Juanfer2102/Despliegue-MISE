import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Elementosempresas } from "../../helpers/elementosempresas";
import TarjetasEmpresasreg from "../../components/tarjetasdashboard/tarjetasEmpresasreg";
import { TablasEmpresas } from "../../components/tablas/tablasEmpresas"

export const EmpresasRegistradas = () => {
  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-row">

          <div className="w-full h-full">
            <div className="bg-greyBlack  h-20 "></div>
            <div className="  w-full px-8 py-5">
              <div className=" h-full text-white gap-6">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <p className="text-2xl pl-4">Empresas registradas</p>
                  </div>

                  <div className="flex gap-24 text-sm p-3 pl-3">
                    {
                      Elementosempresas.map((Elementosempresas, index) => (
                        <TarjetasEmpresasreg
                          key={Elementosempresas.numeroEmpresas}
                          empresaicon={Elementosempresas.empresaicon}
                          tipoTarjeta={Elementosempresas.tipoTarjeta}
                          numeroEmpresas={Elementosempresas.numeroEmpresas}
                          URL={Elementosempresas.URL}
                        />
                      ))
                    }
                  </div>

                  <div className="rounded-xl px-10 pt-5 pb-10 h-full flex gap-2 flex-col overflow-y-auto custom-scrollbar">
                    <div
                      className="flex items-center py-3 gap-4 text-left justify-end text-sm"
                    >
                      <input
                        type="text"
                        placeholder=""
                        className="border border-white rounded-lg bg-transparent -m-2 p-1"
                      />
                      <i className="fa-solid fa-magnifying-glass text-white"></i>
                      <div className="flex items-center">
                        <div
                          className="items-center flex gap-4 border-2 rounded-lg border-white bg-transpsrent text-white text-left p-2 pr-3 pl-3"
                        >
                          <p>Mas nuevas</p>
                          <i className="fa-solid fa-filter"></i>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-y-auto custom-scrollbar rounded-xl">
                      <div className="max-h-[50rem] overflow-y-auto custom-scrollbar">
                        <TablasEmpresas />
                      </div>
                    </div>
                  </div>
                  {/* 
                <div
                  className=" static flex flex-col justify-center align-middle bg-darkslategray rounded-lg max-h-min overflow-y-auto custom-scrollbar ">
                  <TarjetasModulos tipoTarjeta="General" moduloicon="fa-table-cells" />
                  <TarjetasModulos tipoTarjeta="Capacidades Gerenciales" moduloicon="fa-table-cells" />
                  <TarjetasModulos tipoTarjeta="Mejora de Operaciones" moduloicon="fa-table-cells" />
                  <TarjetasModulos tipoTarjeta="Gerencia de Marketing" moduloicon="fa-table-cells" />
                  <TarjetasModulos tipoTarjeta="Gerencia de Ventas" moduloicon="fa-table-cells" />
                  <TarjetasModulos tipoTarjeta="Gerencia de Talento Humano" moduloicon="fa-table-cells" />
                  <TarjetasModulos tipoTarjeta="Financias Gerenciales" moduloicon="fa-table-cells" />
                </div>
                */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  )
}
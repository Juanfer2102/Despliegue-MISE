import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Elementosempresas } from "../../helpers/elementosempresas";
import TarjetasEmpresasreg from "../../components/tarjetasdashboard/tarjetasEmpresasreg";
import { TablasEmpresas } from "../../components/tablas/tablasEmpresas";


export const EmpresasRegistradas = () => {

  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-full">
            <div className="bg-greyBlack h-16 md:h-20"></div>
            <div className="w-full px-4 py-5 md:px-8">
              <div className="text-white gap-6">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <p className="text-xl md:text-2xl xl:text-left text-center pl-4">Empresas registradas</p>
                  </div>

                  {/* Tarjetas de empresas */}
                  <div className="flex xl:flex-row flex-col gap-4 md:gap-24 text-sm p-3 pl-3">
                    {Elementosempresas.map((Elementosempresas, index) => (
                      <TarjetasEmpresasreg
                        key={Elementosempresas.numeroEmpresas}
                        empresaicon={Elementosempresas.empresaicon}
                        tipoTarjeta={Elementosempresas.tipoTarjeta}
                        numeroEmpresas={Elementosempresas.numeroEmpresas}
                        URL={Elementosempresas.URL}
                      />
                    ))}
                  </div>

                  {/* Tabla de empresas */}
                  <div className="rounded-xl px-5 md:px-10 pt-5 pb-10 h-full flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                    <div className="rounded-xl">
                      <div className="max-h-[25rem] md:max-h-[50rem] overflow-y-auto custom-scrollbar">
                        <TablasEmpresas />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );

};

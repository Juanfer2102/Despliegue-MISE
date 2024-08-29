import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Elementosempresas } from "../../helpers/elementosempresas";
import TarjetasEmpresasreg from "../../components/tarjetasdashboard/tarjetasEmpresasreg";
import { TablasEmpresas } from "../../components/tablas/tablasEmpresas";


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

                  <div className="rounded-xl px-10 pt-5 pb-10 h-full flex gap-2 flex-col overflow-y-auto custom-scrollbar">
                    <div className="overflow-y-auto custom-scrollbar rounded-xl">
                      <div className="max-h-[50rem] overflow-y-auto custom-scrollbar">
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

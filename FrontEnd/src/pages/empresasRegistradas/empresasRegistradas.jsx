import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Elementosempresas } from "../../helpers/elementosempresas";
import TarjetasEmpresasreg from "../../components/tarjetasdashboard/tarjetasEmpresasreg";
import { TablasEmpresas } from "../../components/tablas/tablasEmpresas";


export const EmpresasRegistradas = () => {

  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full h-full">
            <div className="bg-greyBlack h-16 md:h-20"></div>
            <div className="w-full px-4 py-5 md:px-8">
              <div className="text-white gap-6">
                <div className="flex flex-col">
                  <div className="pb-5">
                    <p className="text-xl md:text-2xl xl:text-left min-lg:text-left max-md:text-center pl-4">Empresas registradas</p>
                  </div>

                  {/* Tarjetas de empresas */}
                  <div className="flex xl:flex-row min-lg:flex-col max-md:flex-col gap-4 md:gap-24 text-sm pl-3">
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
                  <div className="rounded-xl px-5 md:px-10 pb-5 h-full flex flex-col gap-2">
                    <div className="rounded-xl">
                      <div className="">
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

export default EmpresasRegistradas;
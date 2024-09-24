import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import TablaEmpresasVin from "../../components/tablas/tablaEmpresasVin";
import GoBack from "../../components/inputs/goback/GoBack";

export const EmpresasVinculacion = () => {

  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full h-full">
            <div className="bg-greyBlack h-16 md:h-20"></div>
            <div className="w-full px-4 py-5 md:px-8">
              <div className="text-white gap-6">
                <div className="flex flex-col">
                    <GoBack text={"Empresas en Proceso de Vinculacion"} />

                  {/* Tabla de empresas */}
                  <div className="rounded-xl px-5 md:px-10 pb-5 h-full flex flex-col gap-2">
                    <div className="rounded-xl">
                      <div className="">
                        <TablaEmpresasVin />
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

export default EmpresasVinculacion;
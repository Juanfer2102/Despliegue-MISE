import React from "react";
import GoBack from "../../components/inputs/goback/GoBack.jsx";
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Grafica from "../../components/inputs/barcharts/graficabarras.jsx";
import { ProgressCircleHero } from "../../components/inputs/porcentaje/porcentaje.jsx";
import TablasEmpestado from "../../components/tablas/tablasEmpestado.jsx";
import TablasEmpresaporc from "../../components/tablas/tablasEmpresaporc.jsx";
import TarjetasModulos from "../../components/tarjetasdashboard/tarjetasModulos.jsx";
import TablaPreguntas from "../../components/tablas/tablaempregunta.jsx";
import ValidacionDeSueños from "../../components/tablas/validacionSuenos.jsx";

const DashboardEmp = () => {
  return (
    <LayoutDashboard title="Dashboard">
      <main className="flex xl:flex-col max-md::flex-col flex-row w-full bg-greyBlack h-full">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col py-5 xl:gap-5 gap-5 w-full xl:h-full px-4 lg:px-[13rem] xl:px-12 pt-4 xl:pt-6">
            <GoBack text={"Empresas Registradas / Boteritos"} />
            <div className="flex flex-col xl:flex-row xl:gap-[5rem] gap-10">
              <div className="flex flex-row xl:flex-col gap-5 w-full xl:w-[18rem] p-4 justify-start xl:justify-center items-center xl:items-stretch bg-darkslategray text-white rounded-lg max-h-[30rem] overflow-x-auto xl:overflow-y-auto xl:overflow-x-hidden custom-scrollbar">
                {['General', 'Capacidades Gerenciales', 'Mejora de Operaciones', 'Gerencia de Marketing', 'Gerencia de Ventas', 'Gerencia de Talento Humano', 'Financias Gerenciales'].map((tipoTarjeta) => (
                  <TarjetasModulos
                    key={tipoTarjeta}
                    tipoTarjeta={tipoTarjeta}
                    moduloicon="fa-table-cells"
                  />
                ))}
              </div>
              <div className="flex flex-col lg:flex-row gap-5 w-full xl:w-auto">
                <Grafica />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-8 xl:justify-between">
              <TablaPreguntas />
              <ValidacionDeSueños />
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default DashboardEmp;

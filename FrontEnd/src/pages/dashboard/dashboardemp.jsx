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
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex pr-5 pt-3.5 justify-end h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col gap-8 px-8 py-5 h-full w-full">
            <GoBack text={"Empresas Registradas / Boteritos"} />
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5 w-[18rem] px-4 justify-center align-middle bg-darkslategray text-white rounded-lg max-h-[26rem] overflow-y-auto custom-scrollbar ">
                <TarjetasModulos
                  tipoTarjeta="General"
                  moduloicon="fa-table-cells"
                />
                <TarjetasModulos
                  tipoTarjeta="Capacidades Gerenciales"
                  moduloicon="fa-table-cells"
                />
                <TarjetasModulos
                  tipoTarjeta="Mejora de Operaciones"
                  moduloicon="fa-table-cells"
                />
                <TarjetasModulos
                  tipoTarjeta="Gerencia de Marketing"
                  moduloicon="fa-table-cells"
                />
                <TarjetasModulos
                  tipoTarjeta="Gerencia de Ventas"
                  moduloicon="fa-table-cells"
                />
                <TarjetasModulos
                  tipoTarjeta="Gerencia de Talento Humano"
                  moduloicon="fa-table-cells"
                />
                <TarjetasModulos
                  tipoTarjeta="Financias Gerenciales"
                  moduloicon="fa-table-cells"
                />
              </div>
              <Grafica />
              <div className="w-[30rem] pt-10 px-5">
                <TablasEmpresaporc />
              </div>
            </div>
            <div className="flex flex-row gap-[10rem]">
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

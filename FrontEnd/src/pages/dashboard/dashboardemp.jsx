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

  // Estilos en JSX
  const styles = {
    customScrollbar: {
      scrollbarWidth: '13px',
      scrollbarColor: '#888 #262b32',
    },
    customScrollbarTrack: {
      background: '#262b32',
      borderRadius: '12px',
    },
    customScrollbarThumb: {
      background: '#888',
      borderRadius: '10px',
    },
    customScrollbarThumbHover: {
      background: '#555',
    }
  };


  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col py-2 xl:gap-5 lg:gap-5 gap-4 w-full xl:h-full px-4 lg:px-12 xl:px-12 pt-4 xl:pt-6">
            <GoBack text={"Empresas Registradas / Boteritos"} />
            <div className="flex flex-col xl:flex-row lg:flex-row xl:gap-[5rem] lg:gap-[5rem] gap-10">
              <div className="flex flex-row xl:flex-col lg:flex-col gap-5 w-full xl:w-[18rem] lg:w-[18rem] p-4 justify-start xl:justify-center lg:justify-center items-center lg:items-stretch xl:items-stretch bg-darkslategray text-white rounded-lg lg:max-h-[28rem] overflow-x-auto xl:overflow-y-auto lg:overflow-y-auto xl:overflow-x-hidden lg:overflow-x-hidden custom-scrollbar" style={styles.customScrollbar}>
                {['General', 'Capacidades Gerenciales', 'Mejora de Operaciones', 'Gerencia de Marketing', 'Gerencia de Ventas', 'Gerencia de Talento Humano', 'Financias Gerenciales'].map((tipoTarjeta) => (
                  <TarjetasModulos
                    key={tipoTarjeta}
                    tipoTarjeta={tipoTarjeta}
                    moduloicon="fa-table-cells"
                  />
                ))}
              </div>
              <div className="flex flex-col lg:h-[28rem] lg:flex-row gap-5 w-full xl:w-auto lg:w-auto">
                <Grafica />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row lg:flex-row gap-8 max-md:pb-2 xl:pb-2 lg:pb-2 xl:justify-between">
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

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
            <div className="flex xl:flex-row lg:flex-row flex-col xl:gap-[5rem] lg:gap-[5rem]">
              <div className="w-full">
                <h1 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white p-3">Informacion Postulante</h1>
                <div className="bg-greyBlack p-3 sm:p-5 rounded-xl mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Nombre</h2>
                        <p className="text-principalGreen font-semibold">
                          6
                        </p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Celular</h2>
                        <p className="text-principalGreen font-semibold">5</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Correo</h2>
                        <p className="text-principalGreen font-semibold">4</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Municipio</h2>
                        <p className="text-principalGreen font-semibold">3</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Tipo de Documento</h2>
                        <p className="text-principalGreen font-semibold">2</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">No. Documento</h2>
                        <p className="text-principalGreen font-semibold">1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <h1 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white p-3">Informacion Empresa</h1>
                <div className="bg-greyBlack p-3 sm:p-5 rounded-xl mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Producto o Servicio</h2>
                        <p className="text-principalGreen font-semibold">9</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Fecha de Inicio</h2>
                        <p className="text-principalGreen font-semibold">8</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Costos el Ultimo Año</h2>
                        <p className="text-principalGreen font-semibold">7</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Razon Social</h2>
                        <p className="text-principalGreen font-semibold">6</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Celular Empresa</h2>
                        <p className="text-principalGreen font-semibold">5</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Ventas el Ultimo Año</h2>
                        <p className="text-principalGreen font-semibold">3</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">NIT</h2>
                        <p className="text-principalGreen font-semibold">2</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Empleados Permanentes</h2>
                        <p className="text-principalGreen font-semibold">1</p>
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

export default DashboardEmp;

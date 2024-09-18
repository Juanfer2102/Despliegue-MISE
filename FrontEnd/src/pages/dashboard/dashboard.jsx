/**
 * Dashboard.jsx
 * 
 * Esta vista es la página principal del dashboard, diseñada para mostrar una visión general del progreso de desarrollo
 * y el estado de las empresas registradas.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Layout general que envuelve el dashboard, proporcionando el título de la página y la estructura.
 * - ProgressCircleHero: Componente visual que muestra un gráfico circular con el porcentaje de desarrollo.
 * - TablasEmpestado: Tabla que muestra el estado de las empresas registradas.
 * 
 * Estructura de la vista:
 * - Encabezado: Un espacio reservado con un fondo oscuro (`bg-greyBlack`) que ocupa la parte superior de la pantalla.
 * - Cuerpo principal: Contiene dos secciones. La primera es una tarjeta con gráficos circulares que indican el progreso de desarrollo, 
 *   y la segunda es una tabla con el estado de las empresas.
 * 
 * Estilos:
 * - El diseño se adapta a diferentes tamaños de pantalla (diseño responsive) con clases de Tailwind CSS.
 * 
 * Rutas:
 * - El botón "Editar Porcentaje" redirige al usuario a la página "/editar-porcentaje".
 */
import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import { ProgressCircleHero } from "../../components/inputs/porcentaje/porcentaje.jsx";
import TablasEmpestado from "../../components/tablas/tablasEmpestado.jsx";

const Dashboard = () => {

  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack xl:h-20 lg:h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col w-full xl:h-full px-4 xl:px-12 lg:px-12 pt-4 xl:pt-6">
            <div className="flex flex-col lg:flex-row gap-5 h-full">
              {/* Sección de gráficos circulares que indican el porcentaje de desarrollo */}
              <div className="w-full h-[20rem] bg-greyBlack p-4 sm:p-5 rounded-xl text-white">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8">
                  <p className="pt-1 text-center sm:text-left">Porcentaje de Desarrollo</p>
                  <a href="/editar-porcentaje" className="flex justify-center">
                    <button className="bg-principalGreen text-center rounded-xl h-10 px-2 hover:bg-white hover:text-principalGreen hover:border-principalGreen hover:border">
                      Editar Porcentaje
                    </button>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 pt-8 sm:pt-12 justify-center">
                  <ProgressCircleHero text="No Desarro..." value={"49.00"} width="w-full sm:w-1/3 max-w-[13rem]" />
                  <ProgressCircleHero text="Parcial... Desa.." value={"80.00"} width="w-full sm:w-1/3 max-w-[13rem]" />
                  <ProgressCircleHero text="Desarro..." value={"100"} width="w-full sm:w-1/3 max-w-[13rem]" />
                </div>
              </div>
              {/* Sección de la tabla con el estado de las empresas */}
              <div className="w-full">
                <TablasEmpestado />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Dashboard;

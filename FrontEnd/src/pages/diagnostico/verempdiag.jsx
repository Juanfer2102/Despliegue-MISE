/**
 * VerEmpDiag.jsx
 * 
 * Componente que muestra una vista para consultar el diagnóstico de empresas.
 * Utiliza un componente de tabla para mostrar los datos de diagnóstico y un componente de navegación para volver a la vista anterior.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente de diseño que envuelve la página de consulta en un diseño de panel de control.
 * - TablaDiagnostico: Componente para mostrar una tabla con los datos de diagnóstico.
 * - GoBack: Componente de navegación que permite volver a la vista anterior.
 * 
 * Funcionalidad:
 * - Muestra el diagnóstico de empresas en una tabla.
 * - Incluye un botón para volver a la vista anterior.
 * 
 * Estilos:
 * - Usa Tailwind CSS para el diseño de la página. La vista incluye una sección de encabezado, un área de contenido con espaciado y diseño responsivo.
 * - Los elementos de la interfaz están organizados en una columna, con un diseño que se adapta a diferentes tamaños de pantalla.
 * 
 * Estructura del componente:
 * - `LayoutDashboard`: Envuelve el contenido de la página proporcionando un diseño general y el título de la página.
 * - `main`: Contenedor principal con fondo y diseño responsivo.
 * - `div` interno: Organiza el contenido en una columna con espaciado adecuado.
 * - `GoBack`: Componente de navegación con texto para volver a la vista de diagnóstico de empresas.
 * - `TablaDiagnostico`: Muestra los datos de diagnóstico en una tabla con diseño adaptativo.
 * 
 * Puntos clave:
 * - La página está diseñada para mostrar una tabla con los datos de diagnóstico.
 * - Incluye un botón para volver a la vista anterior utilizando el componente `GoBack`.
 * - El diseño es responsivo y se ajusta a diferentes tamaños de pantalla mediante Tailwind CSS.
 */


import React from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import TablaDiagnostico from '../../components/tablas/tablaDiagnostico';
import BackButton from '../../components/inputs/goback/BackButton';

const VerEmpDiag = () => {
  return (
    <LayoutDashboard title="Diagnóstico de Empresas">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="h-20 bg-greyBlack flex justify-end"></div>
          <div className="bg-greyBg flex flex-col py-2 xl:gap-5 lg:gap-5 w-full xl:h-full px-4 lg:px-4 xl:px-4 pt-4 xl:pt-2 lg:pt-2">
            <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-8 rounded-md">
              <div className="flex flex-col gap-2 h-full rounded-xl">
                <BackButton navigateUrl="/empresas-registradas" text={"Diagnóstico de Empresas"} />
                <div className="h-full overflow-x-auto rounded-xl">
                  <TablaDiagnostico />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );

};

export default VerEmpDiag;

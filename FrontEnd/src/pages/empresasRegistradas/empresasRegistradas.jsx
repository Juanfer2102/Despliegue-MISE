/**
 * EmpresasRegistradas.jsx
 * 
 * Componente para la vista del dashboard de empresas registradas. Muestra tarjetas con estadísticas de empresas y una tabla con información detallada.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente de diseño que envuelve la página del dashboard en un diseño de panel de control.
 * - TarjetasEmpresasreg: Componente de tarjeta para mostrar estadísticas de empresas en diferentes estados.
 * - TablasEmpresas: Componente que muestra una tabla con información detallada de empresas.
 * 
 * Funcionalidad:
 * - Muestra tarjetas con estadísticas sobre empresas vinculadas, empresas sin diagnosticar y nuevas solicitudes.
 * - Incluye una tabla con información detallada de las empresas.
 * 
 * Estado:
 * - `empresasData`: Contiene el número de empresas vinculadas, sin diagnosticar y nuevas solicitudes. Se inicializa en cero y se actualiza mediante la función `fetchData`.
 * 
 * Función `fetchData`:
 * - Realiza solicitudes a dos endpoints para obtener el número de empresas sin diagnosticar y el número de nuevas solicitudes.
 * - Actualiza el estado `empresasData` con los datos obtenidos.
 * 
 * Estructura del componente:
 * - `LayoutDashboard`: Envuelve el contenido de la página proporcionando un diseño general y el título "Dashboard".
 * - `main`: Contenedor principal con fondo y diseño responsivo.
 * - `div` interno:
 *   - `bg-greyBlack`: Sección de encabezado con fondo negro.
 *   - `px-4 py-5 md:px-8`: Contenedor para el contenido principal con espaciado.
 *   - `TarjetasEmpresasreg`: Tres tarjetas que muestran estadísticas sobre las empresas.
 *   - `TablasEmpresas`: Tabla que muestra información detallada de empresas.
 * 
 * Estilos:
 * - Usa Tailwind CSS para el diseño de la página, incluyendo clases para el fondo (`bg-greyBg`), espaciado (`px-4 py-5`), y el diseño responsivo.
 * - Las tarjetas se muestran en una fila en pantallas grandes y en una columna en pantallas pequeñas.
 * 
 * Puntos clave:
 * - El componente hace uso del hook `useState` para manejar el estado y `useEffect` para ejecutar la función `fetchData` cuando el componente se monta.
 * - La visualización de datos incluye tarjetas con iconos y una tabla detallada, proporcionando una vista completa del estado de las empresas registradas.
 * - El diseño es responsivo y se adapta a diferentes tamaños de pantalla mediante Tailwind CSS.
 */

import React, { useState, useEffect } from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import TarjetasEmpresasreg from "../../components/tarjetasdashboard/tarjetasEmpresasreg";
import { TablasEmpresas } from "../../components/tablas/tablasEmpresas";

export const EmpresasRegistradas = () => {
  // Estado para registrar los números de empresas
  const [empresasData, setEmpresasData] = useState({
    empresasVinculadas: 0,
    empresasSinDiagnostico: 0,
    nuevasSolicitudes: 0,
  });

  // Función para obtener el número de empresas desde el endpoint
  const fetchData = async () => {
    try {
      // Obtén el número de empresas sin diagnosticar
      const resSinDiagnostico = await fetch("https://despliegue-mise.onrender.com/api/v2/empresas-sin-diagnostico/");
      const dataSinDiagnostico = await resSinDiagnostico.json();
      const numEmpresasSinDiagnostico = dataSinDiagnostico.length;

      // Obtén el número de nuevas solicitudes
      const resNuevasSolicitudes = await fetch("https://despliegue-mise.onrender.com/api/v2/empresas-por-aceptar/");
      const dataNuevasSolicitudes = await resNuevasSolicitudes.json();
      const numNuevasSolicitudes = dataNuevasSolicitudes.length;

      const resCulminadas = await fetch("https://despliegue-mise.onrender.com/api/v2/empresas-culminadas/");
      const dataCulminadas = await resCulminadas.json();
      const numCulminadas = dataCulminadas.length;

      // Actualiza el estado con los datos obtenidos
      setEmpresasData({
        empresasCulminadas: numCulminadas, // Mantén el valor actual
        empresasSinDiagnostico: numEmpresasSinDiagnostico,
        nuevasSolicitudes: numNuevasSolicitudes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Llama a fetchData cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []);

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
                    <p className="text-xl md:text-2xl xl:text-left min-lg:text-left max-md:text-center pl-4">
                      Empresas registradas
                    </p>
                  </div>

                  {/* Tarjetas de empresas */}
                  <div className="flex xl:flex-row min-lg:flex-col max-md:flex-col gap-4 md:gap-24 text-sm pl-3">

                    {/* Primera tarjeta: Empresas en proceso de vinculación */}
                    <TarjetasEmpresasreg
                      empresaicon="fa-solid fa-building-circle-check"
                      tipoTarjeta="Procesos Culminados"
                      numeroEmpresas={empresasData.empresasCulminadas}
                      URL="/empresas-culminadas"
                    />

                    {/* Segunda tarjeta: Empresas sin diagnosticar */}
                    <TarjetasEmpresasreg
                      empresaicon="fa-solid fa-building-circle-exclamation"
                      tipoTarjeta="Sin Diagnosticar"
                      numeroEmpresas={empresasData.empresasSinDiagnostico}
                      URL="/diagnostico"
                    />

                    {/* Tercera tarjeta: Nuevas solicitudes */}
                    <TarjetasEmpresasreg
                      empresaicon="fa-solid fa-building-user"
                      tipoTarjeta="Nuevas Solicitudes"
                      numeroEmpresas={empresasData.nuevasSolicitudes}
                      URL="/aceptar-empresas"
                    />
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

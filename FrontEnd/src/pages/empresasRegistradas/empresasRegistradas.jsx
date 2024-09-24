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
      const resSinDiagnostico = await fetch("http://localhost:8000/api/v2/empresas-sin-diagnostico/");
      const dataSinDiagnostico = await resSinDiagnostico.json();
      const numEmpresasSinDiagnostico = dataSinDiagnostico.length;

      // Obtén el número de nuevas solicitudes
      const resNuevasSolicitudes = await fetch("http://localhost:8000/api/v2/empresas-por-aceptar/");
      const dataNuevasSolicitudes = await resNuevasSolicitudes.json();
      const numNuevasSolicitudes = dataNuevasSolicitudes.length;

      // Actualiza el estado con los datos obtenidos
      setEmpresasData({
        empresasVinculadas: empresasData.empresasVinculadas, // Mantén el valor actual
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
                      tipoTarjeta="En Proceso de Vinculacion"
                      numeroEmpresas={empresasData.empresasVinculadas}
                      URL="/empresas-vinculadas"
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

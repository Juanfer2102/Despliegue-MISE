/**
 * EmpresasVinculacion.jsx
 * 
 * Componente para la vista de empresas en proceso de vinculación. Muestra una tabla con la información de las empresas que están en proceso de vinculación.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente de diseño que proporciona un marco general para la página del dashboard.
 * - TablaEmpresasVin: Componente que muestra una tabla con la información de las empresas en proceso de vinculación.
 * - GoBack: Componente que proporciona un enlace para regresar a la vista anterior.
 * 
 * Funcionalidad:
 * - Muestra una tabla con información detallada sobre las empresas que están en proceso de vinculación.
 * - Incluye un botón para regresar a la vista de empresas en proceso de vinculación.
 * 
 * Estructura del componente:
 * - `LayoutDashboard`: Envuelve el contenido de la página y establece el título "Dashboard".
 * - `main`: Contenedor principal con fondo y diseño responsivo.
 * - `div` interno:
 *   - `bg-greyBlack h-16 md:h-20`: Sección de encabezado con fondo negro.
 *   - `w-full px-4 py-5 md:px-8`: Espaciado para el contenido principal.
 *   - `GoBack`: Muestra un enlace de retroceso con el texto "Empresas en Proceso de Vinculación".
 *   - `TablaEmpresasVin`: Muestra una tabla con la información de las empresas en proceso de vinculación.
 * 
 * Estilos:
 * - Utiliza Tailwind CSS para el diseño responsivo y espaciado.
 * - `bg-greyBg`: Fondo gris claro para la página.
 * - `bg-greyBlack`: Fondo negro para secciones destacadas.
 * 
 * Puntos clave:
 * - El componente está diseñado para la visualización de empresas que están en proceso de vinculación.
 * - La tabla muestra información detallada y es la principal fuente de datos en esta vista.
 * - El diseño se adapta a diferentes tamaños de pantalla mediante el uso de clases de Tailwind CSS.
 */

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
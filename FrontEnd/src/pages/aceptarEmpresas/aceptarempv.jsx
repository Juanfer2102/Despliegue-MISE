/**
 * AceptarEmpresas.jsx
 * 
 * Este componente gestiona la visualización de la página para la aceptación de empresas en el sistema.
 * Está estructurado dentro de un dashboard, incluye una tabla interactiva y un botón para retroceder.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Envuelve la vista y proporciona la estructura base del dashboard.
 * - TableComponent: Muestra la tabla con la lista de empresas para aceptar.
 * - GoBack: Botón para regresar a la vista anterior, con el texto "Aceptar Empresas".
 * 
 * Funcionalidad:
 * - Muestra una tabla interactiva con las empresas a aceptar.
 * - Proporciona un botón de retroceso con el texto "Aceptar Empresas" que redirige a la página anterior.
 * 
 * Estilos:
 * - La estructura y disposición están diseñadas con clases de Tailwind CSS.
 * - Utiliza una paleta de colores oscura, con fondo gris oscuro y texto blanco.
 * - Se garantiza la adaptabilidad en pantallas grandes y pequeñas mediante el uso de utilidades flex y de espaciado.
 * - Se utiliza una barra de desplazamiento personalizada (custom-scrollbar) para el contenido de la tabla.
 */

import LayoutDashboard from '../../layouts/LayoutDashboard.jsx';
import TableComponent from '../../components/tablas/tablasaceptarempresa.jsx';
import BackButton from '../../components/inputs/goback/BackButton.jsx';

const AceptarEmpresas = () => {
  return (
    <LayoutDashboard>
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-row">
          <div className="w-full h-full">
            <div className="bg-greyBlack h-20"></div>
            <div className="w-full px-8 pt-5 h-full text-white gap-8">
              <BackButton text="Aceptar Empresas" />
              <div className="rounded-xl xl:py-10 lg:py-5 py-5 h-full w-full flex gap-2 flex-col overflow-y-auto custom-scrollbar">
                <div className="rounded-xl">
                  <TableComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default AceptarEmpresas;


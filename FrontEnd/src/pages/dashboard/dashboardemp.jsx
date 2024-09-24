/**
 * DashboardEmp.jsx
 * 
 * Esta vista muestra el dashboard de una empresa específica, proporcionando una visión detallada de la información del postulante
 * y de la empresa. Está organizada en diferentes secciones que incluyen tarjetas temáticas, tablas de preguntas y validaciones, 
 * e información detallada de la empresa y el postulante.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Envuelve la estructura del dashboard, proporcionando un layout base para la página.
 * - GoBack: Un botón que permite volver a la vista anterior, en este caso, al listado de empresas registradas.
 * - TarjetasTema: Muestra tarjetas con temas relacionados al estado del dashboard.
 * - TablaPreguntas: Componente que contiene una tabla de preguntas relacionadas con la empresa.
 * - ValidacionDeSueños: Tabla que muestra la validación de los sueños del emprendedor o empresario.
 * 
 * Estructura de la vista:
 * - Encabezado: Incluye un fondo oscuro que ocupa la parte superior de la pantalla.
 * - GoBack: Un componente de retorno que indica la ruta de navegación anterior.
 * - Tarjetas: Un contenedor flexible que muestra tarjetas temáticas.
 * - Sección de tablas: Incluye tablas con preguntas relevantes y validaciones.
 * - Información del postulante y de la empresa: Presenta datos personales y empresariales de manera estructurada con dos columnas.
 * 
 * Estilos:
 * - El diseño se adapta a diferentes tamaños de pantalla (diseño responsive) con clases de Tailwind CSS.
 * - Personalización adicional del scroll utilizando estilos en JSX para la scrollbar.
 */

import React, { useEffect, useState } from "react";
import GoBack from "../../components/inputs/goback/GoBack.jsx";
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import TarjetasTema from "../../components/tarjetasdashboard/tarjetasTema.jsx";
import TablaPreguntas from "../../components/tablas/tablaempregunta.jsx";
import ValidacionDeSueños from "../../components/tablas/validacionSuenos.jsx";
import { useParams } from 'react-router-dom';

const DashboardEmp = () => {
  const { nit } = useParams();
  const [empresa, setEmpresa] = useState({});
  const [calificacionesBajas, setCalificacionesBajas] = useState([]);
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [calificaciones, setCalificaciones] = useState([]);
  const [postulante, setPostulante] = useState([]);

  useEffect(() => {
    if (nit) {
      // Obtener información de la empresa
      fetch(`http://localhost:8000/api/v2/empresas/${nit}/`)
        .then(response => response.json())
        .then(data => setEmpresa(data))
        .catch(error => console.error("Error fetching empresa:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      // Obtener calificaciones bajas
      fetch(`http://localhost:8000/api/v2/calificaciones-bajas/empresa/${nit}/`)
        .then(response => response.json())
        .then(data => setCalificacionesBajas(data))
        .catch(error => console.error("Error fetching calificaciones bajas:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      // Obtener los diagnósticos
      fetch(`http://localhost:8000/api/v2/diagnostico/${nit}/`)
        .then(response => response.json())
        .then(data => setDiagnosticos(data.diagnosticos))
        .catch(error => console.error("Error fetching diagnosticos:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      // Obtener las calificaciones de la empresa
      fetch(`http://localhost:8000/api/v2/calificaciones/empresa/${nit}/`)
        .then(response => response.json())
        .then(data => setCalificaciones(data))
        .catch(error => console.error("Error fetching calificaciones:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      fetch(`http://localhost:8000/api/v2/postulante/num/${nit}/`)
        .then(response => response.json())
        .then(data => setPostulante(data))
        .catch(error => console.error("Error fetching postulante:", error));
    }
  }, [nit]);

  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack xl:h-20 lg:h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col py-2 xl:gap-5 lg:gap-5 gap-4 w-full xl:h-full px-4 lg:px-12 xl:px-12 pt-4 xl:pt-6">
            <GoBack text={`Empresas Registradas / ${empresa.nombre_empresa || 'Cargando...'}`} />

            <div className="flex flex-col xl:flex-row lg:w-full lg:flex-row xl:gap-[5rem] lg:gap-[3rem] gap-10">
              <div className="flex flex-col h-max lg:flex-row gap-5 w-full xl:w-full lg:w-full">
                <TarjetasTema nit={nit} />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row lg:flex-row gap-8 max-md:pb-2 xl:pb-2 lg:pb-2 xl:justify-between h-full">
              <TablaPreguntas calificaciones={calificaciones} />
              <ValidacionDeSueños diagnosticos={diagnosticos} />
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
                          {postulante.nombres_postulante}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Celular</h2>
                        <p className="text-principalGreen font-semibold">{postulante.celular}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Correo</h2>
                        <p className="text-principalGreen font-semibold">{postulante.correo}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Municipio</h2>
                        <p className="text-principalGreen font-semibold">{postulante.municipio}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Tipo de Documento</h2>
                        <p className="text-principalGreen font-semibold">{postulante.tipo_documento}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">No. Documento</h2>
                        <p className="text-principalGreen font-semibold">{postulante.no_documento}</p>
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
                        <p className="text-principalGreen font-semibold">{empresa.producto_servicio}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Fecha de Inicio</h2>
                        <p className="text-principalGreen font-semibold">{empresa.fecha_creacion}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Costos el Ultimo Año</h2>
                        <p className="text-principalGreen font-semibold">{empresa.costos_ult_ano}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Razon Social</h2>
                        <p className="text-principalGreen font-semibold">{empresa.razon_social}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Celular Empresa</h2>
                        <p className="text-principalGreen font-semibold">{empresa.celular}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Ventas el Ultimo Año</h2>
                        <p className="text-principalGreen font-semibold">{empresa.ventas_ult_ano}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">NIT</h2>
                        <p className="text-principalGreen font-semibold">{empresa.nit}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Empleados Permanentes</h2>
                        <p className="text-principalGreen font-semibold">{empresa.empleados_perm}</p>
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

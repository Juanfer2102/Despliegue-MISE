import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importa framer-motion
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
    // Obtener información de la empresa
    fetch(`http://localhost:8000/api/v2/empresas/${nit}/`)
      .then(response => response.json())
      .then(data => {
        setEmpresa(data);
      });
  }, [nit]);

  useEffect(() => {
    // Obtener calificaciones bajas
    fetch(`http://localhost:8000/api/v2/calificaciones-bajas/empresa/${nit}/`)
      .then(response => response.json())
      .then(data => {
        setCalificacionesBajas(data);
      });
  }, [nit]);

  useEffect(() => {
    // Obtener los diagnósticos
    fetch(`http://localhost:8000/api/v2/diagnostico/${nit}/`)
      .then(response => response.json())
      .then(data => {
        setDiagnosticos(data.diagnosticos);
      });
  }, [nit]);

  useEffect(() => {
    // Obtener las calificaciones de la empresa
    fetch(`http://localhost:8000/api/v2/calificaciones/empresa/${nit}/`)
      .then(response => response.json())
      .then(data => {
        setCalificaciones(data); // Asegúrate de que el formato del API coincida
      });
  }, [nit]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v2/postulante/num/${nit}/`)
      .then(response => response.json())
      .then(data => {
        setPostulante(data);
      });
  }, [nit]);

  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack xl:h-20 lg:h-20 w-full"></div>
          <div className="bg-greyBg flex flex-col py-2 xl:gap-5 lg:gap-5 gap-4 w-full xl:h-full px-4 lg:px-12 xl:px-12 pt-4 xl:pt-6">
            <GoBack text={`Empresas Registradas / ${empresa.nombre_empresa}`} />

            <motion.div
              className="flex flex-col xl:flex-row lg:flex-row xl:gap-[5rem] lg:gap-[3rem] gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:h-[28rem] lg:flex-row gap-5 w-full xl:w-auto lg:w-auto">
                <TarjetasTema />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col xl:flex-row lg:flex-row gap-8 max-md:pb-2 xl:pb-2 lg:pb-2 xl:justify-between h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TablaPreguntas calificaciones={calificaciones} />
              <ValidacionDeSueños diagnosticos={diagnosticos} />
            </motion.div>

            <div className="flex xl:flex-row lg:flex-row flex-col xl:gap-[5rem] lg:gap-[5rem]">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white p-3">Información Postulante</h1>
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
              </motion.div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white p-3">Información Empresa</h1>
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
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Costos el Último Año</h2>
                        <p className="text-principalGreen font-semibold">{empresa.costos_ult_ano}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Razón Social</h2>
                        <p className="text-principalGreen font-semibold">{empresa.razon_social}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Celular Empresa</h2>
                        <p className="text-principalGreen font-semibold">{empresa.celular}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Ventas el Último Año</h2>
                        <p className="text-principalGreen font-semibold">{empresa.ventas_ult_ano}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Dirección</h2>
                        <p className="text-principalGreen font-semibold">{empresa.direccion}</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Teléfono</h2>
                        <p className="text-principalGreen font-semibold">{empresa.celular }</p>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Número de Empleados</h2>
                        <p className="text-principalGreen font-semibold">{empresa.empleados_perm}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default DashboardEmp;

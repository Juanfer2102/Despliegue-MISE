import React, { useEffect, useState } from "react";
import BackButton from "../../components/inputs/goback/BackButton.jsx";
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import TarjetasTema from "../../components/tarjetasdashboard/tarjetasTema.jsx";
import TablaPreguntas from "../../components/tablas/tablaempregunta.jsx";
import ValidacionDeSueños from "../../components/tablas/validacionSuenos.jsx";
import ModalInformativo from "../../components/modales/modalexito.jsx";
import Modalcarga from "../../components/modales/modalcarga/modalcarga.jsx";
import ConfirmModal from "../../components/modales/modalconfirm.jsx";
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const DashboardEmp = () => {
  const { nit } = useParams();
  const [empresa, setEmpresa] = useState({});
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [calificacionesBajas, setCalificacionesBajas] = useState([]);
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [calificaciones, setCalificaciones] = useState([]);
  const [postulante, setPostulante] = useState([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // Estado para el botón

  const navigate = useNavigate(); // Hook para navegar

  useEffect(() => {
    if (nit) {
      fetch(`https://despliegue-mise.onrender.com/api/v2/empresas/${nit}/`)
        .then(response => response.json())
        .then(data => setEmpresa(data))
        .catch(error => console.error("Error fetching empresa:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      fetch(`https://despliegue-mise.onrender.com/api/v2/calificaciones-bajas/empresa/${nit}/`)
        .then(response => response.json())
        .then(data => setCalificacionesBajas(data))
        .catch(error => console.error("Error fetching calificaciones bajas:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      fetch(`https://despliegue-mise.onrender.com/api/v2/diagnostico/${nit}/`)
        .then(response => response.json())
        .then(data => {
          const filteredDiagnosticos = data.diagnosticos.map(diagnostico => ({
            ...diagnostico,
            suenos: diagnostico.suenos.filter(sueño => sueño.estado === 0)
          })).filter(diagnostico => diagnostico.suenos.length > 0);
          setDiagnosticos(filteredDiagnosticos);
        })
        .catch(error => console.error("Error fetching diagnosticos:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      fetch(`https://despliegue-mise.onrender.com/api/v2/calificaciones/empresa/${nit}/`)
        .then(response => response.json())
        .then(data => setCalificaciones(data))
        .catch(error => console.error("Error fetching calificaciones:", error));
    }
  }, [nit]);

  useEffect(() => {
    if (nit) {
      fetch(`https://despliegue-mise.onrender.com/api/v2/postulante/num/${nit}/`)
        .then(response => response.json())
        .then(data => setPostulante(data))
        .catch(error => console.error("Error fetching postulante:", error));
    }
  }, [nit]);

  // Effecto para habilitar el botón "Terminar Proceso"
  useEffect(() => {
    const allTopicsApproved = calificaciones.every(calificacion => calificacion.estado !== 0);
    const allSuenosApproved = diagnosticos.every(diagnostico =>
      diagnostico.suenos.every(sueño => sueño.estado !== 0)
    );

    setIsButtonEnabled(allTopicsApproved && allSuenosApproved);
  }, [calificaciones, diagnosticos]);

  // Función para abrir el modal de confirmación
  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  // Función para cerrar el modal de confirmación
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleConfirm = () => {
    closeConfirmModal();
    handleProcess(nit);
  };

  const handleProcess = (nit) => {
    navigate(`/evaluacionfinal/empresa/${nit}`); // Usar navigate para navegar
  };

  return (
    <>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        closeModal={closeConfirmModal}
        handleConfirm={handleConfirm}
      />
      <LayoutDashboard title="Dashboard">
        <main className="bg-greyBg w-full h-screen overflow-x-hidden">
          <div className="flex flex-col w-full h-full">
            <div className="bg-greyBlack xl:h-20 lg:h-20 w-full"></div>
            <div className="bg-greyBg flex flex-col py-2 xl:gap-5 lg:gap-5 gap-4 w-full xl:h-full px-4 lg:px-12 xl:px-12 pt-4 xl:pt-6">
              <div className="flex justify-between items-center">
                <BackButton navigateUrl="/empresas-registradas" text={`Empresas Registradas / ${empresa.nombre_empresa || 'Cargando...'}`} />
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${isButtonEnabled ? 'bg-principalGreen text-white hover:bg-white hover:text-principalGreen' : 'hidden'}`}
                  disabled={!isButtonEnabled} // Deshabilitar botón si no se cumplen las condiciones
                  onClick={() => openConfirmModal()} // Aquí se usa una función de flecha para evitar la ejecución inmediata
                >
                  Terminar Proceso
                </button>

              </div>
              <div className="flex flex-col xl:flex-col lg:w-full lg:flex-col xl:gap-[2rem] lg:gap-[3rem] gap-10">
                <p className="text-white font-bold pr-24">
                  ATENCION: Para la culminacion del proceso con la empresa, debe de verificar que todos los temas tengan una aprobacion o una
                  desaprobacion y que cada sueño se haya verificado de si se cumplio, o no, de lo contrario, el proceso con la empresa
                  no se puede dar por finalizado. *
                </p>
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
                          <p className="text-principalGreen font-semibold">{postulante.nombres_postulante}</p>
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
                          <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Razon Social</h2>
                          <p className="text-principalGreen font-semibold">{empresa.razon_social}</p>
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Nit</h2>
                          <p className="text-principalGreen font-semibold">{empresa.nit}</p>
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Fecha Inicio</h2>
                          <p className="text-principalGreen font-semibold">{empresa.fecha_creacion}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Representante Legal</h2>
                          <p className="text-principalGreen font-semibold">{postulante.nombres_postulante} {postulante.apellidos_postulante}</p>
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Telefono</h2>
                          <p className="text-principalGreen font-semibold">{empresa.celular}</p>
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Email</h2>
                          <p className="text-principalGreen font-semibold">{empresa.correo}</p>
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
    </>
  );
};

export default DashboardEmp;

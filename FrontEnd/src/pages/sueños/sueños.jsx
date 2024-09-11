import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Modal from "../../components/modales/modal.jsx";
import Aadirmodulo from "../../components/modales/añadirmodulo.jsx";
import Modalopciones from "../../components/modales/modalopciones.jsx";

// Estilos en JSX
const styles = {
  customScrollbar: {
    background: '#262B32',
    borderRadius: '12px',
  },
  customScrollbarThumb: {
    borderRadius: '10px',
  },
  customScrollbarThumbHover: {
    background: '#555',
  }
};

const Sueos = () => {
  return (
    <LayoutDashboard title="Sueños">
      <main className="flex flex-col w-full bg-greyBlack overflow-x-hidden h-full overflow-y-hidden" style={styles.customScrollbar}>
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">

            <p className="text-2xl text-white py-3">Sueños</p>

            <div className="flex flex-col xl:flex-row gap-5">
              <div className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow custom-scrollbar">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 p-4 items-center w-full">
                  <a href="/editar-sueños">
                    <Modal
                      texto="Deseo definir mi propósito empresarial"
                      colorborde="border-azulclaro"
                      colorhover="hover:bg-azulclaro"
                    />
                  </a>
                  <Modal
                    texto="Deseo definir mi modelo de negocio"
                    colorborde="border-azulclaro"
                    colorhover="hover:bg-azulclaro"
                  />
                  <Modal
                    texto="Deseo implementar mi estrategia empresarial"
                    colorborde="border-azulclaro"
                    colorhover="hover:bg-azulclaro"
                  />
                  <Modal
                    texto="Deseo caracterizar o documentar mis operaciones"
                    colorborde="border-amarillo"
                    colorhover="hover:bg-amarillo"
                  />
                  <Modal
                    texto="Deseo implementar indicadores clave de desempeño (KPI's) para hacer seguimiento a mi estrategia"
                    colorborde="border-amarillo"
                    colorhover="hover:bg-amarillo"
                  />
                  <Modal
                    texto="Deseo definir mi estructura de costos operacionales"
                    colorborde="border-amarillo"
                    colorhover="hover:bg-amarillo"
                  />
                  <Modal
                    texto="Deseo definir mi margen de contribución"
                    colorborde="border-amarillo"
                    colorhover="hover:bg-amarillo"
                  />
                  <Modal
                    texto="Deseo definir mis estrategias de promoción y publicidad"
                    colorborde="border-fucsia"
                    colorhover="hover:bg-fucsia"
                  />
                  <Modal
                    texto="Deseo definir el perfil de mi cliente ideal y el segmento de mercado al que me dirijo"
                    colorborde="border-fucsia"
                    colorhover="hover:bg-fucsia"
                  />
                  <Modal
                    texto="Deseo definir estrategias de marketing inbound y de contenidos"
                    colorborde="border-fucsia"
                    colorhover="hover:bg-fucsia"
                  />
                  <Modal
                    texto="Deseo tener un manual de conceptualización de mi marca"
                    colorborde="border-fucsia"
                    colorhover="hover:bg-fucsia"
                  />
                  <a href="/nuevo-sueño">
                    <Aadirmodulo />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5 sm:gap-10 justify-center">
                <Modalopciones texto="Modulos" URL="/modulos" />
                <Modalopciones texto="Preguntas" URL="/preguntas" />
                <Modalopciones texto="Talleres" URL="/talleres" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );

};

export default Sueos;

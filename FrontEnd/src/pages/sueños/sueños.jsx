import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Modal from "../../components/modales/modal.jsx";
import Aadirmodulo from "../../components/modales/añadirmodulo.jsx";
import Modalopciones from "../../components/modales/modalopciones.jsx";

// Estilos en JSX
const styles = {
  customScrollbar: {
    width: '13px',
    background: '#262B32',
    borderRadius: '12px',
  },
  customScrollbarThumb: {
    background: '#888',
    borderRadius: '10px',
  },
  customScrollbarThumbHover: {
    background: '#555',
  }
};

const Sueos = () => {
  return (
    <LayoutDashboard title="Sueños">
      <main className="flex flex-row w-full bg-greyBlack h-screen" style={styles.customScrollbar}>
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-8 py-5 h-full w-full">
            <div className="pb-1">
              <p className="text-2xl text-white">Sueños</p>
            </div>
            <div className="left flex flex-row gap-5 p-1">
              <div className="container bg-greyBlack rounded-xl p-4 max-h-[50rem] overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-8 items-center">
                  <a href="/sueños/editarSueños">
                    <Modal texto="Deseo definir mi propósito empresarial" colorborde="border-azulclaro" colorhover="hover:bg-azulclaro" />
                  </a>
                  <Modal texto="Deseo definir mi modelo de negocio" colorborde="border-azulclaro" colorhover="hover:bg-azulclaro" />
                  <Modal texto="Deseo implementar mi estrategia empresarial" colorborde="border-azulclaro" colorhover="hover:bg-azulclaro" />
                  <Modal texto="Deseo caracterizar o documentar mis operaciones" colorborde="border-amarillo" colorhover="hover:bg-amarillo" />
                  <Modal texto="Deseo implementar indicadores clave de desempeño (KPI's) para hacer seguimiento a mi estrategia" colorborde="border-amarillo" colorhover="hover:bg-amarillo" />
                  <Modal texto="Deseo definir mi estructura de costos operacionales" colorborde="border-amarillo" colorhover="hover:bg-amarillo" />
                  <Modal texto="Deseo definir mi margen de contribución" colorborde="border-amarillo" colorhover="hover:bg-amarillo" />
                  <Modal texto="Deseo definir mis estrategias de promoción y publicidad" colorborde="border-fucsia" colorhover="hover:bg-fucsia" />
                  <Modal texto="Deseo definir el perfil de mi cliente ideal y el segmento de mercado al que me dirijo" colorborde="border-fucsia" colorhover="hover:bg-fucsia" />
                  <Modal texto="Deseo definir estrategias de marketing inbound y de contenidos" colorborde="border-fucsia" colorhover="hover:bg-fucsia" />
                  <Modal texto="Deseo tener un manual de conceptualización de mi marca" colorborde="border-fucsia" colorhover="hover:bg-fucsia" />
                  <a href="/sueños/nuevosueño">
                    <Aadirmodulo />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-10 justify-center">
                <Modalopciones texto="Modulos" URL="/modulos/modulos" />
                <Modalopciones texto="Preguntas" URL="/preguntas/preguntas" />
                <Modalopciones texto="Talleres" URL="/talleres/talleres" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Sueos;

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modal from "../../components/modales/modal";
import Modalopciones from "../../components/modales/modalopciones";
import ModulosContainer from '../../components/crearyeditar/moduloscont';

// Estilos en JSX
const styles = {
  customScrollbar: {
    scrollbarWidth: '13px',
    scrollbarColor: '#888 #262b32',
  },
  customScrollbarTrack: {
    background: '#262b32',
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

const Modulos = () => {
  return (
    <LayoutDashboard title="Modulos">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <p className="text-2xl text-white py-3">Modulos</p>

            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5">
              <div
                className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow"
                style={styles.customScrollbar}
              >
                  <ModulosContainer />
              </div>
              <div className="flex flex-col xl:flex-col justify-center xl:justify-center gap-4 lg:gap-5 xl:gap-5 mt-4 lg:mt-0">
                <Modalopciones texto="Sueños" URL="/sueños" />
                <Modalopciones texto="Preguntas" URL="/preguntas" />
                <Modalopciones texto="Temas" URL="/temas" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Modulos;

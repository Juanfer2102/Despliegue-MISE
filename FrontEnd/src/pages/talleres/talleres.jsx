import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modal from "../../components/modales/modal";
import Aadirmodulo from "../../components/modales/añadirmodulo";
import Modalopciones from "../../components/modales/modalopciones";


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

const Talleres = () => {
  return (
    <LayoutDashboard title="Talleres">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">

            <p className="text-2xl text-white py-3">Talleres</p>

            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5">
              <div className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow"
              style={styles.customScrollbar}>
                <div className="grid max-md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 p-4 items-center w-full">
                  <a href="/editar-taller">
                    <Modal texto={"MEJORA DE OPERACIONES"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/editar-taller">
                    <Modal texto={"GERENCIA DE MARKETING"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/editar-taller">
                    <Modal texto={"GERENCIA DE VENTAS"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/editar-taller">
                    <Modal texto={"GERENCIA DE TALENTO HUMANO"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/editar-taller">
                    <Modal texto={"FINANZAS GERENCIALES"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/nuevo-taller">
                    <Aadirmodulo />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5 sm:gap-10 justify-center">
                <Modalopciones texto={"Modulos"} URL="/modulos" />
                <Modalopciones texto={"Sueños"} URL="/sueños" />
                <Modalopciones texto={"Preguntas"} URL="/preguntas" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Talleres;

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modal from "../../components/modales/modal";
import Aadirmodulo from "../../components/modales/añadirmodulo";
import Modalopciones from "../../components/modales/modalopciones";

// Estilos en JSX
const customScrollbarStyle = {
  overflowY: 'auto',
  scrollbarWidth: 'thin', // Para navegadores que soportan scrollbars personalizadas
  scrollbarColor: '#888 #262b32', // thumb color y track color
};

const Talleres = () => {
  return (
    <LayoutDashboard title="Talleres">
      <main className="flex flex-col w-full bg-greyBlack overflow-x-hidden h-full overflow-y-hidden" style={customScrollbarStyle}>
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">

            <p className="text-2xl text-white py-3">Talleres</p>

            <div className="flex flex-col xl:flex-row gap-5">
              <div className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 p-4 items-center w-full">
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

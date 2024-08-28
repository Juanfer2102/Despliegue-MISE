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
      <main className="flex flex-row w-full bg-greyBlack h-screen" style={customScrollbarStyle}>
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full">
            {/* Espacio para futuros botones u otros elementos */}
          </div>
          <div className="bg-greyBg flex flex-col px-8 py-5 h-full w-full">
            <div className="pb-1">
              <p className="text-2xl text-white">Talleres</p>
            </div>
            <div className="left flex flex-row h-full gap-5 p-1">
              <div className="container bg-greyBlack rounded-xl p-4 max-h-[50rem] overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-5 items-center">
                  <a href="/talleres/editartalleres">
                    <Modal texto={"MEJORA DE OPERACIONES"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/talleres/editartalleres">
                    <Modal texto={"GERENCIA DE MARKETING"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/talleres/editartalleres">
                    <Modal texto={"GERENCIA DE VENTAS"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/talleres/editartalleres">
                    <Modal texto={"GERENCIA DE TALENTO HUMANO"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/talleres/editartalleres">
                    <Modal texto={"FINANZAS GERENCIALES"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <a href="/talleres/nuevotaller">
                    <Aadirmodulo />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-10 justify-center">
                <Modalopciones texto={"Modulos"} URL="/modulos/modulos" />
                <Modalopciones texto={"Sueños"} URL="/sueños/sueños" />
                <Modalopciones texto={"Preguntas"} URL="/preguntas/preguntas" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Talleres;

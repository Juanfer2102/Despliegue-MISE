import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Editarmodulos from "../../components/modales/modaleditar.jsx";

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

const ModulosPage = () => {
  return (
    <LayoutDashboard title="Modulos">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Editarmodulos condicion={2} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default ModulosPage;

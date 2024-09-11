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
      <main className="flex flex-row w-full bg-greyBlack h-screen" style={styles.customScrollbar}>
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-8 py-5 h-full w-full">
            <div className="left flex flex-row gap-5 p-1">
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

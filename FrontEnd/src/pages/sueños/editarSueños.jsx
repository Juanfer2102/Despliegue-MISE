import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Modaleditar from "../../components/modales/modaleditar.jsx";
import BotonGuardar from "../../components/modales/modalcarga/modalcarga.jsx";

// Estilos en JSX
const styles = {
  customScrollbar: {
    scrollbarWidth: 'thin', // Para navegadores que soportan scrollbars personalizadas
    scrollbarColor: '#888 #262b32', // thumb color y track color
  },
  customScrollbarThumb: {
    backgroundColor: '#888',
    borderRadius: '10px',
  },
  customScrollbarThumbHover: {
    backgroundColor: '#555',
  }
};

const Editarsueos = () => {
  return (
    <LayoutDashboard title="Sueños">
      <main className="flex flex-row w-full bg-greyBlack h-screen" style={styles.customScrollbar}>
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full">
          </div>
          <div className="bg-greyBg flex flex-col px-8 py-5 h-full w-full">
            <div className="left flex flex-row gap-5 p-1">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={4} client:visible />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Editarsueos;

import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
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

const NuevoSueo = () => {
  return (
    <LayoutDashboard title="Sueños">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">
            <div className="flex max-md:flex-col xl:flex-row min-lg:flex-row gap-5 py-2">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Modaleditar condicion={3} client:visible />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default NuevoSueo;

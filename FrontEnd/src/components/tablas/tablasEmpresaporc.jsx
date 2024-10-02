import React from "react";

const TablasEmpresaporc = () => {

  // Estilos en JSX
  const styles = {
    customScrollbar: {
      scrollbarWidth: '13px',  // Ancho de la barra de desplazamiento
      scrollbarColor: '#888 #262b32',  // Color del thumb y del track
    },
    customScrollbarTrack: {
      background: '#262b32',  // Color de fondo del track
      borderRadius: '12px',  // Bordes redondeados del track
    },
    customScrollbarThumb: {
      background: '#888',  // Color del thumb
      borderRadius: '10px',  // Bordes redondeados del thumb
    },
    customScrollbarThumbHover: {
      background: '#555',  // Color del thumb al pasar el ratón por encima
    }
  };

  return (
    <div className="w-full rounded-xl">
      {/* Cabecera de la tabla */}
      <div className="bg-greyBlack border-textBg rounded-xl text-white sticky top-0 z-10 flex">
        <div className="flex-1 p-3 text-left font-bold">Nombre</div>
        <div className="flex-1 p-3 text-left font-bold hidden sm:block">Sector</div>
        <div className="flex-1 p-3 text-left font-bold hidden md:block">Encargado</div>
        <div className="flex-1 p-3 text-center font-bold">Desarrollo (%)</div>
      </div>
      {/* Contenido de la tabla */}
      <div className="divide-y border overflow-y-auto max-h-[5rem] custom-scrollbar border-textBg border-t-0 rounded" style={styles.customScrollbar}>
        {/* Fila de datos */}
        <div className="flex bg-transparent border-transparent justify-center">
          <div className="flex-1 p-3 md:py-8 text-xs text-left sm:text-sm text-white">
            nit
          </div>
          <div className="flex-1 p-3 md:py-8 text-xs text-left sm:text-sm text-white hidden sm:block">
            nombre
          </div>
          <div className="flex-1 p-3 md:py-8 text-xs text-left sm:text-sm text-white hidden md:block">
            nombre
          </div>
          <div className="flex-1 p-3 text-xs sm:text-sm flex justify-center items-center">
            <div className="inline-block p-2 px-3 md:px-4 tracking-wide transition-colors bg-principalGreen transform border-solid rounded-lg text-white font-semibold">
              96%
            </div>
          </div>
        </div>
        {/* Otra fila de datos */}
        <div className="flex bg-transparent border-transparent">
          <div className="flex-1 p-3 md:p-5 md:py-8 text-xs sm:text-sm text-white">
            nit
          </div>
          <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm text-white hidden sm:block">
            nombre
          </div>
          <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm text-white hidden md:block">
            nombre
          </div>
          <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm flex justify-center items-center">
            <div className="inline-block p-2 px-3 md:px-4 tracking-wide transition-colors bg-principalGreen transform border-solid rounded-lg text-white font-semibold">
              96%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablasEmpresaporc;

import React from "react";

const TablasEmpestado = () => {

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

  return (
    <div className="overflow-x-auto rounded-xl">
      <div className="min-w-full rounded-xl">
        <div className="bg-greyBlack border-textBg rounded-xl text-white sticky top-0 z-10 flex">
          <div className="flex-1 p-3 md:p-5 text-left font-bold">Nombre</div>
          <div className="flex-1 p-3 md:p-5 text-left font-bold hidden sm:block">Sector</div>
          <div className="flex-1 p-3 md:p-5 text-center font-bold">Estado</div>
        </div>
        <div className="divide-y border overflow-y-auto max-h-[10rem] custom-scrollbar border-textBg border-t-0 rounded" style={styles.customScrollbar}>
          <div className="flex bg-transparent border-transparent">
            <div className="flex-1 p-3 md:p-5 md:py-8 text-xs sm:text-sm text-white">
              nit
            </div>
            <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm text-white hidden sm:block">
              nombre
            </div>
            <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm flex justify-center items-center">
              <div className="inline-block p-2 px-3 md:px-4 tracking-wide transition-colors bg-principalGreen transform border-solid rounded-lg text-white font-semibold">
                Aceptado
              </div>
            </div>
          </div>
          <div className="flex bg-transparent border-transparent">
            <div className="flex-1 p-3 md:p-5 md:py-8 text-xs sm:text-sm text-white">
              nit
            </div>
            <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm text-white hidden sm:block">
              nombre
            </div>
            <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm flex justify-center items-center">
              <div className="inline-block p-2 px-3 md:px-4 tracking-wide transition-colors bg-principalGreen transform border-solid rounded-lg text-white font-semibold">
                Aceptado
              </div>
            </div>
          </div>
          <div className="flex bg-transparent border-transparent">
            <div className="flex-1 p-3 md:p-5 md:py-8 text-xs sm:text-sm text-white">
              nit
            </div>
            <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm text-white hidden sm:block">
              nombre
            </div>
            <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm flex justify-center items-center">
              <div className="inline-block p-2 px-3 md:px-4 tracking-wide transition-colors bg-principalGreen transform border-solid rounded-lg text-white font-semibold">
                Aceptado
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablasEmpestado;
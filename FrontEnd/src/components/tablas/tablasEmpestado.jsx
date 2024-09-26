import React from "react";

const TablasEmpestado = () => {

  // Estilos en JSX
  const styles = {
    customScrollbar: {
      scrollbarWidth: '13px',  // Define el ancho de la barra de desplazamiento
      scrollbarColor: '#888 #262b32',  // Define el color del thumb (#888) y del track (#262b32)
    },
    customScrollbarTrack: {
      background: '#262b32',  // Color de fondo del track de la barra de desplazamiento
      borderRadius: '12px',  // Bordes redondeados para el track
    },
    customScrollbarThumb: {
      background: '#888',  // Color del thumb
      borderRadius: '10px',  // Bordes redondeados para el thumb
    },
    customScrollbarThumbHover: {
      background: '#555',  // Color del thumb cuando se pasa el mouse por encima
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl">
      <div className="min-w-full rounded-xl">
        {/* Cabecera de la tabla */}
        <div className="bg-greyBlack border-textBg rounded-xl text-white sticky top-0 flex">
          <div className="flex-1 p-3 md:p-5 text-left font-bold">Nombre</div>
          <div className="flex-1 p-3 md:p-5 text-left font-bold hidden sm:block">Sector</div>
          <div className="flex-1 p-3 md:p-5 text-center font-bold">Estado</div>
        </div>

        {/* Contenido de la tabla */}
        <div className="divide-y border overflow-y-auto max-h-[40rem] custom-scrollbar border-textBg border-t-0 rounded" style={styles.customScrollbar}>
          
          {/* Primera fila de ejemplo */}
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
          
          {/* Segunda fila de ejemplo */}
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

          {/* Tercera fila de ejemplo */}
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

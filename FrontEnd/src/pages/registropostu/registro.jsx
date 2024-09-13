import React from "react";
import Logo from "../../components/logo";
import { FormRegistro } from "../../components/forms/formsregistro/formsregistro";

const Registro = () => {

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
    <main className="relative h-screen">
      {/* Overlay para el fondo oscuro */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="../src/images/loginImg/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor del contenido */}
      <div className="relative z-20 flex flex-col-reverse xl:flex-row lg:flex-row items-center justify-center h-full xl:gap-5 lg:gap-5 p-4 lg:p-0">
        {/* Contenedor del formulario de registro */}
        <div className="register-container text-white w-full lg:w-[50rem] h-full flex flex-col justify-center xl:pl-28 lg:py-5 lg:pl-28 gap-5 text-center lg:text-left" style={styles.customScrollbar}>
          <p className="font-bold text-2xl lg:text-3xl">Registro Persona</p>
          <FormRegistro client:visible />
        </div>

        {/* Contenedor del logo */}
        <div className="w-full lg:w-[50rem] flex items-center justify-center lg:pt-20 xl:p-6 lg:p-6">
          <Logo />
        </div>
      </div>
    </main>
  );
};

export default Registro;

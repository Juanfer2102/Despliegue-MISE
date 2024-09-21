import React from "react";
import FormsRegistro from "../../components/forms/formsregistroemp/formsregistroemp";
import Logo from "../../components/logo/logo";

const RegistroEmpresa = () => {

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
    <main>
      {/* Fondo oscuro superpuesto */}
      <div className="h-full w-full absolute z-10 bg-black bg-opacity-60"></div>

      {/* Imagen de fondo */}
      <div className="flex flex-col">
        <img
          src="../src/images/loginImg/bg.jpg"
          alt=""
          className="w-full h-full fixed z-0 object-cover"
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-20 flex flex-col-reverse xl:flex-row lg:flex-row items-center justify-center h-screen xl:gap-5 lg:gap-5 p-4 lg:p-0">
        <div className="register-container text-white w-full h-full flex flex-col justify-center lg:px-20 lg:py-10 gap-5 text-center lg:text-left" style={styles.customScrollbar}>
          <FormsRegistro client:visible />
        </div>
      </div>
    </main>
  );
};

export default RegistroEmpresa;

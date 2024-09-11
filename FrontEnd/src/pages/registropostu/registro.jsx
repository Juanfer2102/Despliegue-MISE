import React from "react";
import Logo from "../../components/logo";
import { FormRegistro } from "../../components/forms/formsregistro/formsregistro";

const Registro = () => {
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
    <div className="relative z-20 flex flex-col-reverse xl:flex-row items-center justify-center h-full xl:gap-5 p-4 lg:p-0">
      {/* Contenedor del formulario de registro */}
      <div className="register-container text-white w-full lg:w-1/2 h-full flex flex-col justify-center xl:pl-28 gap-5 text-center lg:text-left">
        <p className="font-bold text-2xl lg:text-3xl">Registro Persona</p>
        <FormRegistro client:visible />
      </div>

      {/* Contenedor del logo */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:pt-20 p-6 lg:p-0">
        <Logo />
      </div>
    </div>
  </main>
);
};

export default Registro;

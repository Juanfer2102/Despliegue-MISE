import React from "react";
import FormsRegistro from "../../components/forms/formsregistroemp/formsregistroemp";
import Logo from "../../components/logo";

const RegistroEmpresa = () => {
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
      <div className="relative z-20 flex h-screen items-center justify-center py-3">
        <div className="register-container w-full h-full flex flex-col justify-center text-white text-center p-4 md:p-20 lg:p-28 gap-5">
          <FormsRegistro client:visible />
        </div>
      </div>
    </main>
  );
};

export default RegistroEmpresa;

import React from "react";
import FormsRegistro from "../../components/forms/formsregistroemp/formsregistroemp";
import Logo from "../../components/logo";

const RegistroEmpresa = () => {
  return (
    <main>
      <div className="h-full w-full absolute z-10 bg-black bg-opacity-60"></div>
      <div className="flex flex-col">
        <img
          src="../src/images/loginImg/bg.jpg"
          alt=""
          className="w-full h-full fixed z-0"
        />
      </div>

      <div className="all relative z-20 flex h-screen items-center justify-center gap-0 py-3">
        <div className="register-container text-white w-full h-full flex flex-col justify-center p-28 gap-5 text-center">
          <FormsRegistro client:visible />
        </div>

        {/* <div className="flex w-full h-full items-center justify-center">
          <Logo />
        </div> */}
      </div>
    </main>
  );
};

export default RegistroEmpresa;

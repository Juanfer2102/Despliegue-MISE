import React from "react";
import Logo from "../../components/logo/logo";
import Formscredenciales from "../../components/forms/formscredenciales/formscredenciales";

const Credencial = () => {
  return (
    <main>
      <div className="h-full w-full absolute z-10 bg-black bg-opacity-60"></div>
      <img
        src="../src/images/loginImg/bg.jpg"
        alt=""
        className="w-full h-full fixed z-0"
      />
      <div className="all relative z-20 flex h-screen items-center justify-center gap-0">
        <div className="w-full h-full">
          <div className="flex w-full h-full items-center justify-center">
            <Logo />
          </div>
        </div>
        <div className="login-container text-white w-full h-full flex flex-col justify-center pr-40 gap-3 text-center">
          <p className="font-bold text-2xl">Nuevas Credenciales</p>
          <p>La contraseña debe tener como mínimo 8 caracteres.</p>
          <p>La contraseña debe tener una mayúscula, un carácter especial y un número.</p>

          <Formscredenciales client:visible />
        </div>
      </div>
    </main>
  );
};

export default Credencial;

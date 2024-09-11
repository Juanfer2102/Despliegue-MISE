import React from "react";
import Logo from "../../components/logo";
import Formsreescribircont from "../../components/forms/formsreescribircont/formsreescribircont";

const Rescribircontrase = () => {
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
        <div
          className="login-container text-white w-full h-full flex flex-col justify-center pr-40 gap-6 text-center"
        >
          <p className="font-bold text-3xl">¿Olvidaste tu Contraseña?</p>
          <p className="text-2xl">
            Recibirás un enlace para restablecer tu contraseña.
            Por favor, revisa tu correo.
          </p>

          <Formsreescribircont />
          
        </div>
      </div>
    </main>
  );
};

export default Rescribircontrase;

import React from "react";
import Logo from "../../components/logo/logo";
import Formsrecupcont from "../../components/forms/formsrecupcont/formsrecupcont";

const Olvidastecontra = () => {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>
      <img
        src="../src/images/loginImg/bg.jpg"
        alt="Background"
        className="w-full h-full object-cover fixed z-0"
      />
      <div className="relative z-20 flex flex-col lg:justify-center justify-center lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 xl:1/2 flex items-center justify-center xl:pb-0 pb-10">
          <Logo />
        </div>
        <div className="login-container text-white w-full lg:w-1/2 flex flex-col justify-center xl:justify-center items-center lg:items-start xl:items-center lg:pr-10 xl:pr-20 space-y-6 text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl">¿Olvidaste tu Contraseña?</h1>
          <p className="text-lg sm:text-xl max-w-md text-center">
            Proporciona el correo electrónico de tu cuenta para restablecer su contraseña.
          </p>

          <div className="w-full max-w-md">
            <Formsrecupcont />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Olvidastecontra;

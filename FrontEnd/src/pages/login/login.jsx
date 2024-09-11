import React from "react";
import Logo from "../../components/logo";
import Formlogin from "../../components/forms/formslogin/formslogin";

const Login = () => {
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
        <div className="login-container text-white w-full lg:w-1/2 flex flex-col justify-center xl:items-center sm:items-center lg:items-center xl:pt-[8rem] lg:pr-10 xl:pr-20 gap-8 text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl">Iniciar Sesión</h1>

          <div className="w-full">
            <Formlogin />
          </div>

          <a href="/registro" className="text-lg sm:text-xl hover:underline">
            ¡Registra tu Empresa!
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;

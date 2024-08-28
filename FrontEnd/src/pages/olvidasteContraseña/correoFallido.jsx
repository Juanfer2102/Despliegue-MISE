import React from "react";
import Logo from "../../components/logo";

const Correofallido = () => {
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

        <div className="justify-center border-l h-max border-white py-96"></div>

        <div className="login-container text-white w-full h-full flex flex-col justify-center px-56 gap-28">
          <p className="font-bold text-3xl">¿Olvidaste tu contraseña?</p>
          <p className="text-2xl -mt-14">
            Proporciona el correo electrónico de tu cuenta para restablecer su contraseña.
          </p>
          <form action="" className="form flex flex-col">
            <p className="text 30 w-full text-red">Correo electrónico</p>
            <div className="flex gap-2 items-center">
              <div className="mail h-16 w-full rounded-lg flex items-center border border-solid border-red pl-2 shadow-xl gap-2"></div>
              <svg className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"
                  fill="#EE0004"
                ></path>
              </svg>
            </div>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>

            <p className="text 30 w-full">
              Correo incorrecto. Por favor, ingresa un correo asociado.
            </p>

            <div className="flex justify-center mt-10">
              <button className="bg-principalGreen px-6 py-2 text-xl h-14 rounded-lg w-full">
                Pedir enlace para restablecer contraseña
              </button>
            </div>
            <div className="flex items-center justify-center mt-8">
              <p className="text-xl text-center w-full">Cancelar</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Correofallido;

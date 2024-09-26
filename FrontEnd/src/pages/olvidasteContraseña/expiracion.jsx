import React from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Logo from "../../components/logo/logo";

const Expirado = () => {
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleClick = () => {
    navigate('/login'); // Redirigir a la página de login
  };

  return (
    <main>
      <div className="h-full w-full absolute z-10 bg-black bg-opacity-60"></div>
      <img
        src="../src/images/loginImg/bg.jpg"
        alt=""
        className="w-full h-full object-cover fixed z-0"
      />
      <div className="all relative z-20 flex h-screen items-center justify-center gap-0">
        <div className="w-full h-full">
          <div className="flex w-full h-full items-center justify-center">
            <Logo />
          </div>
        </div>

        <div className="login-container text-white w-full h-full flex flex-col justify-center pr-40 gap-3 text-center">
          <p className="font-bold text-3xl">LINK EXPIRADO O NO VALIDO</p>
          <p className="text-2xl">
            Tu link se ha expirado o no es valido porque no lo usaste, prueba a enviar otro.
          </p>

          <form action="" className="form flex flex-col">
            <p className="text 30 w-full"></p>
            <div>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </div>

            <div>
              <div className="flex justify-center mt-10">
                <button 
                  type="button" // Asegúrate de que el botón no envíe el formulario
                  onClick={handleClick} // Manejar el clic
                  className="bg-principalGreen px-6 py-2 text-xl h-14 rounded-lg w-full"
                >
                  Volver al login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Expirado;
/**
 * Expirado.jsx
 * 
 * Este componente muestra una página que informa al usuario que un enlace ha expirado y le da la opción de solicitar un nuevo enlace.
 * 
 * Componentes utilizados:
 * - Logo: Componente que muestra el logotipo de la aplicación.
 * 
 * Funcionalidad:
 * - Muestra un mensaje informando al usuario que el enlace ha expirado.
 * - Incluye un botón para reenviar un nuevo enlace y un enlace para cancelar la acción.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal que ocupa toda la pantalla.
 *   - **`div` con `bg-black bg-opacity-60`:** Fondo oscuro con opacidad, creando un efecto de superposición sobre la imagen de fondo.
 *   - **`img`:** Imagen de fondo que cubre toda la pantalla y permanece fija mientras se hace scroll.
 *   - **`div` con `all relative z-20 flex h-screen items-center justify-center gap-0`:** Contenedor central que alinea el logotipo y el mensaje.
 *     - **`div` con `w-full h-full`:** Contenedor para el logotipo que ocupa toda la altura y anchura de la pantalla.
 *       - **`div` con `flex w-full h-full items-center justify-center`:** Posiciona el logotipo en el centro.
 *         - **`Logo`:** Muestra el logotipo de la aplicación.
 *     - **`div` con `justify-center border-l h-max border-white py-96`:** Separador visual que añade un borde blanco entre el logotipo y el contenido.
 *     - **`div` con `login-container text-white w-full h-full flex flex-col justify-center px-56 gap-16`:** Contenedor para el texto del mensaje y el formulario de solicitud de nuevo enlace.
 *       - **`p` con `font-bold text-3xl`:** Mensaje principal indicando que el enlace ha expirado.
 *       - **`p` con `text-2xl`:** Mensaje que detalla la razón de la expiración del enlace.
 *       - **`form` con `flex flex-col`:** Formulario para que el usuario pueda reenviar un nuevo enlace.
 *         - **`div` con `flex justify-center mt-10`:** Contiene el botón para reenviar el enlace.
 *           - **`button` con `bg-principalGreen px-6 py-2 text-xl h-14 rounded-lg w-full`:** Botón para solicitar el nuevo enlace, con estilos definidos.
 *         - **`div` con `flex items-center justify-center mt-8`:** Contiene la opción de cancelar, que se muestra centrada.
 *           - **`p` con `text-xl text-center w-full`:** Texto de "Cancelar" para permitir al usuario regresar o cancelar la acción.
 * 
 * Estilos:
 * - **`bg-black bg-opacity-60`:** Fondo oscuro semi-transparente.
 * - **`w-full h-full`:** Elementos que ocupan toda la pantalla.
 * - **`fixed z-0`:** La imagen de fondo se mantiene fija.
 * - **`relative z-20`:** Contenedor que se posiciona sobre la imagen de fondo.
 * - **`border-l border-white`:** Añade una línea blanca que separa el logotipo del contenido de la página.
 * - **`bg-principalGreen`:** Estilo del botón con un color de fondo verde.
 * - **`px-56` y `gap-16`:** Añade márgenes laterales y espaciado entre los elementos.
 * 
 * Notas:
 * - El botón de "Reenviar otro link" debe tener una funcionalidad para solicitar el nuevo enlace.
 * - Asegúrate de que la ruta de la imagen de fondo (`src="../src/images/loginImg/bg.jpg"`) sea válida.
 */

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
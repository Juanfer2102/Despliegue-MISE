/**
 * Correofallido.jsx
 * 
 * Componente que muestra una página de error cuando el correo electrónico ingresado es incorrecto al intentar restablecer la contraseña.
 * 
 * Componentes utilizados:
 * - Logo: Componente que muestra el logotipo de la aplicación.
 * 
 * Funcionalidad:
 * - Muestra un mensaje indicando que el correo electrónico ingresado es incorrecto.
 * - Permite al usuario ingresar un correo electrónico para solicitar un enlace de restablecimiento de contraseña.
 * 
 * Estructura del componente:
 * - **`main`:** Contenedor principal para la página.
 *   - **`div` con fondo negro translúcido:** Cubre toda la pantalla para dar un efecto de superposición.
 *   - **`img` con fondo de imagen:** Imagen de fondo fija que ocupa toda la pantalla.
 *   - **`div` con `relative z-20`:** Contenedor principal con posición relativa y diseño flexible.
 *     - **`Logo`:** Componente que muestra el logotipo de la aplicación, centrado vertical y horizontalmente.
 *     - **`div` con borde izquierdo:** Espaciador con borde blanco.
 *     - **`div` con `login-container`:** Contenedor principal del formulario con texto y campos para el restablecimiento de contraseña.
 *       - **`p`:** Mensaje principal y secundario para el usuario.
 *       - **`form`:** Formulario para ingresar el correo electrónico.
 *         - **`p` con mensaje de error:** Mensaje que indica que el correo electrónico es incorrecto.
 *         - **`button`:** Botón para solicitar un enlace de restablecimiento de contraseña.
 *         - **`p` con texto "Cancelar":** Texto para cancelar la operación.
 * 
 * Estilos:
 * - **`bg-black bg-opacity-60`:** Fondo negro translúcido para dar un efecto de superposición.
 * - **`fixed`, `z-0`:** Imagen de fondo fija detrás del contenido.
 * - **`relative`, `z-20`:** Contenedor principal con posición relativa para superponer otros elementos.
 * - **`text-white`:** Color de texto blanco para el contenido.
 * - **`px-56`, `gap-28`:** Espaciado para el contenedor del formulario.
 * - **`bg-principalGreen`:** Fondo verde para el botón.
 * - **`text-xl`, `text-2xl`, `text-3xl`:** Tamaños de texto para los diferentes elementos.
 * 
 * Puntos Clave:
 * - La página está diseñada para manejar el error de correo electrónico incorrecto.
 * - Proporciona un formulario para ingresar un correo electrónico y solicitar un enlace de restablecimiento de contraseña.
 * - Incluye un botón para enviar la solicitud y un texto para cancelar la operación.
 * 
 * Notas:
 * - Asegúrate de que el estilo de la clase `bg-principalGreen` y los colores estén definidos en tu archivo de estilos globales.
 */

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

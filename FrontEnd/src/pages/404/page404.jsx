/**
 * Page404.jsx
 * 
 * Componente que muestra una página de error 404 cuando la ruta solicitada no es encontrada.
 * Proporciona una interfaz clara para los usuarios, indicando que la página solicitada no existe
 * y ofreciendo una opción para regresar a la página anterior.
 * 
 * Componentes utilizados:
 * - Logo: Componente que muestra el logo de la aplicación.
 * 
 * Funcionalidad:
 * - Muestra un mensaje de error "404" grande y un texto descriptivo que informa al usuario que la página no se encuentra.
 * - Incluye un botón que permite al usuario regresar a la página anterior en la historia del navegador.
 * 
 * Estilos:
 * - Usa Tailwind CSS para la disposición y el diseño. La vista se centra vertical y horizontalmente en la pantalla.
 * - El fondo de la pantalla y el texto están estilizados con clases de Tailwind para mantener la coherencia con el diseño de la aplicación.
 * - El botón tiene un estilo personalizado con un efecto de transición para el cambio de color en el estado de hover.
 */

import React from 'react';
import Logo from '../../components/logo';

const Page404 = () => {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-greyBg text-white">
            <div className=' flex justify-center w-[30rem] pb-5'>
                <Logo />
            </div>
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-4">Página no encontrada</p>
            <p className="text-lg mb-8">Lo sentimos, no podemos encontrar la página que estás buscando.</p>
            <button
                onClick={handleBack}
                className="px-6 py-2 bg-principalGreen text-white rounded hover:bg-white hover:text-principalGreen transition duration-300"
            >
                Volver
            </button>
        </div>
    );
};

export default Page404;


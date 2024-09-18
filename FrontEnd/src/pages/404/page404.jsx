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


import React from 'react';

const Formsreescribircont = () => {

    const enviar = () =>{
        window.location.href = "/olvidaste-contraseña";
    }

    return (
        <div action='' className="form flex flex-col">
            {/* Espacio para otros elementos o iconos, actualmente vacío */}
            <div className="flex gap-2 items-center"></div>

            {/* SVGs y elementos gráficos. Estos elementos parecen estar incompletos o no se están utilizando */}
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
            ></path>
            <path d="M3 7l9 6l9 -6"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>

            {/* Botón para reescribir el correo electrónico */}
            <div className="flex justify-center mt-10">
                <button
                    className="bg-principalGreen hover:bg-white hover:text-principalGreen px-6 py-2 text-xl h-14 rounded-lg w-full transition-300"
                    onClick={enviar}
                >
                    Reescribir correo electrónico
                </button>
            </div>
        </div>
    )
}

export default Formsreescribircont;

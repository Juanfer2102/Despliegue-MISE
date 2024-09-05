import React from 'react';

const InfoUser = ({ nombre, MISE, dataRol, id_usuario }) => {

    const userClassName = nombre.toLowerCase();

    const handleEditClick = () => {
        // Redirigir a la página de edición del usuario con el id_usuario
        window.location.href = `/editar-usuario`;
    };

    return (
        <div className={`${userClassName} bg-transparent border-transparent flex flex-col lg:flex-row`}>
            <div className="flex-1 p-3 text-white text-sm xl:text-left text-center whitespace-nowrap truncate xl:w-[8rem]">
                {nombre}
            </div>
            <div className="flex-1 p-3 text-sm text-center text-white whitespace-nowrap">
                {MISE}
            </div>
            <div className="flex-1 p-3 text-sm text-center text-white whitespace-nowrap border-b-0 xl:border-b-transparent">
                {dataRol}
            </div>
            <div className="flex-1 p-3 text-sm text-center whitespace-nowrap text-white border-b xl:border-b-transparent">
                <button
                    className="bg-principalGreen text-white rounded-lg px-4 py-2 text-xs sm:text-sm hover:bg-white hover:text-principalGreen"
                    onClick={handleEditClick}
                >
                    Editar Usuario
                </button>
            </div>
        </div>
    );

};

export default InfoUser;

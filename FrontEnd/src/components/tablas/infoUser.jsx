import React from 'react';

const InfoUser = ({ nombre, MISE, dataRol, id_usuario }) => {

    // Asignar una clase en minúsculas según el nombre del usuario
    const userClassName = nombre.toLowerCase();

    const handleEditClick = () => {
        // Redirigir a la página de edición del usuario con el id_usuario
        window.location.href = `/editar-usuario/${id_usuario}`;
    };

    return (
        <div className={`${userClassName} bg-transparent border-transparent flex flex-col lg:flex-row`}>
            {/* Mostrar el nombre del usuario */}
            <div className="flex-1 p-3 text-white text-sm xl:text-left text-center whitespace-nowrap truncate xl:w-[8rem]">
                {nombre}
            </div>
            {/* Mostrar el MISE (información adicional del usuario) */}
            <div className="flex-1 p-3 text-sm text-center text-white whitespace-nowrap">
                {MISE}
            </div>
            {/* Mostrar el rol del usuario */}
            <div className="flex-1 p-3 text-sm text-center text-white whitespace-nowrap border-b-0 xl:border-b-transparent">
                {dataRol}
            </div>
            {/* Botón para editar al usuario */}
            <div className="flex-1 p-3 text-sm text-center whitespace-nowrap text-white xl:border-b-0 min-lg:border-b-0 max-md:border-b xl:border-b-transparent">
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

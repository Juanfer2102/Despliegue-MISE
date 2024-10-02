import React from 'react';
import iconGB from "../../../images/icons/iconsEditUser/GoBack.png";

// Componente funcional para el botón de "Regresar"
const GoBack = ({ text }) => {
    return (
        <div className="flex flex-row items-center gap-3 py-2 text-lg md:text-xl text-textBg font-semibold">
            {/* Icono para el botón de regresar */}
            <img
                src={iconGB} // Ruta de la imagen del icono
                alt="" // Texto alternativo vacío ya que el icono es decorativo
                onClick={() => window.history.back()} // Navega a la página anterior en el historial
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" // Estilos para el tamaño del icono y cursor
            />
            {/* Texto del botón, proporcionado a través de props */}
            <p className="text-base md:text-lg">{text}</p>
        </div>
    );
}

export default GoBack;

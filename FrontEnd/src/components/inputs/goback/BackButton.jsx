import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconGB from "/images/icons/iconsEditUser/GoBack.png";

// Componente funcional para el botón de "Regresar"
const BackButton = ({ text, navigateUrl }) => {
    const navigate = useNavigate(); // Hook para navegar programáticamente

    const handleNavigate = () => {
        if (navigateUrl) {
            navigate(navigateUrl); // Navega a la URL proporcionada como prop
        } else {
            window.history.back(); // Si no se proporciona una URL, retrocede en el historial
        }
    };

    return (
        <div className="flex flex-row items-center gap-3 py-2 text-lg md:text-xl text-textBg font-semibold">
            {/* Icono para el botón de regresar */}
            <img
                src={iconGB} // Ruta de la imagen del icono
                alt="" // Texto alternativo vacío ya que el icono es decorativo
                onClick={handleNavigate} // Llama a la función para navegar
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" // Estilos para el tamaño del icono y cursor
            />
            {/* Texto del botón, proporcionado a través de props */}
            <h1 className="md:text-lg">{text}</h1>
        </div>
    );
};

export default BackButton;

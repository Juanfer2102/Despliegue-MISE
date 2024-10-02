// ElementSidebar.jsx
import React from "react";

/**
 * Componente para un elemento de la barra lateral.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.icon - Clase del icono a mostrar (debe ser una clase de FontAwesome u otro ícono).
 * @param {string} props.texto - Texto a mostrar al lado del icono.
 * @param {string} props.URL - URL a la que el enlace debe redirigir.
 * @param {boolean} props.sidebarExpanded - Booleano que determina si la barra lateral está expandida o contraída.
 * 
 * @returns {JSX.Element} - Componente que representa un elemento de la barra lateral.
 */
const ElementSidebar = ({ icon, texto, URL, sidebarExpanded }) => {
    return (
        <a
            className={`cajaelemento ${sidebarExpanded ? "flex" : ""} items-center py-1 p-6 gap-x-2 align-middle rounded-3xl cursor-pointer hover:text-white group hover:bg-principalGreen hover:scale-105 transition-all duration-100 ease-in-out`}
            href={URL}
        >
            <div className="h-[45px] flex justify-center items-center icon-container" data-url={URL}>
                <i className={`text-2xl text-textBg group-hover:text-white ${icon}`}></i>
            </div>
            <div
                className={`sidebar-element font-semibold text-textBg group-hover:text-white pt-1 px-2 overflow-hidden whitespace-nowrap transition-all ease-in-out ${sidebarExpanded ? "block" : "hidden"}`}
            >
                {texto}
            </div>
        </a>
    );
};

export default ElementSidebar;


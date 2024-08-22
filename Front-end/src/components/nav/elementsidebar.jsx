import React from "react";

const ElementSidebar = ({ icon, texto, URL }) => {
    return (
        <a
            className="cajaelemento flex-row justify-start items-center py-1 p-6 gap-x-2 align-middle rounded-3xl cursor-pointer hover:text-white group hover:bg-principalGreen hover:scale-105 transition-all duration-100 ease-in-out"
            id="cajaelemento"
            href={URL}
        >
            <div className="h-[45px] flex justify-center items-center icon-container" data-url={URL}>
                <i className={`text-2xl text-textBg group-hover:text-white ${icon}`}></i>
            </div>
            <div
                className="sidebar-element font-semibold text-colortextsecondary pt-1 px-2 group-hover:text-white text-base hidden"
            >
                {texto}
            </div>
        </a>
    );
};

export default ElementSidebar;

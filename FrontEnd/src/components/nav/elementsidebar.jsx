import React from "react";

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
                className={`sidebar-element font-semibold text-textBg group-hover:text-white pt-1 px-2 overflow-hidden whitespace-nowrap transition-all  ease-in-out ${sidebarExpanded ? "block" : "hidden"}`}
            >
                {texto}
            </div>
        </a>
    );
};

export default ElementSidebar;

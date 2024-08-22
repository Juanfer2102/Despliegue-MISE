import React from 'react';

const InfoUser = ({ nombre, MISE, dataRol }) => {

    const userClassName = nombre.toLowerCase();

    return (
        <div className={`${userClassName} bg-transparent border-transparent flex`}>
            <div className="flex-1 p-5 py-8 text-sm whitespace-nowrap">
                <p className="text-white w-[8rem]">
                    {nombre}
                </p>
            </div>
            <div className="flex-1 p-5 text-sm text-center text-white whitespace-nowrap">
                {MISE}
            </div>
            <div className="w-40 p-5 text-sm text-right whitespace-nowrap border-b-0 border-b-transparent">
                <span className="p-1.5 font-medium tracking-wider text-white rounded-lg">
                    {dataRol}
                </span>
            </div>
        </div>
    );
};

export default InfoUser;

import React from 'react';

const InfoUser = ({ nombre, MISE, dataRol }) => {

    const userClassName = nombre.toLowerCase();
    
    return (
        <tr className={`${userClassName} bg-transparent border-transparent`}>
            <td className="p-5 py-8 text-sm whitespace-nowrap">
                <p className="text-white w-[8rem]">
                    {nombre}
                </p>
            </td>
            <td
                className="p-5 text-sm w-40 text-center text-white whitespace-nowrap"
            >
                {MISE}
            </td>
            <td
                className="p-5 text-sm w-40 text-right whitespace-nowrap border-b-0 border-b-transparent"
            >
                <span
                    className="p-1.5 font-medium tracking-wider text-white rounded-lg"
                >
                    {dataRol}
                </span>
            </td>
        </tr>
    );
};

export default InfoUser;
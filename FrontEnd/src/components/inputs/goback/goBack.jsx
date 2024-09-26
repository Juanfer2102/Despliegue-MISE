import React from 'react'
import iconGB from "../../../images/icons/iconsEditUser/GoBack.png";

const GoBack = ({ text }) => {
    return (
        <div className="flex flex-row items-center gap-3 py-2 text-lg md:text-xl text-textBg font-semibold">
            <img
                src={iconGB}
                alt=""
                onClick={() => window.history.back()}
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
            />
            <p className="text-base md:text-lg">{text}</p>
        </div>
    );

}

export default GoBack;
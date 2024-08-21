import React from 'react'
import  iconGB  from "../../../images/icons/iconsEditUser/GoBack.png";

const GoBack = ({text}) => {
    return (
        <div className="flex flex-row gap-3 py-3 text-textBg items-center font-semibold">
            <img src={iconGB.src} alt="" onClick={() => window.history.back()}
                style={{ cursor: 'pointer' }} />
            <p class="">{text}</p>
        </div>
    )
}

export default GoBack;
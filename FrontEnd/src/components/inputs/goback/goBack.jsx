import React from 'react'
import  iconGB  from "../../../images/icons/iconsEditUser/GoBack.png";

const GoBack = ({text}) => {
    return (
        <div className="flex flex-row gap-3 py-1.5 text-xl text-textBg items-center font-semibold">
            <img src={iconGB} alt="" onClick={() => window.history.back()}
                style={{ cursor: 'pointer' }} />
            <p className="">{text}</p>
        </div>
    )
}

export default GoBack;
import React from 'react'

const Input2 = (inputPlaceholder, inputType, onChange, name, value) => {
    return (
        <input
            class="mail h-16 rounded-lg flex items-center caret-white border-solid border-white bg-transparent peer border border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 pl-2 shadow-xl gap-2 "
            placeholder={inputPlaceholder}
            type={inputType}
            name="mail"
            id="2"
        />
    )
}

export default Input2;
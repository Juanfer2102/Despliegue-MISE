import React from 'react'

const añadirModulo = () => {
    return (
        <div
            className={`
            flex justify-center items-center
            w-full aspect-square
            min-w-[120px] max-w-[240px]
            border border-principalGreen rounded-xl
            p-2
            hover:bg-principalGreen
            transition-all duration-100 ease-in
            cursor-pointer
          `}
        >
            <i className="fas fa-plus text-white text-3xl sm:text-4xl md:text-5xl"></i>
        </div>
    );
}

export default añadirModulo;
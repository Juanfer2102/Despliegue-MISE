import React, { useState } from 'react';

const Buscador = ({ onSearch, placeholder, filtro }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center py-5 w-full gap-4 sm:gap-10">
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <input
                    type="text"
                    placeholder={`${placeholder}`}
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border text-white w-full sm:w-[20rem] border-white rounded-lg bg-transparent p-3 focus:border-none"
                />
                <i className="fa-solid fa-magnifying-glass text-white"></i>
            </div>

            <div
                className="flex items-center gap-2 sm:gap-4 border-2 rounded-lg border-white bg-transparent text-white text-left p-2 pr-3 pl-3"
            >
                <p className="text-sm sm:text-base">{filtro}</p>
                <i className="fa-solid fa-filter text-sm sm:text-base"></i>
            </div>
        </div>
    );
};

export default Buscador;
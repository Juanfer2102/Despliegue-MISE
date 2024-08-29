import React, { useState } from 'react';

const Buscador = ({ onSearch, placeholder, filtro }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="flex items-center py-5 w-full gap-10">
            <div>
                <input
                    type="text"
                    placeholder={`${placeholder}`}
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border text-white w-[20rem] border-white rounded-lg bg-transparent p-3 focus:border-none"
                />
                <i className="fa-solid fa-magnifying-glass text-white pl-2"></i>
            </div>

            <div
                className="items-center flex gap-4 border-2 rounded-lg border-white bg-transparent text-white text-left p-2 pr-3 pl-3"
            >
                <p>{filtro}</p>
                <i className="fa-solid fa-filter"></i>
            </div>
        </div>
    );
};

export default Buscador;
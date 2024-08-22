import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
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
                    placeholder="Buscar usuario"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border text-white w-[20rem] border-white rounded-lg bg-transparent p-1"
                />
                <i className="fa-solid fa-magnifying-glass text-white pl-2"></i>
            </div>

            <div
                className="items-center flex gap-4 border-2 rounded-lg border-white bg-transparent text-white text-left p-2 pr-3 pl-3"
            >
                <p>Coordinador</p>
                <i className="fa-solid fa-filter"></i>
            </div>
        </div>
    );
};

export default Buscador;
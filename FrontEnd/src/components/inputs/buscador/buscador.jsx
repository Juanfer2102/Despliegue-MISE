import { useState } from 'react';

const Buscador = ({ onSearch, onRoleChange, placeholder, roles, contexto }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleId, setRoleId] = useState('');  // Por defecto no se filtra ningún rol

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        onSearch(value);  // Pasamos el término de búsqueda
    };

    const handleRoleChange = (e) => {
        const selectedRoleId = e.target.value;
        setRoleId(selectedRoleId);
        onRoleChange(selectedRoleId);  // Pasamos el ID del rol seleccionado
    };

    return (
        <div className="flex flex-col sm:flex-row items-center py-5 w-full gap-4 sm:gap-10">
            {/* Input de búsqueda */}
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border text-white w-full sm:w-[20rem] border-white rounded-lg bg-transparent p-3 focus:border-none"
                />
                <i className="fa-solid fa-magnifying-glass text-white"></i>
            </div>

            {/* Selector de rol o filtro personalizado */}
            {contexto === 'usuarios' && (
                <div className="flex items-center gap-2 sm:gap-4">
                    <select
                        value={roleId}
                        onChange={handleRoleChange}
                        className="border-2 rounded-lg border-white bg-transparent text-white p-2"
                    >
                        <option className='text-black' value="">Todos los Roles</option>
                        {roles.map(role => (
                            <option className='text-black' key={role.id_rol} value={role.id_rol}>
                                {role.descripcion}
                            </option>
                        ))}
                    </select>
                    <i className="fa-solid fa-filter text-white"></i>
                </div>
            )}

            {/* Puedes agregar más filtros según el contexto */}
            {contexto === 'empresas' && (
                <div className="flex items-center gap-2 sm:gap-4">
                </div>
            )}
        </div>
    );
};

export default Buscador;

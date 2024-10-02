// Buscador.jsx
import { useState } from 'react';

/**
 * Componente de búsqueda con filtros para diferentes contextos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onSearch - Función que se ejecuta al cambiar el término de búsqueda.
 * @param {Function} props.onRoleChange - Función que se ejecuta al cambiar el rol seleccionado.
 * @param {string} props.placeholder - Texto que se muestra como placeholder en el campo de búsqueda.
 * @param {Array} props.roles - Lista de roles para el selector, utilizada solo en el contexto 'usuarios'.
 * @param {string} props.contexto - Contexto en el que se usa el componente, determina la visibilidad de filtros adicionales.
 * 
 * @returns {JSX.Element} - Componente que permite buscar y filtrar datos según el contexto.
 */
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
                        {/* Filtra los roles para que solo se muestren los roles con id_rol entre 1 y 3 */}
                        {roles
                            .filter(role => role.id_rol >= 1 && role.id_rol <= 3)  // Filtrado de roles
                            .map(role => (
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
                    {/* Filtros adicionales para el contexto 'empresas' pueden ser agregados aquí */}
                </div>
            )}
        </div>
    );
};

export default Buscador;

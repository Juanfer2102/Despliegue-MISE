import React, { useEffect, useState } from 'react';
import InfoUser from './infoUser';
import Buscador from '../inputs/buscador/buscador';

const UserTable = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [roles, setRoles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/usuario/');
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.log('Error al obtener los usuarios:', error);
            }
        };

        const fetchRoles = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/rol/');
                const data = await response.json();
                setRoles(data);
            } catch (error) {
                console.log('Error al obtener los roles:', error);
            }
        };

        fetchUsuarios();
        fetchRoles();
    }, []);

    // Crear un mapa para acceder fácilmente al nombre del rol por id
    const roleMap = new Map(roles.map(role => [role.id_rol, role.descripcion]));

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
        <Buscador onSearch={handleSearch} />
        <table className="overflow-auto w-full justify-center rounded-xl">
            <thead className="bg-greyBlack border-textBg rounded-xl text-white  top-0 z-10">
                <tr>
                    <th className="w-[2rem] p-5 text-left">Nombre</th>
                    <th className="p-5 text-center">MISE encargado</th>
                    <th className="w-28 p-5 text-right">Rol</th>
                </tr>
            </thead>
            <tbody className="overflow-auto divide-y border border-textBg border-t-0 rounded">
                {usuarios.map((usuario) => (
                    <InfoUser
                        key={usuario.id_usuario}
                        nombre={`${usuario.nombres} ${usuario.apellidos}`}
                        MISE={usuario.programa}
                        dataRol={roleMap.get(usuario.id_rol)}  // Usa el mapa para obtener el nombre del rol
                    />
                ))}
            </tbody>
        </table>
        </>
    );
};

export default UserTable;
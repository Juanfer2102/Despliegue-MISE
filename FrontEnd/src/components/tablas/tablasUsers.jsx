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

    const roleMap = new Map(roles.map(role => [role.id_rol, role.descripcion]));

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
            <div className='flex flex-col lg:flex-row w-full p-4'>
                <Buscador onSearch={handleSearch} placeholder={"Buscar Usuarios..."} filtro={"Coordinador"} />
                <div className='w-full xl:w-full py-4 xl:py-5 flex items-center xl:justify-end justify-center'>
                    <a href="/nuevo-user">
                        <button className='bg-principalGreen rounded-xl p-2 text-white hover:bg-white hover:text-principalGreen'>
                            Nuevo Usuario
                        </button>
                    </a>
                </div>
            </div>
            <div className="overflow-x-auto lg:overflow-x-hidden overflow-y-auto max-h-[40rem] custom-scrollbar w-full rounded-xl bg-greyBg">
                <div className="bg-greyBlack border-textBg rounded-t-xl text-white flex flex-col lg:flex-row">
                    <div className="flex-1 p-3 xl:text-left text-center font-bold border-b border-textBg lg:border-b-0">Nombre</div>
                    <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">MISE encargado</div>
                    <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Rol</div>
                    <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Acciones</div> {/* Nueva columna para el botón */}
                </div>
                <div className="divide-y border border-textBg border-t-0 rounded-b-xl">
                    {usuarios
                        .filter(usuario => `${usuario.nombres} ${usuario.apellidos}`.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(usuario => (
                            <InfoUser
                                key={usuario.id_usuario}
                                nombre={`${usuario.nombres} ${usuario.apellidos}`}
                                MISE={usuario.programa}
                                dataRol={roleMap.get(usuario.id_rol)}
                                id_usuario={usuario.id_usuario}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );

};

export default UserTable;

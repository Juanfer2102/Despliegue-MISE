import { useEffect, useState } from 'react';
import InfoUser from './infoUser';
import Buscador from '../inputs/buscador/buscador';

const UserTable = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [roles, setRoles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRoleId, setSelectedRoleId] = useState('');  // Para almacenar el rol seleccionado por ID

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

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleRoleChange = (roleId) => {
        setSelectedRoleId(roleId);  // Actualiza el ID del rol seleccionado
    };

    const filteredUsuarios = usuarios.filter(usuario => {
        const nombreCompleto = `${usuario.nombres} ${usuario.apellidos}`.toLowerCase();

        // Filtra por término de búsqueda y por rol si es necesario
        return nombreCompleto.includes(searchTerm) &&
            (selectedRoleId === '' || usuario.id_rol === parseInt(selectedRoleId));  // Filtro por ID de rol
    });

    return (
        <>
            <div className='flex flex-col lg:flex-row xl:flex-row w-full py-4'>
                <Buscador
                    onSearch={handleSearch}
                    onRoleChange={handleRoleChange}  // Nuevo manejador de cambio de rol
                    placeholder={"Buscar Usuarios..."}
                    roles={roles}  // Pasamos los roles obtenidos
                    contexto="usuarios"  // Definimos el contexto como 'usuarios'
                />
                <div className='w-full xl:w-full py-4 xl:py-5 flex items-center xl:justify-end lg:justify-end max-md:justify-center'>
                    <a href="/nuevo-user">
                        <button className='bg-principalGreen rounded-xl p-2 text-white hover:bg-white hover:text-principalGreen'>
                            Nuevo Usuario
                        </button>
                    </a>
                </div>
            </div>
            <div className="overflow-x-auto lg:overflow-x-hidden w-full rounded-xl bg-greyBg">
                <div className="bg-greyBlack border-textBg rounded-t-xl text-white flex flex-col lg:flex-row">
                    <div className="flex-1 p-3 xl:text-left text-center font-bold border-b border-textBg lg:border-b-0">Nombre</div>
                    <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">MISE encargado</div>
                    <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Rol</div>
                    <div className="flex-1 p-3 text-center font-bold border-b border-textBg lg:border-b-0">Acciones</div>
                </div>
                <div className="divide-y border overflow-y-auto max-h-[25rem] custom-scrollbar border-textBg border-t-0 rounded-b-xl">
                    {filteredUsuarios.map(usuario => (
                        <InfoUser
                            key={usuario.id_usuario}
                            nombre={`${usuario.nombres} ${usuario.apellidos}`}
                            MISE={usuario.programa}
                            dataRol={roles.find(role => role.id_rol === usuario.id_rol)?.descripcion}  // Muestra la descripción del rol
                            id_usuario={usuario.id_usuario}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserTable;

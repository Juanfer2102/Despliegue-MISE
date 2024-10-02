import { useEffect, useState } from 'react';
import InfoUser from './infoUser';
import Buscador from '../inputs/buscador/buscador';

const UserTable = () => {
    const [usuarios, setUsuarios] = useState([]);  // Estado para almacenar los usuarios
    const [roles, setRoles] = useState([]);  // Estado para almacenar los roles
    const [searchTerm, setSearchTerm] = useState('');  // Estado para almacenar el término de búsqueda
    const [selectedRoleId, setSelectedRoleId] = useState('');  // Para almacenar el rol seleccionado por ID

    useEffect(() => {
        // Función asíncrona para obtener los usuarios desde la API
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/usuario/');
                const data = await response.json();
                setUsuarios(data);  // Actualiza el estado con los datos de los usuarios
            } catch (error) {
                console.log('Error al obtener los usuarios:', error);
            }
        };

        // Función asíncrona para obtener los roles desde la API
        const fetchRoles = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v2/rol/');
                const data = await response.json();
                setRoles(data);  // Actualiza el estado con los datos de los roles
            } catch (error) {
                console.log('Error al obtener los roles:', error);
            }
        };

        fetchUsuarios();  // Llama a la función para obtener los usuarios
        fetchRoles();  // Llama a la función para obtener los roles
    }, []);

    // Manejador para actualizar el término de búsqueda
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    // Manejador para actualizar el ID del rol seleccionado
    const handleRoleChange = (roleId) => {
        setSelectedRoleId(roleId);
    };

    // Estilos en JSX
    const styles = {
        customScrollbar: {
            scrollbarWidth: '13px',
            scrollbarColor: '#888 #262b32',
        },
        customScrollbarTrack: {
            background: '#262b32',
            borderRadius: '12px',
        },
        customScrollbarThumb: {
            background: '#888',
            borderRadius: '10px',
        },
        customScrollbarThumbHover: {
            background: '#555',
        }
    };

    // Filtra los usuarios según el término de búsqueda y el rol seleccionado
    const filteredUsuarios = usuarios.filter(usuario => {
        const nombreCompleto = `${usuario.nombres} ${usuario.apellidos}`.toLowerCase();

        // Filtro por término de búsqueda y por rol si es necesario
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
                <div className="divide-y border overflow-y-auto max-h-[15rem] custom-scrollbar border-textBg border-t-0 rounded-b-xl" style={styles.customScrollbar}>
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

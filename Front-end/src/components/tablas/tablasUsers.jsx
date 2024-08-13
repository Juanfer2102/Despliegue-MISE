// UserTable.js
import React, { useEffect, useState } from 'react';
import InfoUser from './infoUser';

const UserTable = () => {
    const [usuarios, setUsuarios] = useState([]);

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

        fetchUsuarios();
    }, []);

    return (
        <table className="overflow-auto w-full justify-center rounded-xl">
            <thead className="bg-greyBlack border-textBg rounded-xl text-white sticky top-0 z-10">
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
                        rol={usuario.id_rol}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;



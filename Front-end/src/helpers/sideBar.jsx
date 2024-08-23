import React, { useEffect, useState } from 'react';
import SideBar from '../components/nav/sideBar';

const SideBarWrapper = () => {
    const [userData, setUserData] = useState({ nombre: '', rol: '' });

    useEffect(() => {
        // Obtiene los datos del usuario almacenados en localStorage después del login
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            setUserData({
                nombre: storedUserData.nombres,
                rol: storedUserData.id_rol  // Cambia 'rol' por 'id_rol' si así lo guardaste
            });
        }
    }, []);

    return <SideBar nombre={userData.nombre} condicion={userData.rol} />;
};

export default SideBarWrapper;


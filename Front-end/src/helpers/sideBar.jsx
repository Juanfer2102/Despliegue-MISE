import React, { useEffect, useState } from 'react';
import SideBar from '../components/nav/sideBar';

const SideBarWrapper = () => {
    const [userData, setUserData] = useState({ nombre: '', rol: '' });

    useEffect(() => {
        // Aquí asumimos que los datos del usuario están guardados en localStorage después del login
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            setUserData({
                nombre: storedUserData.nombres,
                rol: storedUserData.rol
            });
        }
    }, []);

    return <SideBar nombre={userData.nombre} condicion={userData.rol} />;
};

export default SideBarWrapper;

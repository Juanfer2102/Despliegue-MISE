import React, { useState, useEffect } from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import iconUser from "../../images/icons/iconsEditUser/User.png";
import FormsEditaruser from "../../components/forms/formsEditaruser/formsEditaruser.jsx";
import GoBack from '../../components/inputs/goback/GoBack.jsx';
import { Infouser } from '../../helpers/edituser.js';
import { useParams } from 'react-router-dom';

const EditarUsuario = ({ nombres, correo, rol }) => {

  const { id_usuario } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v2/usuario/${id_usuario}/`); // Cambié a usar id_usuario
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setError(error.message);
      } finally {
        setLoading(false); // Cambiar estado de carga
      }
    };

    fetchUser();
  }, [id_usuario]);

  // Manejo de cambios y validaciones aquí (omitido para brevedad)

  if (loading) {
    return <div>Cargando usuario...</div>; // Mensaje mientras se carga
  }

  if (error) {
    return <div>Error al cargar usuario: {error}</div>; // Mostrar error si hay uno
  }

  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 gap-2 py-2 sm:px-8 h-full w-full">
            <GoBack text={`Usuarios Registrados / ${user.nombres} ${user.apellidos}`} />
            <div className="bg-greyBlack flex flex-col gap-2 lg:gap-8 p-4 lg:p-5 w-full rounded-md">
              <div className="flex flex-col w-full px-6 py-2">
                <p className="text-white text-3xl">Información Personal</p>
                <FormsEditaruser />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );

};

export default EditarUsuario;

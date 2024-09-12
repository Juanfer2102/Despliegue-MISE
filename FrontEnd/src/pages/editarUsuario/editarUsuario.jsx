import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import iconUser from "../../images/icons/iconsEditUser/User.png";
import FormsEditaruser from "../../components/forms/formsEditaruser/formsEditaruser.jsx";
import GoBack from '../../components/inputs/goback/GoBack.jsx';
import { Infouser } from '../../helpers/edituser.js';

const EditarUsuario = ({ nombres, correo, rol }) => {
  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 gap-2 py-2 sm:px-8 h-full w-full">
            <GoBack text={`Usuarios Registrados / ${Infouser[0].nombres} ${Infouser[0].apellidos}`} />
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

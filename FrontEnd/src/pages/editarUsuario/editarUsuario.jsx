import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import iconUser from "../../images/icons/iconsEditUser/User.png";
import FormsEditaruser from "../../components/forms/formsEditaruser/formsEditaruser.jsx";
import GoBack from "../../components/inputs/goback/goBack.jsx";
import { Infouser } from '../../helpers/edituser.js';

const EditarUsuario = () => {
  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pt-4 pr-5 justify-end h-20 w-full" />
          <div className="bg-greyBg py-4 flex flex-col px-8 h-full w-full">
            <GoBack text={`Usuarios Registrados ${Infouser[0].nombres} ${Infouser[0].apellidos}`} />
            <div className="bg-greyBlack flex flex-col px-10 w-full rounded-md">
              <div className="flex flex-row py-2">
                <img src={iconUser} className="p-12" alt="" />
                <div className="flex flex-col justify-center gap-5 p-12 text-white font-semibold">
                  <p className="text-4xl">Brian Marin Salchimonster</p>
                  <p>briandmh365@gmail.com</p>
                  <p className="font-medium">Administrador</p>
                </div>
              </div>
              <div className="flex flex-col w-full px-14">
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

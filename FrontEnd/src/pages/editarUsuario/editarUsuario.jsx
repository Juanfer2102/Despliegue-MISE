import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import iconUser from "../../images/icons/iconsEditUser/User.png";
import FormsEditaruser from "../../components/forms/formsEditaruser/formsEditaruser.jsx";
import GoBack from '../../components/inputs/goback/GoBack.jsx';
import { Infouser } from '../../helpers/edituser.js';

const EditarUsuario = ({ nombres, correo, rol }) => {
  return (
    <LayoutDashboard title="Editar Usuario">
      <main className="flex flex-col lg:flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pt-4 pr-5 justify-end h-20 w-full" />
          <div className="bg-greyBg py-4 flex flex-col px-4 lg:px-8 h-full w-full">
            <GoBack text={`Usuarios Registrados / ${Infouser[0].nombres} ${Infouser[0].apellidos}`} />
            <div className="bg-greyBlack flex flex-col px-4 lg:px-10 w-full rounded-md">
              <div className="flex flex-col lg:flex-row py-4 max-md:justify-center max-md:items-center">
                <div className='max-md:w-[10rem] max-md:h-[10rem] text-center'>
                  <img src={iconUser} className="w-full xl:w-auto p-4 xl:p-12" alt="" />
                </div>
              </div>
              <div className="flex flex-col w-full px-4 lg:px-14">
                <p className="text-white text-2xl lg:text-3xl max-md:pb-4">Información Personal</p>
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

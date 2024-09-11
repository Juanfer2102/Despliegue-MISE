import React from 'react';
import FormsNuevouser from "../../components/forms/formsNuevouser/formsNuevouser.jsx";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import GoBack from '../../components/inputs/goback/GoBack.jsx';


const NuevoUser = () => {
  return (
    <LayoutDashboard>
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pt-4 pr-5 justify-end h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-6 h-full w-full">
            <GoBack text={"Nuevo Usuario"} />
            <div className="bg-greyBlack flex flex-col px-6 py-5 w-full rounded-md">
              <div className="flex flex-col w-full px-6">
                <p className="text-white text-3xl">
                  Información para Creación de Usuario
                </p>
                <FormsNuevouser />  
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default NuevoUser;

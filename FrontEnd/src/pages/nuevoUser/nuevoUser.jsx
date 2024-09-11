import React from 'react';
import FormsNuevouser from "../../components/forms/formsNuevouser/formsNuevouser.jsx";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import GoBack from '../../components/inputs/goback/GoBack.jsx';


const NuevoUser = () => {
  return (
    <LayoutDashboard>
      <main className="flex flex-col lg:flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col gap-5 w-full xl:h-full px-4 xl:px-12 pt-4 xl:pt-6">
            <GoBack text={"Nuevo Usuario"} />
            <div className="bg-greyBlack flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 w-full rounded-md">
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

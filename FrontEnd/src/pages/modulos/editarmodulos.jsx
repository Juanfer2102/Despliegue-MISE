import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Editarmodulos from "../../components/modales/modaleditar.jsx";

const ModulosPage = () => {
  const { id } = useParams();  // Obtén el ID del módulo desde los parámetros de la URL

  console.log("ID del módulo:", id);  // Verifica que el ID se está obteniendo correctamente

  return (
    <LayoutDashboard title="Modulos">
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-8 py-5 h-full w-full">
            <div className="left flex flex-row gap-5 p-1">
              <div className="h-full flex flex-col gap-[5rem] justify-center">
                <Editarmodulos id={id} /> {/* Pasa el ID al componente */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default ModulosPage;

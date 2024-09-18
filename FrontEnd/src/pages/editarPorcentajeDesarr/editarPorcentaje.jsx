import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Formseditporc } from "../../components/forms/formseditporc/formseditporc.jsx";
import GoBack from "../../components/inputs/goback/GoBack.jsx";

const EditarPorcentaje = () => {
  return (
    <LayoutDashboard title="Editar Porcentaje">
      <main className="bg-greyBg w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col gap-1 w-full xl:h-full px-4 xl:px-12 pt-4 xl:pt-6">
            <GoBack text={"Porcentajes de Desarrollo"} />
            <Formseditporc client:load />
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default EditarPorcentaje;

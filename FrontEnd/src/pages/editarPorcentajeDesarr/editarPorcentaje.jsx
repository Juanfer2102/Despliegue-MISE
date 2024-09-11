import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Formseditporc } from "../../components/forms/formseditporc/formseditporc.jsx";
import GoBack from "../../components/inputs/goback/GoBack.jsx";

const EditarPorcentaje = () => {
  return (
    <LayoutDashboard title="Editar Porcentaje">
      <main className="flex flex-row w-full bg-greyBlack h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pt-4 pr-5 justify-end h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-8 h-full py-5 gap-5 w-full">
            <GoBack text={"Porcentajes de Desarrollo"} />
            <Formseditporc client:load />
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default EditarPorcentaje;

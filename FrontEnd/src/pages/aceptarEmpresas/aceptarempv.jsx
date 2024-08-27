import LayoutDashboard from '../../layouts/LayoutDashboard.jsx';
import TableComponent from '../../components/tablas/TablasAceptarEmpresa';
import GoBack from '../../components/inputs/goback/GoBack';

const AceptarEmpresas = () => {
  return (
    <LayoutDashboard>
      <main className="bg-greyBg h-screen w-full">
        <div className="flex flex-row">
          <div className="w-full h-full">
            <div className="bg-greyBlack h-20"></div>
            <div className="w-full px-8 py-5 h-full text-white gap-12">
              <GoBack text="Aceptar Empresas" />

              <div className="rounded-xl px-10 pt-5 pb-10 h-full flex gap-2 flex-col overflow-y-auto custom-scrollba">
                <div className="overflow-y-auto custom-scrollbar rounded-xl">
                  <div className="max-h-[30rem] overflow-y-auto custom-scrollbar">
                    <TableComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default AceptarEmpresas;


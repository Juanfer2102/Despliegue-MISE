import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import { Elementosempresas } from "../../helpers/elementosempresas";
import TarjetasEmpresasreg from "../../components/tarjetasdashboard/tarjetasEmpresasreg";
import { TablasEmpresas } from "../../components/tablas/tablasEmpresas";
import { motion } from "framer-motion"; // Importamos framer-motion

export const EmpresasRegistradas = () => {

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <LayoutDashboard title="Dashboard">
      <main className="bg-greyBg w-full h-screen overflow-x-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full h-full">
            <div className="bg-greyBlack h-16 md:h-20"></div>
            <div className="w-full px-4 py-5 md:px-8 ">
              <div className="text-white gap-6 w-full">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <p className="text-xl md:text-2xl xl:text-left min-lg:text-left max-md:text-center pl-4">Empresas registradas</p>
                  </div>

                  {/* Tarjetas de empresas con animación */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {Elementosempresas.map((Elementosempresas, index) => (
                      <motion.div key={Elementosempresas.numeroEmpresas} variants={itemVariants}>
                        <TarjetasEmpresasreg
                          empresaicon={Elementosempresas.empresaicon}
                          tipoTarjeta={Elementosempresas.tipoTarjeta}
                          numeroEmpresas={Elementosempresas.numeroEmpresas}
                          URL={Elementosempresas.URL}
                        />
                      </motion.div>
                    ))}
                  </motion.div>


                  {/* Tabla de empresas */}
                  <motion.div
                    className="rounded-xl px-5 md:px-10 pt-5 pb-10 h-full flex flex-col gap-2 overflow-y-auto custom-scrollbar"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TablasEmpresas />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );

};

export default EmpresasRegistradas;

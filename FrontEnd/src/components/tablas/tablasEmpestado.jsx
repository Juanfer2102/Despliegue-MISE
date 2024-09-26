import React, { useEffect, useState } from "react";

const TablasEmpestado = () => {
  const [empresas, setEmpresas] = useState([]);

  // Estilos en JSX
  const styles = {
    customScrollbar: {
      scrollbarWidth: '13px',
      scrollbarColor: '#888 #262b32',
    },
    customScrollbarTrack: {
      background: '#262b32',
      borderRadius: '12px',
    },
    customScrollbarThumb: {
      background: '#888',
      borderRadius: '10px',
    },
    customScrollbarThumbHover: {
      background: '#555',
    }
  };

  useEffect(() => {
    // Llamada a la API para obtener los datos de las empresas
    fetch('http://localhost:8000/api/v2/estado/empresas/')  // Cambia la URL según tu configuración
      .then((response) => response.json())
      .then((data) => {
        const empresasEstado2 = data.empresas_estado_2_diagnostico_1 || [];
        const empresasEstado3 = data.empresas_estado_3 || [];
        
        // Combina ambos arrays
        const todasEmpresas = [...empresasEstado2, ...empresasEstado3];
        setEmpresas(todasEmpresas); // Ahora tiene ambas listas
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="overflow-x-auto rounded-xl">
      <div className="min-w-full rounded-xl">
        <div className="bg-greyBlack border-textBg rounded-xl text-white sticky top-0 flex">
          <div className="flex-1 p-3 md:p-5 text-left font-bold">Nombre</div>
          <div className="flex-1 p-3 md:p-5 text-left font-bold hidden sm:block">Sector</div>
          <div className="flex-1 p-3 md:p-5 text-center font-bold">Estado</div>
        </div>
        <div className="divide-y border overflow-y-auto max-h-[40rem] custom-scrollbar border-textBg border-t-0 rounded" style={styles.customScrollbar}>
          {empresas.length > 0 ? (
            empresas.map((empresa, index) => (
              <div key={index} className="flex bg-transparent border-transparent">
                <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm text-white">
                  {empresa.nombre_empresa}
                </div>
                <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm text-white hidden sm:block">
                  {empresa.sector}
                </div>
                <div className="flex-1 p-3 md:p-5 text-xs sm:text-sm flex justify-center items-center">
                  <div className={`inline-block py-1 px-3 md:px-4 tracking-wide transition-colors ${empresa.estado === 3 ? 'bg-secondaryGreen' : 'bg-amarillodark'} transform border-solid rounded-lg text-white font-semibold`}>
                    {empresa.estado === 3 ? 'Culminado' : 'En Proceso'}  {/* Cambiado a 'Culminado' */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white p-5">No hay empresas para mostrar.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablasEmpestado;

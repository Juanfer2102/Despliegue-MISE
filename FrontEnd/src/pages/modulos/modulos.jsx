import React, { useState, useEffect } from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Modal from "../../components/modales/modal";
import Aadirmodulo from "../../components/modales/añadirmodulo";
import Modalopciones from "../../components/modales/modalopciones";

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

const Modulos = () => {
  const [modulos, setModulos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v2/ver-modulos')
      .then(response => response.json())
      .then(data => setModulos(data))
      .catch(error => console.error('Error fetching modulos:', error));
  }, []);

  return (
    <LayoutDashboard title="Modulos">
      <main className="flex flex-row w-full bg-greyBlack overflow-x-hidden h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack flex content-center pr-5 pt-3.5 justify-end h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-8 py-5 h-full w-full">
            <div className="pb-1">
              <p className="text-2xl text-white">Modulos</p>
            </div>
            <div className="left flex flex-row gap-5 p-1">
              <div
                className="container bg-greyBlack rounded-xl max-h-[30rem] overflow-y-auto"
                style={styles.customScrollbar}
              >
                <div className="grid grid-cols-3 gap-8 p-4 items-center w-full">
                  {modulos.map((modulo) => (
                    <a href={`/editar-modulos/${modulo.id_modulo}`} key={modulo.id_modulo}>
                      <Modal
                        texto={modulo.nombre}
                        colorborde="border-principalGreen"
                        colorhover="hover:bg-principalGreen"
                      />
                    </a>
                  ))}
                  <a href="/nuevo-modulo">
                    <Aadirmodulo />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-10 justify-center">
                <Modalopciones texto="Sueños" URL="/sueños" />
                <Modalopciones texto="Preguntas" URL="/preguntas" />
                <Modalopciones texto="Talleres" URL="/talleres" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Modulos;

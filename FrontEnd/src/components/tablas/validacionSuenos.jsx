import React, { useState, useEffect } from "react";
import ModalConcretarSueno from "../modales/modalconcretarsueño";

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

// Arreglo de estilos para la validación de sueños con colores de borde diferentes
const validacionDeSueños = [
  {
    bordeColor: "border-azulclaro",
  },
  {
    bordeColor: "border-fucsia",
  },
  {
    bordeColor: "border-amarillo",
  },
];

/**
 * Componente `ValidacionDeSueños`
 * 
 * Este componente muestra una lista de sueños con una validación visual basada en colores.
 * Utiliza una estructura de cuadrícula para mostrar los sueños en una caja de desplazamiento.
 * 
 * Props:
 * - `diagnosticos` (array): Un arreglo de objetos que contienen una lista de sueños. Cada sueño es un objeto con una propiedad `sueño` que representa el texto del sueño.
 * 
 * @param {Object} props - Props del componente.
 * @param {Array} props.diagnosticos - Lista de objetos de diagnóstico que contienen los sueños a mostrar.
 * @returns {JSX.Element} Elemento JSX para la visualización de sueños.
 */
const ValidacionDeSueños = ({ diagnosticos }) => {
  const [suenoSeleccionado, setSuenoSeleccionado] = useState(null);
  const [suenos, setSuenos] = useState([]);

  // Obtener la lista de sueños cuando se monta el componente
  useEffect(() => {
    setSuenos(diagnosticos.flatMap(diagnostico => diagnostico.suenos));
  }, [diagnosticos]);

  // Función para actualizar los sueños después de concretar uno
  const recargarSuenos = () => {
    // Aquí puedes recargar los datos si es necesario, en este caso simplemente filtraremos los sueños concretados.
    setSuenos(suenos.filter(sueno => sueno.estado !== 1)); // Asumiendo que "1" significa que ya está concretado.
  };

  return (
    <div className="p-4 bg-greyBlack xl:w-[45rem] lg:w-[35rem] text-white rounded-lg" style={styles.customScrollbar}>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">🌥️</span>
        <h2 className="text-lg font-semibold">Validación de sueños</h2>
      </div>

      {suenos.length === 0 ? (
        // Si no hay sueños, mostrar el mensaje
        <p className="text-center flex align-middle text-xl items-center justify-center text-white">Todos los sueños ya se encuentran validados</p>
      ) : (
        // Si hay sueños, mostrarlos en la cuadrícula
        <div className="grid gap-5 xl:max-h-[30rem] lg:max-h-[30rem] overflow-y-auto" style={{ gridTemplateColumns: 'repeat(2, 1fr)', ...styles.customScrollbar }}>
          {suenos.map((sueno, index) => (
            <div
              key={index}
              className={`flex justify-center items-center bg-transparent border-l-4 ${validacionDeSueños[index % validacionDeSueños.length]?.bordeColor} rounded-md p-4 text-center text-white h-40 sm:h-48 md:h-56 cursor-pointer`}
              onClick={() => setSuenoSeleccionado(sueno)} // Abrir modal al hacer clic
            >
              <p>{sueno.sueño}</p>
            </div>
          ))}
        </div>
      )}

      {suenoSeleccionado && (
        <ModalConcretarSueno
          sueno={suenoSeleccionado} // Pasar el sueño seleccionado
          onClose={() => setSuenoSeleccionado(null)} // Cerrar modal
          onSuenoConcretado={recargarSuenos} // Recargar los sueños cuando se concrete uno
        />
      )}
    </div>
  );
};

export default ValidacionDeSueños;

import { useState } from "react";

const DesempenoForm = ({ criterios, titulo, onFormChange }) => {
  const [values, setValues] = useState({});

  const handleInputChange = (index, value) => {
    // Validar que el valor esté entre 0 y 100
    if (value === "" || (/^\d{0,3}(\.\d{0,2})?$/.test(value) && value <= 100)) {
      setValues((prevValues) => ({
        ...prevValues,
        [questionKey]: criterios[index].descripcion,
        [valoracionKey]: value,
      }));
    }
    // Crear una clave dinámica para la pregunta
    const questionKey = `pregunta_${index + 1}`;
    const valoracionKey = `valoracion_${index + 1}`;

    // Actualizar el estado local del formulario


    // Enviar el cambio al componente padre
    onFormChange(titulo, {
      ...values,
      [questionKey]: criterios[index].descripcion,
      [valoracionKey]: value,
    });
  };

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

  return (
    <div className="flex flex-col w-full h-full p-4 md:p-6 shadow-md rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
        {titulo} <span className="text-white">*</span>
      </h2>
      <div className="flex flex-col w-full text-white">
        <div className="hidden md:flex border-b">
          <div className="py-2 flex-grow text-left font-bold">Pregunta</div>
          <div className="py-2 px-4 w-40 text-center font-bold">Valoración</div>
        </div>
        {criterios.map((criterio, index) => (
          <div key={index} className="flex flex-col md:flex-row border-b">
            <div className="py-2 md:py-4 md:pt-6 flex-grow">
              <div className="font-bold md:hidden mb-2">Pregunta:</div>
              {criterio.descripcion}
            </div>
            <div className="py-2 md:py-4 md:px-4 md:w-40">
              <div className="font-bold md:hidden mb-2">Valoración:</div>
              <input
                type="number"
                name={`valoracion_${index + 1}`}
                value={values[`valoracion_${index + 1}`] || ""}
                step="0.01"
                min="0"
                max="100"
                className="border border-white bg-transparent text-white rounded-md p-2 w-full"
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesempenoForm;

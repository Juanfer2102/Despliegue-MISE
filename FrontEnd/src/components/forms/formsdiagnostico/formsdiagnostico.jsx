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

  return (
    <div className="flex flex-col w-full h-full p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {titulo} <span className="text-white">*</span>
      </h2>
      <table className="min-w-full text-white flex-1">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left border-b">Pregunta</th>
            <th className="py-2 px-4 border-b">Valoración</th>
          </tr>
        </thead>
        <tbody>
          {criterios.map((criterio, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 w-[75rem]">{criterio.descripcion}</td>
              <td className="py-2 px-4 w-[10rem]">
                <input
                  type="number"
                  name={`valoracion_${index + 1}`}
                  value={values[`valoracion_${index + 1}`] || ""}
                  step="0.01" // Permite números decimales
                  min="0"
                  max="100"
                  className="border border-white bg-transparent text-white rounded-md p-2 w-full"
                  onChange={(e) =>
                    handleInputChange(index, e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesempenoForm;

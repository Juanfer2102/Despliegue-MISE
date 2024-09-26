import { useState } from "react";

const DesempenoForm = ({ criterios, titulo, nit, onFormSubmit }) => {
  const [values, setValues] = useState({});

  const handleInputChange = (index, value) => {
    if (value === "" || (/^\d{0,3}(\.\d{0,2})?$/.test(value) && value <= 100)) {
      const questionKey = `pregunta_${index + 1}`;
      const valoracionKey = `valoracion_${index + 1}`;
      const newValues = {
        ...values,
        [questionKey]: criterios[index].id_pregunta,
        [valoracionKey]: value,
      };
      setValues(newValues);
      onFormSubmit(titulo, newValues); // Asegúrate de enviar todos los valores
    }
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
                  step="0.01"
                  min="0"
                  max="100"
                  className="border border-gray-300 p-1 rounded-md text-black"
                  onChange={(e) => handleInputChange(index, e.target.value)}
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

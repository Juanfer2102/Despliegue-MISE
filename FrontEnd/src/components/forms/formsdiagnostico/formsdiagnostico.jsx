import { useState } from "react";

const DesempenoForm = ({ criterios, titulo, nit, onFormSubmit }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (index, value) => {
    // Validar solo números, sin caracteres no deseados y rango válido
    const questionKey = `pregunta_${index + 1}`;
    const valoracionKey = `valoracion_${index + 1}`;

    // Expresión regular para permitir solo números y un decimal opcional
    const isValidNumber = /^\d*\.?\d*$/.test(value);
    const isInRange = value === "" || (parseFloat(value) >= 0 && parseFloat(value) <= 100);

    if (isValidNumber && isInRange) {
      const newValues = {
        ...values,
        [questionKey]: criterios[index].id_pregunta,
        [valoracionKey]: value,
      };
      setValues(newValues);
      setErrors((prevErrors) => ({ ...prevErrors, [valoracionKey]: '' })); // Limpiar el error
      onFormSubmit(titulo, newValues);
    } else {
      // Establecer el mensaje de error correspondiente
      setErrors((prevErrors) => ({
        ...prevErrors,
        [valoracionKey]: value === "" ? 'El campo no puede estar vacío.' : 'Por favor, ingrese un número válido entre 0 y 100.'
      }));
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
            <th className="py-2 px-4 border-b">Valoración Inicial</th>
            <th className="py-2 px-4 border-b">Valoración Final</th>
          </tr>
        </thead>
        <tbody>
          {criterios.map((criterio, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 w-[75rem]">{criterio.descripcion}</td>
              <td className="flex justify-center py-6 w-[10rem]">{criterio.calificacion}</td>
              <td className="px-8 w-[10rem]">
                <input
                  type="number"
                  name={`valoracion_${index + 1}`}
                  value={values[`valoracion_${index + 1}`] || ""}
                  step="0.01"
                  min="0"
                  max="100"
                  className={`border ${errors[`valoracion_${index + 1}`] ? 'border-red-500' : 'border-white'} p-1 rounded-md text-white bg-transparent`}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {errors[`valoracion_${index + 1}`] && (
                  <div className="text-red text-sm mt-1">{errors[`valoracion_${index + 1}`]}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesempenoForm;

import { useState } from "react";

/**
 * Componente `DesempenoForm` para la evaluación de criterios mediante un formulario,
 * donde los usuarios pueden ingresar valoraciones para cada criterio.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.criterios - Lista de criterios a evaluar, donde cada criterio tiene un id_pregunta y una descripción.
 * @param {string} props.titulo - El título del formulario.
 * @param {string} props.nit - Número de identificación tributaria, no utilizado en el código pero proporcionado como prop.
 * @param {Function} props.onFormSubmit - Función de callback que se llama al enviar el formulario, pasando el título y los valores del formulario.
 * 
 * @returns {JSX.Element} El componente `DesempenoForm`.
 */
const DesempenoForm = ({ criterios, titulo, nit, onFormSubmit }) => {
  // Estado para almacenar los valores del formulario
  const [values, setValues] = useState({});

  /**
   * Maneja el cambio en los campos de entrada del formulario.
   * 
   * @param {number} index - Índice del criterio en la lista.
   * @param {string} value - El valor ingresado en el campo.
   */
  const handleInputChange = (index, value) => {
    // Validación del valor ingresado: debe ser un número con hasta 2 decimales y <= 100
    if (value === "" || (/^\d{0,3}(\.\d{0,2})?$/.test(value) && value <= 100)) {
      const questionKey = `pregunta_${index + 1}`;
      const valoracionKey = `valoracion_${index + 1}`;
      const newValues = {
        ...values,
        [questionKey]: criterios[index].id_pregunta,
        [valoracionKey]: value,
      };
      setValues(newValues);
      onFormSubmit(titulo, newValues); // Envía los valores del formulario al callback
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

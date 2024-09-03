import { useState } from 'react';

const DesempenoForm = ({ criterios, titulo, onFormChange }) => {
  const [valores, setValores] = useState({});

  const handleSelectChange = (pregunta, event) => {
    const selectedValue = event.target.value;
    setValores(prevState => ({
      ...prevState,
      [pregunta]: selectedValue
    }));
    onFormChange(titulo, { ...valores, [pregunta]: selectedValue });
  };

  return (
    <div className="flex flex-col w-full h-full p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {titulo} <span className="text-red">*</span>
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
              <td className="py-2 px-4">{criterio.descripcion}</td>
              <td className="py-2 px-4">
                <select
                  className="border border-greyBg text-black rounded-md p-2 w-full"
                  onChange={(event) => handleSelectChange(criterio.descripcion, event)}
                >
                  <option value="">Seleccionar</option>
                  <option value="1">1 - Bajo</option>
                  <option value="2">2 - Regular</option>
                  <option value="3">3 - Bueno</option>
                  <option value="4">4 - Muy Bueno</option>
                  <option value="5">5 - Excelente</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesempenoForm;

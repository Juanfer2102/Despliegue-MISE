import { useState, useEffect } from 'react';

const DesempenoForm = ({ moduloId, titulo, onFormChange }) => {
  const [preguntas, setPreguntas] = useState([]);
  const [valores, setValores] = useState({});

  // Función para obtener preguntas del módulo específico
  const fetchPreguntas = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v2/preguntas/?id_modulo=${moduloId}`);
      const data = await response.json();
      setPreguntas(data);
    } catch (error) {
      console.error("Error al obtener las preguntas:", error);
    }
  };

  // Ejecutar la petición cuando el componente se monta o cuando moduloId cambia
  useEffect(() => {
    if (moduloId) {
      fetchPreguntas();
    }
  }, [moduloId]);

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
          {preguntas.length > 0 ? (
            preguntas.map((pregunta, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{pregunta.descripcion}</td>
                <td className="py-2 px-4">
                  <select
                    className="border border-greyBg text-black rounded-md p-2 w-full"
                    onChange={(event) => handleSelectChange(pregunta.descripcion, event)}
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
            ))
          ) : (
            <tr>
              <td colSpan="2" className="py-2 px-4 text-center">No hay preguntas disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DesempenoForm;

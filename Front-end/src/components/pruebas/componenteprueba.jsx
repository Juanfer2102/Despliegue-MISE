import React, { useEffect, useState } from "react";
import { getAllCompanies } from "../../api/pruebas.api";

export function Componenteprueba() {
  const [roles, setRol] = useState([]);

  useEffect(() => {
    async function loadCompany() {
      const res = await getAllCompanies();
      setRol(res.data);
    }
    loadCompany();
  }, []); // El segundo argumento vacío asegura que se ejecute solo una vez

  return (
    <div>
      {roles.map((rol) => (
        <div key={rol.id_rol}>
          <h1>{rol.id_rol}</h1>
          <p>{rol.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

import React, { useEffect } from 'react';
import { getAllCompanies } from "../../../api/pruebas.api";

export const Componenteprueba = () => {
  useEffect(() => {
    async function loadCompany() {
      const res = await getAllCompanies();
      console.log(res.data);
    }
    loadCompany();
  }, []); // El segundo argumento vacío asegura que se ejecute solo una vez

  return (
    <h1>Test Company</h1>
  );
};


// archivo Componenteprueba.js

import React from "react";
import { useEffect, useState } from "react";
import getType from "../../api/pruebas.api"; // Asegúrate de ajustar la ruta correcta
import { visualizer } from "./visualizer";

export const GetTypeNeeded = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function loadCompanies() {
      try {
        const res = await getType("rol").getAllInfo();
        setResult(res.data);
        return res.data;
      } catch (error) {
        console.error("Error al cargar las empresas:", error);
      }
    }
    loadCompanies();
  }, []);
  // El segundo argumento vacío asegura que se ejecute solo una vez

  return (
    <>
      <visualizer resultprop={result} />
    </>
  );
};

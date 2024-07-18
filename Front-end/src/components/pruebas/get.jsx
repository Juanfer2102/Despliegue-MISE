// archivo Componenteprueba.js

import React from "react";
import { useEffect, useState } from "react";
import getType from "../../api/pruebas.api"; // Asegúrate de ajustar la ruta correcta
import { Visualizer } from "./visualizer";

export function GetTypeNeeded ( { apiRes } ) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function loadCompanies() {
      try {
        const res = await getType(apiRes).getAllInfo();
        setResult(res.data);
        console.log(res.data)
        return res.data;
        
      } catch (error) {
        console.error("Error al cargar las empresas:", error);
      }
    }
    loadCompanies();
  }, [apiRes]);
  // El segundo argumento vacío asegura que se ejecute solo una vez

  return (
    <>
      
    </>
  );
};

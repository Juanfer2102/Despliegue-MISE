// archivo rolApi.js

import axios from "axios";

function getType(type) {
  const miseApi = axios.create({
    baseURL: "http://localhost:8000/mise/api/v1/"+ type+"/",
  });

  const getAllInfo = () => miseApi.get("/");

  return {
    getAllInfo,
  };
}

export default getType;

export const createCompany = (rol) => miseApi.post("/", rol);

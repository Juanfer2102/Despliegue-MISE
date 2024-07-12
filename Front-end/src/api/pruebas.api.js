import axios from "axios";

const rolApi = axios.create({
  baseURL: "http://localhost:8000/mise/api/v1/rol/",
});

export const getAllCompanies = () => rolApi.get("/");

export const createCompany = (rol) => rolApi.post("/", rol);
 
import axios from "axios";

export const getAllCompanies = () => {
  return axios.get("http://localhost:8000/mise/api/v1/rol/");
};

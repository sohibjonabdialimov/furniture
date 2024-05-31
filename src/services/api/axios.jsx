import axios from "axios";

export const axiosT = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});
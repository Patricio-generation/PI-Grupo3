import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api", 
});

// Agregar la API Key a cada solicitud
API.interceptors.request.use((config) => {
    config.headers['x-api-key'] = process.env.REACT_APP_API_KEY; // Asegúrate de tener la API Key en tu archivo .env
    return config;
  });
  


export default API;
import axios from 'axios';

// Crear una instancia de Axios
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Agregar la API Key a cada solicitud
API.interceptors.request.use(
  (config) => {
    // Asegúrate de tener la API Key en tu archivo .env
    config.headers['x-api-key'] = import.meta.env.VITE_API_KEY;
    return config;
  },
  (error) => {
    // Manejo de errores en la solicitud
    return Promise.reject(error);
  }
);

// Manejo de respuestas y errores globales
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Puedes agregar manejo de errores aquí
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default API;

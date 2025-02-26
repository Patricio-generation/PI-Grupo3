import axios from 'axios';

// Crear una instancia de Axios
const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Verifica que esta URL sea correcta
});

// Agregar la API Key a cada solicitud
API.interceptors.request.use(
  (config) => {
    console.log('Solicitud enviada:', config);
    config.headers['x-api-key'] = import.meta.env.VITE_API_KEY; // Asegúrate de que esta variable exista
    return config;
  },
  (error) => {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  }
);

// Manejo de respuestas y errores globales
API.interceptors.response.use(
  (response) => {
    console.log('Respuesta recibida:', response);
    return response;
  },
  (error) => {
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default API;
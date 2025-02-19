// Creo un Middleware para Verificar la API Key

require("dotenv").config(); ///carga las variables de entorno desde env. //Permite leer la API Key guardada en .env con process.env.API_KEY.

function apiKeyAuth(req, res, next) { //Define el middleware apiKeyAuth, que se ejecutará antes de ciertas rutas.
    const apiKey = req.header("x-api-key"); // Obtener API Key desde los headers //Busca en los headers (x-api-key) la clave enviada por el cliente.

    if (!apiKey) {
        return res.status(401).json({ message: "API Key requerida" }); //Si no se envió una API Key, bloquea la solicitud con un error 401 Unauthorized. // Evita que clientes sin clave accedan a la API.
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ message: "API Key inválida" }); //Si la API Key es incorrecta, bloquea la solicitud con un error 403 Forbidden. //Evita accesos no autorizados con claves incorrectas.
    }

    next(); // Continuar con la solicitud si la API Key es válida
}

module.exports = apiKeyAuth; // exportamos para poder usarlo
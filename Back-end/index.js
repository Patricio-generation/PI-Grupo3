require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Inicializar app
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Permite trabajar con JSON en las solicitudes

// Conexión a la base de datos
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.error('Error al conectar a la base de datos:', err));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

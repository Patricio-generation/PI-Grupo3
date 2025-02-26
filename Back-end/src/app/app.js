const express = require("express"); /// requerimos express
const morgan = require("morgan"); // requerimos morgan 
const apiKeyAuth = require("../middleware/apiKeyAuth"); // Importamos el middleware
const cors = require('cors'); // Para permitir peticiones desde el frontend


const app = express();

const userRoutes = require("../routers/userRoutes.js");
const reservationRoutes = require("../routers/reservationRoutes.js");
const paymentRoutes = require("../routers/paymentRoutes.js");
const tinajaRoutes = require("../routers/tinajaRoutes.js");
const clientRoutes = require("../routers/clientRoutes.js");
const cabinRoutes = require("../routers/cabinRoutes.js");
const historicalRoutes = require("../routers/historicalRoutes.js"); 

// Middlewares
app.use(morgan("dev")); // función middleware de terceros
app.use(express.json()); // Permite recibir JSON
app.use(cors());




// Aplico API Key Auth a todas las rutas protegidas
app.use("/api/users", apiKeyAuth, userRoutes);
app.use("/api/reservations", apiKeyAuth, reservationRoutes);
app.use("/api/payments", apiKeyAuth, paymentRoutes);
app.use("/api/tinajas", apiKeyAuth, tinajaRoutes);
app.use("/api/clients", apiKeyAuth, clientRoutes);
app.use("/api/cabins", apiKeyAuth, cabinRoutes);
app.use("/api/historical", apiKeyAuth, historicalRoutes);

module.exports = app;

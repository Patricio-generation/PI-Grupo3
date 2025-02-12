const express = require("express"); /// requerimos express
const morgan = require("morgan"); // requerimos morgan 
const app = express();
const  userRoutes = require("../routers/userRoutes.js");
const reservationRoutes = require("../routers/reservationRoutes.js");
const paymentRoutes = require("../routers/paymentRoutes.js");
const tinajaRoutes = require("../routers/tinajaRoutes.js");
const clientRoutes = require("../routers/clientRoutes.js");
const cabinRoutes = require("../routers/cabinRoutes.js");


//Middlewares
app.use(morgan("dev")); //funcion middleware de terceros inyecto esta funcion para que se ejecute antes 
app.use(express.json()); //

app.use("/api/users", userRoutes); //ruta para las rutas de usuarios
app.use("/api/reservations", reservationRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/tinajas", tinajaRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/cabins", cabinRoutes);



module.exports = app;
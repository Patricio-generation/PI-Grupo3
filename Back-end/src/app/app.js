const express = require("express"); /// requerimos express
const morgan = require("morgan"); // requerimos morgan 
const app = express();



//Middlewares
app.use(morgan("dev")); //funcion middleware de terceros inyecto esta funcion para que se ejecute antes 



module.exports = app;
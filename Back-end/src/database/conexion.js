require("dotenv").config();  // Esto carga las variables de entorno desde el archivo .env
const mongoose = require ('mongoose'); //requiere libreria mongoose

const dbConnection = async () => { //palabra reservada async que dentro de la funcion en alguna parte va,os atener algun codigo asincronico 


    // trycatch (try:intentar) (catch:captura el error y lo almacena en el parametro) es una sentencia que le dice a javascript que intente hacer algo y si todo sale bien genial y si sale error que lo capture 
        try {
            console.log("URL de MongoDB:", process.env.MONGO_URL);
           //palabra reserveda await espere la respuesta de la conexion 
            await mongoose.connect(process.env.MONGO_URL) //es asincronica porque hace uso de un metodo externo
            // await mongoose.connect(http://127.0.0.1:3000)
            console.log("conexion a la base de datos exitosa ");


        } catch (error) {
            console.log(error); //que me muestre en la consola si ocurre un error 

        }
}

module.exports = {dbConnection}; //exportamos la funcion 
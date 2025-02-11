const mongoose = require ('mongoose'); //requiere libreria mongoose

const dbConnection = async () => { //palabra reservada async que dentro de la funcion en alguna parte va,os atener algun codigo asincronico 


    // trycatch (try:intentar) (catch:captura el error y lo almacena en el parametro) es una sentencia que le dice a javascript que intente hacer algo y si todo sale bien genial y si sale error que lo capture 
        try {
           //palabra reserveda await espere la respuesta de la conexion 
            await mongoose.connect("mongodb://localhost:27017/back-end-PI-Grupo3") //es asincronica porque hace uso de un metodo externo
            console.log("conexion a la base de datos exitosa ");


        } catch (error) {
            console.log(error); //que me muestre en la consola si ocurre un error 

        }
}

module.exports = {dbConnection}; //exportamos la funcion 
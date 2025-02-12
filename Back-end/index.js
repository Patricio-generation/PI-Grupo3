const app = require('./src/app/app.js'); // importamos app
const { dbConnection } = require('./src/database/conexion.js'); // importamos conexion
require('./src/cronJobs/historicalTasks');
const port = 3000; //constante que almacena el puerto

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
}); //(listen)=escuchar //traemos variable port

dbConnection();

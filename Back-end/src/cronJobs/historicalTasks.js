const cron = require('node-cron');
const moveOldReservations = require('../Services/moveOldReservations');
const moveOldPayments = require('../Services/moveOldPayments');

// Ejecutar la tarea todos los días a la medianoche
cron.schedule('0 0 * * *', async () => {
  console.log('Iniciando proceso de archivado...');
  await moveOldReservations();
  await moveOldPayments();
  console.log('Proceso finalizado.');
});

console.log('Cron job de archivado iniciado.');

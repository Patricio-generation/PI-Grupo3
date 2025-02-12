const Reservation = require('../models/Reservation');
const HistoricalReservation = require('../models/HistoricalReservation');

const moveOldReservations = async () => {
  try {
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const pastReservations = await Reservation.find({
      checkoutDate: { $lt: new Date() },
      updatedAt: { $gte: oneDayAgo },
    });

    if (pastReservations.length === 0) {
      console.log('No hay nuevas reservas para mover.');
      return;
    }

    const bulkOps = pastReservations.map((reservation) => ({
      updateOne: {
        filter: { originalReservation: reservation._id },
        update: {
          $setOnInsert: {
            originalReservation: reservation._id,
            transferDate: new Date(),
            data: reservation.toObject(),
          },
        },
        upsert: true,
      },
    }));

    await HistoricalReservation.bulkWrite(bulkOps);
    console.log(`Se movieron ${bulkOps.length} reservas antiguas.`);
  } catch (error) {
    console.error('Error moviendo reservas:', error);
  }
};

module.exports = moveOldReservations;

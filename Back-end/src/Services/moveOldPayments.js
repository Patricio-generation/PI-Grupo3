const Payment = require('../models/Payment');
const HistoricalPayment = require('../models/HistoricalPayment');

const moveOldPayments = async () => {
  try {
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const completedPayments = await Payment.find({
      updatedAt: { $gte: oneDayAgo },
    });

    if (completedPayments.length === 0) {
      console.log('No hay nuevos pagos para mover.');
      return;
    }

    const bulkOps = completedPayments.map((payment) => ({
      updateOne: {
        filter: { originalPayment: payment._id },
        update: {
          $setOnInsert: {
            originalPayment: payment._id,
            transferDate: new Date(),
            data: payment.toObject(),
          },
        },
        upsert: true,
      },
    }));

    await HistoricalPayment.bulkWrite(bulkOps);
    console.log(`Se movieron ${bulkOps.length} pagos completados.`);
  } catch (error) {
    console.error('Error moviendo pagos:', error);
  }
};

module.exports = moveOldPayments;

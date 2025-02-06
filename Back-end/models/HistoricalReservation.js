const mongoose = require("mongoose");

const historicalReservationSchema = new mongoose.Schema({
  originalReservation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reservation",
    required: true,
  },
  transferDate: {
    type: Date,
    default: Date.now,
  },
  data: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model(
  "HistoricalReservation",
  historicalReservationSchema
);

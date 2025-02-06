const mongoose = require("mongoose");

const historicalPaymentSchema = new mongoose.Schema({
  originalPayment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
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

module.exports = mongoose.model("HistoricalPayment", historicalPaymentSchema);

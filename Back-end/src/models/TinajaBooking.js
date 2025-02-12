const mongoose = require("mongoose");

const tinajaBookingSchema = new mongoose.Schema({
  reservation: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Reservation", 
    required: true 
  },
  startDate: { 
    type: Date, 
    required: true 
  },
  endDate: { 
    type: Date, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["Solicitada", "Reservada", "Cancelada"],
    default: "Solicitada"
  }
}, { timestamps: true });

module.exports = mongoose.model("TinajaBooking", tinajaBookingSchema);
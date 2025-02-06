const mongoose = require("mongoose");

const cabinSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["TinyCabin", "Suite"],
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  maxAdults: {
    type: Number,
    required: true,
  },
  maxChildren: {
    type: Number,
    required: true,
  },
  hasHotTub: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["Disponible", "Ocupada", "Mantenimiento"],
    default: "Disponible",
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "CLP",
  },
});


module.exports = mongoose.model("Cabin", cabinSchema);

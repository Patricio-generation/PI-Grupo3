const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  documentType: {
    type: String,
    required: true,
    enum: ["RUT", "Pasaporte", "ID Extranjero"],
  },
  documentNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Client", clientSchema);

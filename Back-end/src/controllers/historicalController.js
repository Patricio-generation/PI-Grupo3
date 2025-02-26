const HistoricalReservation = require("../models/HistoricalReservation");
const HistoricalPayment = require("../models/HistoricalPayment");

const getHistoricalReservations = async (req, res) => {
  try {
    const data = await HistoricalReservation.find().populate("originalReservation");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo reservas históricas", error });
  }
};

const getHistoricalReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await HistoricalReservation.findById(id).populate("originalReservation");
    if (!data) return res.status(404).json({ message: "Reserva histórica no encontrada" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo la reserva histórica", error });
  }
};

const getHistoricalPayments = async (req, res) => {
  try {
    const data = await HistoricalPayment.find().populate("originalPayment");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo pagos históricos", error });
  }
};

const getHistoricalPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await HistoricalPayment.findById(id).populate("originalPayment");
    if (!data) return res.status(404).json({ message: "Pago histórico no encontrado" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo el pago histórico", error });
  }
};

module.exports = { 
  getHistoricalReservations, 
  getHistoricalReservationById, 
  getHistoricalPayments, 
  getHistoricalPaymentById 
};

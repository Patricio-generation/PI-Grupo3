const Reservation = require("../models/Reservation");

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("cabin").populate("client");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate("cabin").populate("client");
    if (!reservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate("cabin")
      .populate("client");
    if (!reservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

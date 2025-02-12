const TinajaBooking = require("../models/TinajaBooking");

const createTinajaBooking = async (req, res) => {
  try {
    const { reservation, startDate, endDate } = req.body;
    const newBooking = new TinajaBooking({ reservation, startDate, endDate });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTinajaBookings = async (req, res) => {
  try {
    const bookings = await TinajaBooking.find().populate("reservación");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTinajaBookingById = async (req, res) => {
  try {
    const booking = await TinajaBooking.findById(req.params.id).populate("reservación");
    if (!booking) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTinajaBooking = async (req, res) => {
  try {
    const booking = await TinajaBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTinajaBooking = async (req, res) => {
  try {
    const booking = await TinajaBooking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.status(200).json({ message: "Reserva eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTinajaBooking,
  getTinajaBookings,
  getTinajaBookingById,
  updateTinajaBooking,
  deleteTinajaBooking,
};
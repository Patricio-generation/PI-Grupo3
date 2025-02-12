import TinajaBooking from "../models/TinajaBooking.js";

// Crear una nueva reserva de tinaja
export const createTinajaBooking = async (req, res) => {
try {

const newTinaja = new TinajaBooking(req.body);
await newTinaja.save();
res.status(201).json({ message: "Reserva de tinaja creada con éxito.", data: newTinaja });
} catch (error) {
res.status(500).json({ message: "Error al crear la reserva de tinaja.", error: error.message });
}
};


// Obtener todas las reservas de tinaja
export const getTinajaBookings = async (req, res) => {
try {
const bookings = await TinajaBooking.find().populate("reservation");
res.status(200).json(bookings);
} catch (error) {
res.status(500).json({ message: "Error al obtener las reservas de tinaja.", error: error.message });
}
};


// Actualizar una reserva de tinaja
export const updateTinajaBooking = async (req, res) => {
try {
const updatedTinaja = await TinajaBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.status(200).json({ message: "Reserva de tinaja actualizada con éxito.", data: updatedTinaja });
} catch (error) {
res.status(500).json({ message: "Error al actualizar la reserva de tinaja.", error: error.message });
}
};
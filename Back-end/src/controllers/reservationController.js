const Reservation = require('../models/Reservation.js');

// Crear una nueva reserva
exports.createReservation = async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        await newReservation.save();
        res.status(201).json({ message: "Reserva creada con éxito", data: newReservation });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la reserva", error: error.message });
    }
};

// Obtener todas las reservas
exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate("client").populate("cabin");
        res.status(200).json({ message: "Reservas obtenidas con éxito", data: reservations });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las reservas", error: error.message });
    }
};

// Actualizar una reserva existente
exports.updateReservation = async (req, res) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Reserva actualizada con éxito", data: updatedReservation });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la reserva", error: error.message });
    }
};

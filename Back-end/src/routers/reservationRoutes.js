const express = require("express");
const { createReservation, getReservations, updateReservation } = require("../controllers/reservationController.js");

const router = express.Router();

// Rutas para reservas
router.post("/create", createReservation);
router.get("/get/:id", getReservations);
router.put("/update/:id", updateReservation);

module.exports = router;

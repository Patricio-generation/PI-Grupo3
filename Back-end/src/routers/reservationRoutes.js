import express from "express";
import { createReservation, getReservations, updateReservation } from "../controllers/reservationController.js";

const router = express.Router();
// rutas para reservas
router.post("/create", createReservation);
router.get("/get/:id", getReservations);
router.put("/update/:id", updateReservation);


export default router;
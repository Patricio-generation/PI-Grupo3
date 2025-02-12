import express from "express";
import { createReservation, getReservation, updateReservation } from "../Controllers/reservationController";

const router = express.Router();
// rutas para reservas
router.post("/create", createReservation);
router.get("/get/:id", getReservation);
router.put("/update/:id", updateReservation);


export default router;
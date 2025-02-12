import express from "express";
import { syncStock, getSyncTransactions } from "../controllers/syncController.js"

const router = express.Router();

// Rutas para sincronización
router.post("/", syncStock); // Guardar datos de sincronización
router.get("/", getSyncTransactions); // Consultar transacciones de sincr


export default router;
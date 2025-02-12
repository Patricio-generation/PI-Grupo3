import express from "express";
import { createClient, getClients, updateClient, deleteClient } from "../controllers/clientController.js";

const router = express.Router();


// Rutas para Clientes
router.post("/", createClient); // Crear cliente
router.get("/", getClients); // Obtener todos los clientes
router.put("/:id", updateClient); // Actualizar un cliente
router.delete("/:id", deleteClient); // Eliminar un cliente


export default router;
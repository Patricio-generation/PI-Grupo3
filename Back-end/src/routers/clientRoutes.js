const express = require("express");
const { createClient, getClients, updateClient, deleteClient } = require("../controllers/clientController.js");

const router = express.Router();

// Rutas para Clientes
router.post("/", createClient); // Crear cliente
router.get("/", getClients); // Obtener todos los clientes
router.put("/:id", updateClient); // Actualizar un cliente
router.delete("/:id", deleteClient); // Eliminar un cliente

module.exports = router;

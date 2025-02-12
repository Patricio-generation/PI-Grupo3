const express = require("express");
const { createCabin, getCabins, updateCabin, deleteCabin } = require("../controllers/cabinController.js");

const router = express.Router();

// Rutas para Cabañas
router.post("/", createCabin); // Crear cabaña
router.get("/", getCabins); // Obtener todas las cabañas
router.put("/:id", updateCabin); // Actualizar una cabaña
router.delete("/:id", deleteCabin); // Eliminar una cabaña

module.exports = router;

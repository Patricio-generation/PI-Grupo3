const express = require("express");
const { registerUser, loginUser, getUsers } = require("../controllers/userController.js");

const router = express.Router();

// Rutas para usuarios
router.post("/register", registerUser); // Registro de usuario
router.post("/login", loginUser); // Inicio de sesión
router.get("/", getUsers); // Obtener todos los usuarios

module.exports = router;

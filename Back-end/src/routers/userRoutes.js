import express from "express";
import { registerUser, loginUser, getUsers } from "../controllers/userController.js";

const router = express.Router();


// Rutas para usuarios
router.post("/register", registerUser); // Registro de usuario
router.post("/login", loginUser); // Inicio de sesión
router.get("/", getUsers); // Obtener todos los usuarios


export default router;
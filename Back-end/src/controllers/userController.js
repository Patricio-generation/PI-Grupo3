import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Registrar un usuario
export const registerUser = async (req, res) => {
try {
const { name, email, password, role } = req.body;

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

const newUser = new User({ name, email, password: hashedPassword, role });
await newUser.save();

res.status(201).json({ message: "Usuario registrado con éxito.", data: newUser });
} catch (error) {
res.status(500).json({ message: "Error al registrar el usuario.", error: error.message });
}
};


// Iniciar sesión
export const loginUser = async (req, res) => {
try {
const { email, password } = req.body;

const user = await User.findOne({ email });
if (!user) return res.status(404).json({ message: "Usuario no encontrado." });


const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(401).json({ message: "Contraseña incorrecta." });

const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

res.status(200).json({ message: "Inicio de sesión exitoso.", token });
} catch (error) {
res.status(500).json({ message: "Error al iniciar sesión.", error: error.message });
}
};


// Obtener usuarios
export const getUsers = async (req, res) => {
    try {
const users = await User.find();
res.status(200).json(users);
} catch (error) {
res.status(500).json({ message: "Error al obtener los usuarios.", error: error.message });
}
};
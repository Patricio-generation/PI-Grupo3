import Client from "../models/Client.js";

// Crear un cliente
export const createClient = async (req, res) => {
    try {
const newClient = new Client(req.body);
await newClient.save();
res.status(201).json({ message: "Cliente creado con éxito.", data: newClient });
} catch (error) {
res.status(500).json({ message: "Error al crear el cliente.", error: error.message });
}
};


// Obtener todos los clientes
export const getClients = async (req, res) => {
    try {
const clients = await Client.find();
res.status(200).json(clients);
} catch (error) {
res.status(500).json({ message: "Error al obtener los clientes.", error: error.message });
}
};


// Actualizar un cliente
export const updateClient = async (req, res) => {
    try {
const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.status(200).json({ message: "Cliente actualizado con éxito.", data: updatedClient });
} catch (error) {
res.status(500).json({ message: "Error al actualizar el cliente.", error: error.message });
}
};


// Eliminar un cliente
export const deleteClient = async (req, res) => {
    try {
const deletedClient = await Client.findByIdAndDelete(req.params.id);
if (!deletedClient) return res.status(404).json({ message: "Cliente no encontrado." });
res.status(200).json({ message: "Cliente eliminado con éxito.", data: deletedClient });
} catch (error) {
res.status(500).json({ message: "Error al eliminar el cliente.", error: error.message });
}
};
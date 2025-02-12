import SyncTransaction from "../models/SyncTransaction,js";

//Crear transaccion de sincronizacion

export const synStock = async (req, res) => {
    try {
        const {channel, updateRooms, timestamps, error} = req.body;

//verificar duplicados

const existingTransaction = await SyncTransaction.findOne({ channel, timestamp });

if (existingTransaction) {
    return res.status(400).json({ message: "La transacción de sincronización ya existe" });
}

const newTransaction = new SyncTransaction({ channel, updatedRooms, timestamp, error });
await newTransaction.save();
res.status(201).json({ message: "Transacción de sincronización creada.", data: newTransaction });
} catch (error) {
res.status(500).json({ message: "Error al sincronizar el stock.", error: error.message });
}
};


// Consultar transacciones de sincronización
export const getSyncTransactions = async (req, res) => {
try {
const transactions = await SyncTransaction.find();
res.status(200).json(transactions);
} catch (error) {
res.status(500).json({ message: "Error al obtener las transacciones.", error: error.message });
}
};
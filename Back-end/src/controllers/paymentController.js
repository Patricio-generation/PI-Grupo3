const Payment = require('../Models/Payment.js');

// Crear un nuevo pago
exports.createPayment = async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json({ message: "Pago creado con éxito", data: newPayment });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el pago", error: error.message });
    }
};

// Obtener todos los pagos
exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json({ message: "Pagos obtenidos con éxito", data: payments });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los pagos", error: error.message });
    }
};

// Actualizar un pago
exports.updatePayment = async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Pago actualizado con éxito", data: updatedPayment });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el pago", error: error.message });
    }
};

// Eliminar un pago
exports.deletePayment = async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        
        if (!deletedPayment) {
            return res.status(404).json({ message: "Pago no encontrado" });
        }

        res.status(200).json({ message: "Pago eliminado con éxito", data: deletedPayment });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el pago", error: error.message });
    }
};

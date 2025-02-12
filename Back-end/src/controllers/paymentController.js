import payment from '../Models/Payment.js';

// crear un nuevo pago
export const createPayment = async (req, res) => {
    try {
        const newPayment = new payment(req.body);
        await newPayment.save();
        res.status(201).json({ message: "Pago creado con éxito", data: newPayment });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el pago", error: error.message });
    }
};

// obtener todos los pagos
export const getPayments = async (req, res) => {
 try {
    const payments = await payment.find();
    res.status(200).json({ message: "Pagos obtenidos con éxito", data: payments }); 
 } catch (error) {
    res.status(500).json({ message: "Error al obtener los pagos", error: error.message });
 }   
};

// actualizar un pago
export const updatePayment = async (req, res) => {
    try {
        const updatePayment = await payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Pago actualizado con éxito", data: updatePayment });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el pago", error: error.message });
    }
};

// eliminar un pago
export const deletePayment = async (req, res) => {
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

const Cabin = require("../models/Cabin.js");

// Crear una cabaña
exports.createCabin = async (req, res) => {
    try {
        const newCabin = new Cabin(req.body);
        await newCabin.save();
        res.status(201).json({ message: "Cabaña creada con éxito.", data: newCabin });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la cabaña.", error: error.message });
    }
};

// Obtener todas las cabañas
exports.getCabins = async (req, res) => {
    try {
        const cabins = await Cabin.find();
        res.status(200).json(cabins);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las cabañas.", error: error.message });
    }
};

// Actualizar una cabaña
exports.updateCabin = async (req, res) => {
    try {
        const updatedCabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Cabaña actualizada con éxito.", data: updatedCabin });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la cabaña.", error: error.message });
    }
};

// Eliminar una cabaña
exports.deleteCabin = async (req, res) => {
    try {
        const deletedCabin = await Cabin.findByIdAndDelete(req.params.id);
        if (!deletedCabin) return res.status(404).json({ message: "Cabaña no encontrada." });
        res.status(200).json({ message: "Cabaña eliminada con éxito.", data: deletedCabin });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la cabaña.", error: error.message });
    }
};

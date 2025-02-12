const Cabin = require("../models/Cabin");

exports.getAllCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find();
    res.json(cabins);
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCabinById = async (req, res) => {
  try {
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) return res.status(404).json({ message: "Cabina no encontrada" });
    res.json(cabin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCabin = async (req, res) => {
  try {
    const cabin = new Cabin(req.body);
    await cabin.save();
    res.status(201).json({
      message: "Cabina creada con éxito.",
      data: cabin
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cabin) return res.status(404).json({ message: "Cabina no encontrada" });
    res.status(200).json({ message: "Cabina actualizada exitosamente", cabin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findByIdAndDelete(req.params.id);
    if (!cabin) return res.status(404).json({ message: "Cabina no encontrada" });
    res.json({ message: "Cabina eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

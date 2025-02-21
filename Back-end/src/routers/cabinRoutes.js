const express = require("express");
const cabinController = require("../controllers/cabinController");


const router = express.Router();

router.get("/",cabinController.getAllCabins);
router.get("/:id", cabinController.getCabinById);
router.post("/", cabinController.createCabin);
router.put("/:id", cabinController.updateCabin);
router.delete("/:id",  cabinController.deleteCabin);

module.exports = router;


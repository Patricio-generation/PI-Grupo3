const express = require("express");
const cabinController = require("../controllers/cabinController");
const apiKeyAuth = require("../middleware/apiKeyAuth");

const router = express.Router();

router.get("/", apiKeyAuth,  cabinController.getAllCabins);
router.get("/:id", apiKeyAuth, cabinController.getCabinById);
router.post("/", apiKeyAuth, cabinController.createCabin);
router.put("/:id", apiKeyAuth, cabinController.updateCabin);
router.delete("/:id", apiKeyAuth, cabinController.deleteCabin);

module.exports = router;
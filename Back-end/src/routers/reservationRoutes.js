const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const apiKeyAuth = require("../middleware/apiKeyAuth");

router.get("/", apiKeyAuth, reservationController.getAllReservations);
router.get("/:id", apiKeyAuth, reservationController.getReservationById);
router.post("/", apiKeyAuth, reservationController.createReservation);
router.put("/:id", apiKeyAuth, reservationController.updateReservation);
router.delete("/:id", apiKeyAuth, reservationController.deleteReservation);

module.exports = router;
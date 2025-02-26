const express = require("express");
const { 
  getHistoricalReservations, 
  getHistoricalReservationById, 
  getHistoricalPayments, 
  getHistoricalPaymentById 
} = require("../controllers/historicalController");

const router = express.Router();

router.get("/reservations", getHistoricalReservations);
router.get("/reservations/:id", getHistoricalReservationById);
router.get("/payments", getHistoricalPayments);
router.get("/payments/:id", getHistoricalPaymentById);

module.exports = router;

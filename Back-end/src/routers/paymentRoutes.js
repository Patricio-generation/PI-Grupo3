const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const apiKeyAuth = require("../middleware/apiKeyAuth");

router.get("/", apiKeyAuth, paymentController.getAllPayments);
router.get("/:id", apiKeyAuth, paymentController.getPaymentById);
router.post("/", apiKeyAuth, paymentController.createPayment);
router.put("/:id", apiKeyAuth, paymentController.updatePayment);
router.delete("/:id", apiKeyAuth, paymentController.deletePayment);

module.exports = router;
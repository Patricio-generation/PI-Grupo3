const express = require("express");
const router = express.Router();
const tinajaBookingController = require("../controllers/tinajaController");
const apiKeyAuth = require("../middleware/apiKeyAuth");

router.post("/", apiKeyAuth, tinajaBookingController.createTinajaBooking);
router.get("/", apiKeyAuth, tinajaBookingController.getTinajaBookings);
router.get("/:id", apiKeyAuth, tinajaBookingController.getTinajaBookingById);
router.put("/:id", tinajaBookingController.updateTinajaBooking);
router.delete("/:id", apiKeyAuth, tinajaBookingController.deleteTinajaBooking);

module.exports = router;
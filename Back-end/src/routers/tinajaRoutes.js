const express = require("express");
const router = express.Router();
const tinajaBookingController = require("../controllers/tinajaController");


router.post("/", tinajaBookingController.createTinajaBooking);
router.get("/",  tinajaBookingController.getTinajaBookings);
router.get("/:id",  tinajaBookingController.getTinajaBookingById);
router.put("/:id", tinajaBookingController.updateTinajaBooking);
router.delete("/:id", tinajaBookingController.deleteTinajaBooking);

module.exports = router;
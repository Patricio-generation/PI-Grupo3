const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const apiKeyAuth = require("../middleware/apiKeyAuth");

router.get("/", apiKeyAuth, clientController.getAllClients);
router.get("/:id", apiKeyAuth, clientController.getClientById);
router.post("/", apiKeyAuth, clientController.createClient);
router.put("/:id", apiKeyAuth, clientController.updateClient);
router.delete("/:id", apiKeyAuth, clientController.deleteClient);

module.exports = router;

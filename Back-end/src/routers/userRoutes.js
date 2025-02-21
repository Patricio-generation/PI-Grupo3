const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const apiKeyAuth = require("../middleware/apiKeyAuth");

router.post("/register", userController.registerUser);
router.post("/login", apiKeyAuth, userController.loginUser);
router.get("/", apiKeyAuth, userController.getUsers);
router.get("/:id", apiKeyAuth, userController.getUserById);
router.put("/:id", apiKeyAuth, userController.updateUser);
router.delete("/:id", apiKeyAuth, userController.deleteUser);

module.exports = router;

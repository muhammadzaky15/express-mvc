const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/", userController.index);
router.get("/:id", userController.detail);

module.exports = router;
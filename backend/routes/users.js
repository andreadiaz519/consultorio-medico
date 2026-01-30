const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/register", usersController.register);
router.post("/login", usersController.login);

/* ESTO ES OBLIGATORIO */
module.exports = router;

const express = require("express");
const router = express.Router();
const patientsController = require("../controllers/patientsController");


router.get("/", patientsController.getAll);
router.post("/", patientsController.create);
router.put("/:id", patientsController.update);
router.delete("/:id", patientsController.remove);

module.exports = router;

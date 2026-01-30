const patientsModel = require("../models/patientsModel");

/* GET /patients */
exports.getAll = (req, res, next) => {
  try {
    const patients = patientsModel.getAll();
    res.json(patients);
  } catch (error) {
    next(error);
  }
};

/* POST /patients */
exports.create = (req, res, next) => {
  try {
    const newPatient = patientsModel.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    next(error);
  }
};

/* PUT /patients/:id */
exports.update = (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPatient = patientsModel.update(Number(id), req.body);
    res.json(updatedPatient);
  } catch (error) {
    next(error);
  }
};

/* DELETE /patients/:id */
exports.remove = (req, res, next) => {
  try {
    const { id } = req.params;
    patientsModel.remove(Number(id));
    res.json({ message: "Paciente eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};

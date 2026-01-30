const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/patients.json");

const readData = () => {
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
};

const saveData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

exports.getAll = () => {
  return readData();
};

exports.create = (patient) => {
  const data = readData();

  const newPatient = {
    id: Date.now(),
    ...patient,
  };

  data.push(newPatient);
  saveData(data);

  return newPatient;
};

exports.update = (id, updatedData) => {
  const data = readData();
  const index = data.findIndex((p) => p.id === id);

  if (index === -1) {
    throw new Error("Paciente no encontrado");
  }

  data[index] = { ...data[index], ...updatedData };
  saveData(data);

  return data[index];
};

exports.remove = (id) => {
  const data = readData();
  const filtered = data.filter((p) => p.id !== id);

  if (filtered.length === data.length) {
    throw new Error("Paciente no encontrado");
  }

  saveData(filtered);
};

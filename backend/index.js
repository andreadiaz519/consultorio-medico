const express = require("express");
const path = require("path");
require("dotenv").config();

const usersRoutes = require("./routes/users");
const patientsRoutes = require("./routes/patients");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRoutes);
app.use("/patients", patientsRoutes);


app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor del consultorio médico corriendo en puerto ${PORT}`);
});

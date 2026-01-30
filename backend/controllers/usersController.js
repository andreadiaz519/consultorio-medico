const usersModel = require("../models/usersModel");
const hashService = require("../services/hashService");
const jwtService = require("../services/jwtService");

/* POST /users/register */
exports.register = (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error("Datos incompletos");
    }

    const existingUser = usersModel.findByUsername(username);
    if (existingUser) {
      throw new Error("El usuario ya existe");
    }

    const hashedPassword = hashService.hashPassword(password);

    const newUser = {
      id: Date.now(),
      username,
      password: hashedPassword,
    };

    usersModel.createUser(newUser);

   res.status(201).json({
  id: newUser.id,
  username: newUser.username,
  message: "Usuario registrado correctamente"
});

  } catch (error) {
    next(error);
  }
};

/* POST /users/login */
exports.login = (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error("Datos incompletos");
    }

    const user = usersModel.findByUsername(username);
    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    const validPassword = hashService.comparePassword(
      password,
      user.password
    );

    if (!validPassword) {
      throw new Error("Credenciales inválidas");
    }

    const token = jwtService.generateToken({
      id: user.id,
      username: user.username,
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};


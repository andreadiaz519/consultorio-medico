const jwtService = require("../services/jwtService");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token requerido" });
  }

  try {
    const token = authHeader.split(" ")[1];
    jwtService.verifyToken(token);
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
};

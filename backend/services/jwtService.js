const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.generateToken = (payload) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: "1h",
  });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};

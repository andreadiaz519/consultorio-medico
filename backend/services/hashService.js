const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10;

exports.hashPassword = (password) => {
  return bcrypt.hashSync(password, SALT_ROUNDS);
};

exports.comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

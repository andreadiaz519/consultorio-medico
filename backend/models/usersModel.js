const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/users.json");

const readData = () => {
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
};

const saveData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

exports.findByUsername = (username) => {
  const users = readData();
  return users.find(
    (u) => u.username.toLowerCase() === username.toLowerCase()
  );
};

exports.createUser = (user) => {
  const users = readData();
  users.push(user);
  saveData(users);
};

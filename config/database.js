const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "127.0.0.1",
  username: "hemanths",
  password: 123456,
  database: "hemanths",
  createDatabase: true,
});

module.exports = sequelize;
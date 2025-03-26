const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const User = sequelize.define("USER", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: {msg:"Username already exists"} },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});
module.exports = User;

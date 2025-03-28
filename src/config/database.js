const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Path to SQLite file
  logging: false, // Disable logging
});

module.exports = sequelize;

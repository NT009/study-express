const express = require("express");
const server = require("./server");
const sequelize = require('./src/config/database');
require('dotenv').config()
const app = express();
const port = process?.env?.PORT
const initDB = async () => {
  await sequelize.sync({ force: false }); // Sync DB without dropping tables
  console.log('✅ Database synced!');
};
app.use(express.json());
app.use("/", server);
app.listen(port, async () => {
  await initDB();
  console.log(`Example app listening on port ${port}`);
});

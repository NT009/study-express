const express = require("express");
const toDoRoute = require("./src/modules/toDo/to-do.route");
const authRoute = require("./src/modules/auth/auth.route");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("server working");
});
router.use("/todo",toDoRoute);
router.use("/auth",authRoute);
module.exports = router;

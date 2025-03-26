const express = require("express");
const router = express.Router();
const AuthController = require("./auth.controller");
const { userValidator, userLoginValidator } = require("./dto/user.dto");
const { validationErrorHandler } = require("../../middlewares/validate.middleware");


router.post("/register",userValidator,validationErrorHandler, AuthController.RegisterUser);
router.post("/login", userLoginValidator, validationErrorHandler, AuthController.LoginUser);
module.exports = router;

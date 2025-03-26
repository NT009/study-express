const { body, query } = require("express-validator");
exports.userValidator = [
  body("username")
    .isString()
    .withMessage("username must be a string")
    .trim()
    .escape(),
  body("name").isString().withMessage("name must be a string").trim().escape(),
  body("email")
    .isEmail()
    .withMessage("email must be a valid email")
    .trim()
    .escape(),
  body("password")
    .isString()
    .withMessage("password must be a string")
    .trim()
    .escape()
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
];
exports.userLoginValidator = [
  body("username")
    .isString()
    .withMessage("username must be a string")
    .trim()
    .escape(),
  body("password")
    .isString()
    .withMessage("password must be a string")
    .trim()
    .escape()
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
];
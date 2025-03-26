const express = require("express");
const router = express.Router();
const TodoController = require('./to-do.controller');
const { createTodoValidator } = require("./dtos/to-do.dto");
const { validationErrorHandler } = require("../../middlewares/validate.middleware");

router.post('/', TodoController.createTodo);
router.get('/', TodoController.getTodo);
router.put('/:id', createTodoValidator, validationErrorHandler,TodoController.updateTodo);

module.exports = router;

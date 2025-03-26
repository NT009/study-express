const { body, query } = require('express-validator');

exports.createTodoValidator = [
  body('title')
  .optional()
    .trim()
    .isString()
    .withMessage('Title must be a string')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long'),
  body('description').optional().isString().withMessage("Description must be a string").trim().escape(),
  body('isCompleted').optional().isBoolean().withMessage('isCompleted must be a boolean'),
//   query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
];
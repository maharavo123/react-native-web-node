const { body, check } = require('express-validator');

const User = require('../models/users');

module.exports.comptesValidator = [
  body('rib').isLength({ min: 20 }),
];

module.exports.usersValidatorUpdate = [
  body('username').isLength({ min: 3 }),
  body('rib').isLength({ min: 20 }),
];

module.exports.usersValidator = [
  body('username').isLength({ min: 3 }).withMessage('Must be at least 3 chars long'),
  body('email').isEmail().withMessage('E-mail is ivalid'),
  check('email').custom(email => User.findOne({ email }).then(user => {
    if (user) {
      return Promise.reject('E-mail already in use');
    }
  })),
  check('password').isLength({ min: 5 }).withMessage('Must be at least 5 chars long'),
  check('rib').isNumeric().withMessage('Must be only numeric').isLength({ min: 20 })
    .withMessage('Must be at least 20 chars long'),
];

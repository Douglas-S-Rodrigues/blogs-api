const { Router } = require('express');
const userControllers = require('../controllers/userControllers');

const user = Router();

user.route('/')
  .post(userControllers.createUser);

module.exports = user;
const { Router } = require('express');
const userControllers = require('../controllers/userControllers');
const authService = require('../services/authService');

const user = Router();

user.route('/')
  .post(userControllers.createUser)
  .get(authService.validateToken, userControllers.getAllUsers);

module.exports = user;
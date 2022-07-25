const { Router } = require('express');

const categoryControllers = require('../controllers/categoryControllers');
const authService = require('../services/authService');

const category = Router();

category.route('/')
  .post(authService.validateToken, categoryControllers.createCategory);

  module.exports = category;
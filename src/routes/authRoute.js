const { Router } = require('express');
const loginControllers = require('../controllers/loginControllers');

const login = Router();

login.route('/')
  .post(loginControllers.postLogin);

module.exports = login;
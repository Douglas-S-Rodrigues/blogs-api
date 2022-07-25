const { Router } = require('express');

const postControllers = require('../controllers/postControllers');
const authService = require('../services/authService');

const post = Router();

post.route('/')
  .get(authService.validateToken, postControllers.getAllPosts);

module.exports = post;

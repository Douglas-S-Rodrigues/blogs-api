const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');
const { ValidationTokenError, getByEmailValidationError } = require('./utils');

const secret = process.env.JWT_SECRET || 'secret';

const authService = {
  async validateToken(request, _response) {
    const token = request.headers.authorization;
    if (!token) {
      return ValidationTokenError('Token not found');
    }
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (err) {
      return ValidationTokenError('Expired or invalid token');
    }
  },

  async validateLogin(request, _response) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
    const result = schema.validate(request);
    return result.value;
  },

  async makeToken(user) {
    const token = jwt.sign({ data: user }, secret);
    return token;
  },

  async readToken(token) {
    const { data } = jwt.decode(token, secret);
    return data;
  },

  async getByEmail({ email, password }) {
    if (!email || !password) {
      return getByEmailValidationError('Some required fields are missing');
    }
    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });
    if (!user || user.password !== password) {
      return getByEmailValidationError('Invalid fields');
    }
  },

};

module.exports = authService;
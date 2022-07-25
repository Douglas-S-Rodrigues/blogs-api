const { User } = require('../database/models');
const { userDataValidation, registerValidationError, userIdError } = require('./utils');

const userService = {
  async userValidate(body) {
    const { displayName, email, password } = body;
    const regex = /\S+@\S+\.\S+/;
    const userVerify = await User.findOne({ 
      where: { email },
    });
    
    if (displayName.length < 8) {
      return userDataValidation('"displayName" length must be at least 8 characters long');
    }

    if (!regex.test(email)) {
      return userDataValidation('"email" must be a valid email');
    }

    if (password.length < 6) {
      return userDataValidation('"password" length must be at least 6 characters long');
    }

    if (userVerify) {
      return registerValidationError('User already registered');
    }
  },

  async createUser(body) {
    const newUser = await User.create(
      body,
      { raw: true },
    );
    return newUser;
  },

  async getAllUsers() {
    const users = await User.findAll({
      raw: true,
      attributes: {
        exclude: ['password'],
      },
    });
  return users;
  },

  async getUserById(id) {
    const user = await User.findOne({
      where: { id },
      raw: true,
      attributes: {
        exclude: ['password'],
      },
    });
    if (!user) {
      return userIdError('User does not exist');
    }
    return user;
  },

};

module.exports = userService;
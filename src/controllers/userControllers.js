const userService = require('../services/userService');
const authService = require('../services/authService');

const userControllers = {
  async createUser(req, res) {
    await userService.userValidate(req.body);
    const validate = await userService.createUser(req.body);
    const token = await authService.makeToken(validate);
    res.status(201).json({ token });
  },
};

module.exports = userControllers;
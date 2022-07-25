const userService = require('../services/userService');
const authService = require('../services/authService');

const userControllers = {
  async createUser(req, res) {
    await userService.userValidate(req.body);
    const validate = await userService.createUser(req.body);
    const token = await authService.makeToken(validate);
    res.status(201).json({ token });
  },

  async getAllUsers(_req, res) {
    const users = await userService.getAllUsers();
    return res.status(200).json(users); 
  },

  async getUserById(req, res) {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).json(user);
  },
  
};

module.exports = userControllers;
const authService = require('../services/authService');

const loginControllers = {
  async postLogin(req, res) {
    const { email, password } = req.body;
    const validate = await authService.validateLogin({ email, password });
    const emailData = await authService.getByEmail(validate);
    const token = await authService.makeToken(emailData);
    res.status(200).json({ token });
  },
};

module.exports = loginControllers;
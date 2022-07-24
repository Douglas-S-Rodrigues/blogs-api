const loginService = require('../services/authService');

const loginControllers = {
  postLogin: async (req, res) => {
    const { email, password } = req.body;
    const validate = await loginService.validateLogin({ email, password });
    const emailData = await loginService.getByEmail(validate);
    const token = await loginService.makeToken(emailData);
    res.status(200).json({ token });
  },
};

module.exports = loginControllers;
const { newToken } = require('../services/authService');

const loginController = async (request, response) => {
  const { email, password } = request.body;

  const loginValidate = await newToken({ email, password });

  if (loginValidate.message) {
    return response.status(loginValidate.code).json({ message: loginValidate.message });
  }

  const token = loginValidate;

  return response.status(200).json({ token });
};

module.exports = { loginController };
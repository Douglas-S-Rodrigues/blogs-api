const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET || 'secret';

const validateLoginData = async (request, _response) => {
  const { email, password } = request;
  
  if (!email || !password) {
    return { code: 400, message: 'Some required fields are missing' };
  } 

  const userValidate = await User.findOne({ where: { email, password } });
  
  if (!userValidate) {
    return { code: 400, message: 'Invalid fields' };
  }
  return {};
};  

const authService = {
  async newToken(request) {
    const validate = await validateLoginData(request);

    if (validate.message) {
      return validate;
    } 

    const token = jwt.sign({ data: request.email }, secret);

    return token;
  },
};

module.exports = authService;
const ValidationTokenError = (message) => {
  const err = new Error(message);
  err.name = 'ValidationTokenError';
  throw err;
};

const loginValidationError = (message) => {
  const err = new Error(message);
  err.name = 'loginValidationError';
  throw err;
};

const getByEmailValidationError = (message) => {
  const err = new Error(message);
  err.name = 'getByEmailValidationError';
  throw err;
};

module.exports = {
  ValidationTokenError,
  loginValidationError,
  getByEmailValidationError,
};
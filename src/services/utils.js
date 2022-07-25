const ValidationTokenError = (message) => {
  const err = new Error(message);
  err.name = 'ValidationTokenError';
  throw err;
};

const getByEmailValidationError = (message) => {
  const err = new Error(message);
  err.name = 'getByEmailValidationError';
  throw err;
};

const registerValidationError = (message) => {
  const err = new Error(message);
  err.name = 'registerValidationError';
  throw err;
};

const userIdError = (message) => {
  const err = new Error(message);
  err.name = 'userIdError';
  throw err;
};

const userDataValidation = (message) => {
  const err = new Error(message);
  err.name = 'userDataValidation';
  throw err;
};

module.exports = {
  ValidationTokenError,
  getByEmailValidationError,
  registerValidationError,
  userDataValidation,
  userIdError,
};
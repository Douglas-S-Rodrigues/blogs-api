const errors = {
  ValidationTokenError: 401,
  getByEmailValidationError: 400,
  registerValidationError: 409,
  userDataValidation: 400,
  userIdError: 404,
  nameReqError: 400,
};
/**
 * 
 * @param {Error} err 
 * @param {important('express').Request} request 
 * @param {important('express').Response} response 
 * @param {important('express').NextFunction} next 
 */
const errorHandlerMiddleware = ({ name, message }, _request, response, _next) => {
  const status = errors[name];
  if (!status) {
    return response.sendStatus(500);
  }
  return response.status(status).json({ message });
};

module.exports = errorHandlerMiddleware;
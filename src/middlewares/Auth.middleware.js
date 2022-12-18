const jwt = require('jsonwebtoken');
const CustomError = require('../CustomError');

function AuthMiddleware(req, res, next) {
  if (!req.headers.authorization)
    throw new CustomError(CustomError.BadRequest, 'No token provided!');
  const authHeader = req.headers.authorization.split(' ')[1];
  try {
    jwt.verify(authHeader, process.env.JWT_SECRET_KEY);
  } catch (err) {
    throw new CustomError(CustomError.BadRequest, 'Invalid token!');
  }
  next();
}

module.exports = AuthMiddleware;

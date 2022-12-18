const CustomError = require('../CustomError');
const AuthService = require('../service/Auth.service');

const AuthController = {
  async register(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password)
        return next(
          new CustomError(
            CustomError.BadRequest,
            'You must provide username and password!'
          )
        );
      const user = await AuthService.register(username, password);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password)
        return next(
          new CustomError(
            CustomError.BadRequest,
            'You must provide username and password!'
          )
        );
      const user = await AuthService.login(username, password);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = AuthController;

const UserService = require('../service/User.service');
const CustomError = require('../CustomError');

const UserController = {
  async createUser(req, res, next) {
    try {
      const { username } = req.body;
      if (!username)
        return next(
          new CustomError(CustomError.BadRequest, 'You must provide username')
        );
      const user = await UserService.createUser(username);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = UserController;

const UserService = require("../service/User.service");
const CustomError = require("../CustomError");

const UserController = {
  createUser(req, res, next) {
    const { username } = req.body;
    if (!username)
      next(
        new CustomError(CustomError.BadRequest, "You must provide username")
      );
    const user = UserService.createUser(username);
    res.json(user);
  },
};

module.exports = UserController;

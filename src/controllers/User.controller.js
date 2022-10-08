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

  createCategory(req, res, next) {
    const { name } = req.body;
    const category = UserService.createCategory(name);
    res.json(category);
  },

  addRecord(req, res, next) {
    const { user_id, category_id, date, sum } = req.body;
    const record = UserService.addRecord(user_id, category_id, date, sum);
    res.json(record);
  },
};

module.exports = UserController;

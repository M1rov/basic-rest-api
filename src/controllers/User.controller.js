const UserService = require("../service/User.service");

const UserController = {
  createUser(req, res) {
    const { username } = req.body;
    const user = UserService.createUser(username);
    res.json(user);
  },
};

module.exports = UserController;

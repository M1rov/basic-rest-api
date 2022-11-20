const User = require('../db/models/User.model');

const UserService = {
  users: [],

  async createUser(username) {
    const user = { username };
    return User.create(user);
  },
};

module.exports = UserService;

const CustomError = require("../CustomError");
const UserService = {
  users: [],

  createUser(username) {
    const id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    const user = { id, username };
    this.users.push(user);
    return user;
  },

  checkUser(user_id) {
    const user = this.users.find((user) => user.id === user_id);
    if (!user) {
      throw new CustomError(
        CustomError.NotFound,
        "No user with such id was found"
      );
    }
  },
};

module.exports = UserService;

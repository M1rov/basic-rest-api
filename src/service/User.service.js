const UserService = {
  users: [],

  createUser(username) {
    const id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    const user = { id, username };
    this.users.push(user);
    return user;
  },
};

module.exports = UserService;

const UserService = {
  users: [],
  categories: [],
  records: [],

  createUser(username) {
    const id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    const user = { id, username };
    this.users.push(user);
    return user;
  },

  createCategory(name) {
    const id = this.categories.length
      ? this.categories[this.categories.length - 1].id + 1
      : 1;
    const category = { id, name };
    this.categories.push(category);
    return category;
  },

  addRecord(user_id, category_id, date, sum) {
    const id = this.records.length
      ? this.records[this.records.length - 1].id + 1
      : 1;
    const record = { id, user_id, category_id, date, sum };
    this.records.push(record);
    return record;
  },
};

module.exports = UserService;

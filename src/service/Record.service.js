const UserService = require("./User.service");
const CustomError = require("../CustomError");
const CategoryService = require("./Category.service");

const RecordService = {
  records: [],

  addRecord(user_id, category_id, date, sum) {
    UserService.checkUser(user_id);
    CategoryService.checkCategory(category_id);
    const id = this.records.length
      ? this.records[this.records.length - 1].id + 1
      : 1;
    const record = { id, user_id, category_id, date, sum };
    this.records.push(record);
    return record;
  },

  getUserRecords(user_id) {
    const user = UserService.users.find((user) => user.id === user_id);
    if (!user) {
      throw new CustomError(
        CustomError.NotFound,
        "No user with such id was found"
      );
    }
    return this.records.filter((record) => record.user_id === user_id);
  },

  getUserCategoryRecords(user_id, category_id) {
    UserService.checkUser(user_id);
    CategoryService.checkCategory(category_id);
    return this.records.filter(
      (record) =>
        record.user_id === user_id && record.category_id === category_id
    );
  },
};

module.exports = RecordService;

const CustomError = require('../CustomError');
const Record = require('../db/models/Record.model');
const User = require('../db/models/User.model');

const RecordService = {
  async addRecord(user_id, category_id, date, sum) {
    const record = { user_id, category_id, date: new Date(date), sum };
    return Record.create(record);
  },

  async getUserRecords(user_id) {
    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
      throw new CustomError(
        CustomError.NotFound,
        'No user with such id was found'
      );
    }

    return Record.findAll({ where: { user_id } });
  },

  getUserCategoryRecords(user_id, category_id) {
    return Record.findAll({ where: { user_id, category_id } });
  },
};

module.exports = RecordService;

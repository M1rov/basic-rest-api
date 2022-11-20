const CustomError = require('../CustomError');
const Record = require('../db/models/Record.model');
const User = require('../db/models/User.model');
const Wallet = require('../db/models/Wallet.model');

const RecordService = {
  async addRecord(user_id, category_id, date, sum) {
    try {
      const record = { user_id, category_id, date: new Date(date), sum };
      const wallet = await Wallet.findOne({ where: { user_id } });
      if (+sum > +wallet.amount)
        return new CustomError(
          CustomError.BadRequest,
          'Not enough amount on the wallet!'
        );
      await Wallet.update(
        { amount: +wallet.amount - +sum },
        { where: { user_id } }
      );
      return Record.create(record);
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },

  async getUserRecords(user_id) {
    try {
      const user = await User.findOne({ where: { id: user_id } });

      if (!user) {
        throw new CustomError(
          CustomError.NotFound,
          'No user with such id was found'
        );
      }

      return Record.findAll({ where: { user_id } });
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },

  getUserCategoryRecords(user_id, category_id) {
    try {
      return Record.findAll({ where: { user_id, category_id } });
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },
};

module.exports = RecordService;

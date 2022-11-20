const RecordService = require('../service/Record.service');
const CustomError = require('../CustomError');

const RecordController = {
  async addRecord(req, res, next) {
    try {
      const { user_id, category_id, date, sum } = req.body;
      if (!(user_id && category_id && date && sum)) {
        return next(
          new CustomError(CustomError.BadRequest, 'Wrong parameters provided')
        );
      }
      const record = await RecordService.addRecord(
        user_id,
        category_id,
        date,
        sum
      );
      res.json(record);
    } catch (err) {
      next(err);
    }
  },

  async getUserRecords(req, res, next) {
    try {
      const { user_id } = req.params;
      if (!user_id) {
        return next(
          new CustomError(CustomError.BadRequest),
          'You must provide "user_id"'
        );
      }
      const records = await RecordService.getUserRecords(+user_id);
      res.json(records);
    } catch (err) {
      next(err);
    }
  },

  async getUserCategoryRecords(req, res, next) {
    try {
      const { user_id, category_id } = req.params;
      if (!(user_id && category_id)) {
        return next(
          new CustomError(CustomError.BadRequest),
          'You must provide "user_id" and "category_id"'
        );
      }
      const records = await RecordService.getUserCategoryRecords(
        +user_id,
        +category_id
      );
      res.json(records);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = RecordController;

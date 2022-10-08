const RecordService = require("../service/Record.service");
const CustomError = require("../CustomError");

const RecordController = {
  addRecord(req, res, next) {
    const { user_id, category_id, date, sum } = req.body;
    if (!(user_id && category_id && date && sum)) {
      return next(
        new CustomError(CustomError.BadRequest, "Wrong parameters provided")
      );
    }
    const record = RecordService.addRecord(user_id, category_id, date, sum);
    res.json(record);
  },

  getUserRecords(req, res, next) {
    const { user_id } = req.params;
    if (!user_id) {
      return next(
        new CustomError(CustomError.BadRequest),
        'You must provide "user_id"'
      );
    }
    res.json(RecordService.getUserRecords(+user_id));
  },

  getUserCategoryRecords(req, res, next) {
    const { user_id, category_id } = req.params;
    if (!(user_id && category_id)) {
      return next(
        new CustomError(CustomError.BadRequest),
        'You must provide "user_id" and "category_id"'
      );
    }
    res.json(RecordService.getUserCategoryRecords(+user_id, +category_id));
  },
};

module.exports = RecordController;

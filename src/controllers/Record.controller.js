const RecordService = require("../service/Record.service");
const CustomError = require("../CustomError");

const RecordController = {
  addRecord(req, res, next) {
    const { user_id, category_id, date, sum } = req.body;
    if (!(user_id || category_id || date || sum)) {
      next(
        new CustomError(CustomError.BadRequest, "Wrong parameters provided")
      );
    }
    const record = RecordService.addRecord(user_id, category_id, date, sum);
    res.json(record);
  },

  getRecords(req, res, next) {
    res.json(RecordService.getRecords());
  },
};

module.exports = RecordController;

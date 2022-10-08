const RecordService = {
  records: [],

  addRecord(user_id, category_id, date, sum) {
    const id = this.records.length
      ? this.records[this.records.length - 1].id + 1
      : 1;
    const record = { id, user_id, category_id, date, sum };
    this.records.push(record);
    return record;
  },

  getRecords() {
    return this.records;
  },
};

module.exports = RecordService;

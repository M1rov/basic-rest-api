const { DataTypes } = require('sequelize');
const database = require('../index');
const User = require('./User.model');
const Category = require('./Category.model');

const Record = database.connection.define('Record', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
  date: {
    type: DataTypes.DATE,
  },
  sum: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Record;

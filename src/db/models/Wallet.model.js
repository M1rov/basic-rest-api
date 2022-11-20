const { DataTypes } = require('sequelize');
const database = require('../index');
const User = require('./User.model');

const Wallet = database.connection.define('Wallet', {
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
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Wallet;

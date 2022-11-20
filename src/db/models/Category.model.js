const { DataTypes } = require('sequelize');
const database = require('../index');

const Category = database.connection.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Category;

const { Sequelize } = require('sequelize');

class database {
  static sequelize = new Sequelize('sqlite::memory:');

  static async connect() {
    try {
      await database.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

module.exports = database;

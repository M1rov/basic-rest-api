const User = require('../db/models/User.model');
const Wallet = require('../db/models/Wallet.model');
const CustomError = require('../CustomError');

const UserService = {
  users: [],

  async createUser(username) {
    try {
      const user = { username, password: '' };
      const createdUser = await User.create(user);
      await Wallet.create({ user_id: createdUser.id });
      return createdUser;
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },

  async grantUser(user_id, amount) {
    try {
      const wallet = await Wallet.findOne({ where: { user_id } });
      await Wallet.update(
        { amount: +wallet.amount + +amount },
        { where: { user_id } }
      );
      return await Wallet.findOne({ where: { user_id } });
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },
};

module.exports = UserService;

const User = require('../db/models/User.model');
const Wallet = require('../db/models/Wallet.model');
const CustomError = require('../CustomError');
const jwt = require('jsonwebtoken');
const { hashPassword, verifyPassword } = require('../utils/hash');

const AuthService = {
  async register(username, password) {
    try {
      const user = { username, password: hashPassword(password) };
      const createdUser = await User.create(user);
      await Wallet.create({ user_id: createdUser.id });
      const token = jwt.sign(
        { username, user_id: createdUser.id },
        process.env.JWT_SECRET_KEY
      );
      return { ...createdUser.dataValues, token };
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },

  async login(username, password) {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) throw new Error('There is no user with such username!');
      if (!verifyPassword(password, user.password))
        throw new Error('Wrong password!');
      return {
        token: jwt.sign(
          { username, user_id: user.id },
          process.env.JWT_SECRET_KEY
        ),
      };
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },
};

module.exports = AuthService;

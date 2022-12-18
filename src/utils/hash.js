const bcrypt = require('bcrypt');
const SALT = 10;

const hashPassword = (password) => bcrypt.hashSync(password, SALT);
const verifyPassword = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);

module.exports = { hashPassword, verifyPassword };

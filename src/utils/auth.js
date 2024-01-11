const jwt = require('jsonwebtoken');
const { env } = require('../config');
const { genSalt, hash, compare } = require('bcryptjs');

exports.auth = {
  encryptPassword: async (password) => {
    const salt = await genSalt(10);
    return await hash(password, salt);
  },
  comparePassword: async (password, receivedPassword) => {
    return await compare(password, receivedPassword);
  },
  generateJWT: (id) => {
    const token = jwt.sign({ id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION });
    return token;
  }
};

const jwt = require('jsonwebtoken');
const { env } = require('../config');

const { handler } = require('../utils');

exports.verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) throw new Error('No tienes autorización');

    const decodedToken = jwt.verify(token, env.JWT_SECRET);

    req.userId = decodedToken.id;

    next();
  } catch (e) {
    handler.unauthorized(res, e);
  }
};

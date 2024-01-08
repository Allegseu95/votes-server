const { verifyToken } = require('./auth.middleware')
const { notFound } = require('./not-found.middleware')
const { validate } = require('./validate.middleware')

module.exports = {
  notFound,
  validate,
  verifyToken
}

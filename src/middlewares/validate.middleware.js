const Joi = require('joi')
const { handler, pick } = require('../utils')

exports.validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body'])
  const object = pick(req, Object.keys(validSchema))

  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object)

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ').replace(/"(\w+)"/g, '[$1]')
    return handler.error(res, { message: errorMessage })
  }

  Object.assign(req, value)
  return next()
}

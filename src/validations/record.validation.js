const Joi = require('joi');

const params = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      'any.required': 'El id del acta es un campo obligatorio',
      'number.base': 'El id del acta debe ser un número'
    }),
    state: Joi.string().required().messages({
      'string.empty': 'El estado no debe estar vacío',
      'any.required': 'El estado es un campo obligatorio'
    })
  })
};

module.exports = {
  recordValidation: {
    params
  }
};

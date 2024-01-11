const Joi = require('joi');

const paramsUserId = {
  params: Joi.object().keys({
    userId: Joi.number().required().messages({
      'any.required': 'El id del usuario es un campo obligatorio',
      'number.base': 'El id del usuario debe ser un número'
    })
  })
};

const bodyUser = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      'string.empty': 'El nombre no debe estar vacío',
      'any.required': 'El nombre es un campo obligatorio'
    }),
    lastname: Joi.string().required().messages({
      'string.empty': 'El apellido no debe estar vacío',
      'any.required': 'El apellido es un campo obligatorio'
    }),
    ci: Joi.string().required().messages({
      'string.empty': 'El número de cédula no debe estar vacío',
      'any.required': 'El número de cédula es un campo obligatorio'
    }),
    gender: Joi.string().optional().allow('')
  })
};

module.exports = {
  userValidation: {
    bodyUser,
    paramsUserId
  }
};

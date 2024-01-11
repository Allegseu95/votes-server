const Joi = require('joi');

const paramsId = {
  params: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'El id de la solicitud es un campo obligatorio',
      'string.empty': 'El id de la solicitud no debe estar vacío'
    })
  })
};

const bodyUserData = {
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
    email: Joi.string().email().required().messages({
      'string.email': 'El formato del correo electrónico no es válido',
      'string.empty': 'El correo electrónico no debe estar vacío',
      'any.required': 'El correo electrónico es un campo obligatorio'
    }),
    gender: Joi.string().optional().allow('')
  })
};

module.exports = {
  requestValidation: {
    paramsId,
    bodyUserData
  }
};

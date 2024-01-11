const Joi = require('joi');

const bodyLoginData = {
  body: Joi.object().keys({
    password: Joi.string().required().messages({
      'string.empty': 'La Contraseña no debe estar vacío',
      'any.required': 'La Contraseña es un campo obligatorio'
    }),
    email: Joi.string().email().required().messages({
      'string.email': 'El formato del correo electrónico no es válido',
      'string.empty': 'El correo electrónico no debe estar vacío',
      'any.required': 'El correo electrónico es un campo obligatorio'
    })
  })
};

const bodyAdminData = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      'string.empty': 'El nombre no debe estar vacío',
      'any.required': 'El nombre es un campo obligatorio'
    }),
    password: Joi.string().required().messages({
      'string.empty': 'La Contraseña no debe estar vacío',
      'any.required': 'La Contraseña es un campo obligatorio'
    }),
    email: Joi.string().email().required().messages({
      'string.email': 'El formato del correo electrónico no es válido',
      'string.empty': 'El correo electrónico no debe estar vacío',
      'any.required': 'El correo electrónico es un campo obligatorio'
    })
  })
};

module.exports = {
  adminValidation: {
    bodyLoginData,
    bodyAdminData
  }
};

const Joi = require('joi');

const paramsId = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      'any.required': 'El id de la JRV es un campo obligatorio',
      'number.base': 'El id de la JRV debe ser un número'
    })
  })
};

const bodyJrv = {
  body: Joi.object().keys({
    number: Joi.number().required().messages({
      'any.required': 'El número de JRV es un campo obligatorio',
      'number.base': 'El número de JRV debe ser un número'
    }),
    gender: Joi.string().required().messages({
      'string.empty': 'El genero no debe estar vacío',
      'any.required': 'El genero es un campo obligatorio'
    }),
    address: Joi.string().optional().allow(''),
    place: Joi.string().required().messages({
      'string.empty': 'El recinto no debe estar vacío',
      'any.required': 'El recinto es un campo obligatorio'
    }),
    zone: Joi.string().optional().allow(''),
    parish: Joi.string().required().messages({
      'string.empty': 'La parroquia no debe estar vacía',
      'any.required': 'La parroquia es un campo obligatorio'
    }),
    typeParish: Joi.string().required().messages({
      'string.empty': 'El tipo de parroquia no debe estar vacío',
      'any.required': 'El tipo de parroquia es un campo obligatorio'
    }),
    canton: Joi.string().required().messages({
      'string.empty': 'El cantón no debe estar vacío',
      'any.required': 'El cantón es un campo obligatorio'
    }),
    district: Joi.string().optional().allow(''),
    province: Joi.string().required().messages({
      'string.empty': 'La provincia no debe estar vacía',
      'any.required': 'La provincia es un campo obligatorio'
    }),
    number_of_voters: Joi.number().required().messages({
      'any.required': 'La cantidad de votantes es un campo obligatorio',
      'number.base': 'La cantidad de votantes debe ser un número'
    }),
    userId: Joi.number().required().messages({
      'any.required': 'El id del observador es un campo obligatorio',
      'number.base': 'El id del observador debe ser un número'
    }),
    ballotsId: Joi.array().items(Joi.number()).required().messages({
      'array.base': 'La lista de papeletas debe ser un arreglo.',
      'array.empty': 'La lista de papeletas no puede estar vacía.',
      'any.required': 'La lista de papeletas es obligatoria.',
      'number.base': 'Cada ID de papeleta ddebe ser un número.'
    })
  })
};

module.exports = {
  jrvValidation: {
    paramsId,
    bodyJrv
  }
};

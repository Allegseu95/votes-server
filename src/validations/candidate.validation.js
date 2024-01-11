const Joi = require('joi');

const paramsId = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      'any.required': 'El id del candidato es un campo obligatorio',
      'number.base': 'El id del candidato debe ser un número'
    })
  })
};

const bodyCandidate = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      'string.empty': 'El nombre no debe estar vacío',
      'any.required': 'El nombre es un campo obligatorio'
    }),
    lastname: Joi.string().required().messages({
      'string.empty': 'El apellido no debe estar vacío',
      'any.required': 'El apellido es un campo obligatorio'
    }),
    gender: Joi.string().optional().allow(''),
    birthdate: Joi.date().optional().allow(null, '').messages({
      'date.base': 'La fecha de nacimiento debe ser una fecha válida'
    }),
    organization: Joi.string().required().messages({
      'string.empty': 'La Organización Politica no debe estar vacía',
      'any.required': 'La Organización Politica es un campo obligatorio'
    }),
    photo: Joi.string().required().messages({
      'string.empty': 'La imagen no debe estar vacía',
      'any.required': 'La imagen es un campo obligatorio'
    }),
    ballotId: Joi.number().required().messages({
      'any.required': 'El id de la papeleta es un campo obligatorio',
      'number.base': 'El id de la papeleta debe ser un número'
    })
  })
};

module.exports = {
  candidateValidation: {
    paramsId,
    bodyCandidate
  }
};

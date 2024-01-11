const Joi = require('joi');

const paramsId = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      'any.required': 'El id de la papeleta es un campo obligatorio',
      'number.base': 'El id de la papeleta debe ser un número'
    })
  })
};

const bodyBallot = {
  body: Joi.object().keys({
    dignity: Joi.string().required().messages({
      'string.empty': 'La dignidad no debe estar vacía',
      'any.required': 'La dignidad es un campo obligatorio'
    }),
    election_date: Joi.date().required().messages({
      'any.required': 'La fecha de elección es un campo obligatorio',
      'date.base': 'La fecha de elección debe ser una fecha válida'
    })
  })
};

module.exports = {
  ballotValidation: {
    paramsId,
    bodyBallot
  }
};

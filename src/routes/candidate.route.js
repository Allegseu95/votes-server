const { Router } = require('express');
const { verifyToken, validate } = require('../middlewares');
const { candidateValidation } = require('../validations');
const { candidateController } = require('../controllers');

const router = Router();

router.get('/', verifyToken, candidateController.getAllCandidates);

router.post(
  '/',
  verifyToken,
  validate(candidateValidation.bodyCandidate),
  candidateController.createCandidate
);

router.put(
  '/:id',
  verifyToken,
  validate(candidateValidation.paramsId),
  validate(candidateValidation.bodyCandidate),
  candidateController.updateCandidate
);

router.delete(
  '/:id',
  verifyToken,
  validate(candidateValidation.paramsId),
  candidateController.deleteCandidate
);

module.exports = router;

const { Router } = require('express');
const { verifyToken, validate } = require('../middlewares');
const { jrvValidation } = require('../validations');
const { jrvController } = require('../controllers');

const router = Router();

router.get('/', verifyToken, jrvController.getAllJrvs);

router.post('/', verifyToken, validate(jrvValidation.bodyJrv), jrvController.createJrv);

router.put(
  '/:id',
  verifyToken,
  validate(jrvValidation.paramsId),
  validate(jrvValidation.bodyJrv),
  jrvController.updateJrv
);

router.delete('/:id', verifyToken, validate(jrvValidation.paramsId), jrvController.deleteJrv);

module.exports = router;

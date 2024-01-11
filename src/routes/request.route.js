const { Router } = require('express');
const { verifyToken, validate } = require('../middlewares');
const { requestValidation } = require('../validations');
const { requestController } = require('../controllers');

const router = Router();

router.get('/', verifyToken, requestController.getAllRequests);

router.put(
  '/:id',
  verifyToken,
  validate(requestValidation.paramsId),
  validate(requestValidation.bodyUserData),
  requestController.approveRequest
);

router.delete(
  '/:id',
  verifyToken,
  validate(requestValidation.paramsId),
  requestController.deleteRequest
);

module.exports = router;

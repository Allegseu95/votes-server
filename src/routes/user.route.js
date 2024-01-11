const { Router } = require('express');
const { verifyToken, validate } = require('../middlewares');
const { userValidation } = require('../validations');
const { userController } = require('../controllers');

const router = Router();

router.get('/', verifyToken, userController.getAllUsers);

router.put(
  '/:userId',
  verifyToken,
  validate(userValidation.paramsUserId),
  validate(userValidation.bodyUser),
  userController.updateUser
);

module.exports = router;

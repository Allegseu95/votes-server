const { Router } = require('express');
const { validate } = require('../middlewares');
const { adminValidation } = require('../validations');
const { adminController } = require('../controllers');

const router = Router();

router.post('/login', validate(adminValidation.bodyLoginData), adminController.login);

router.post('/register', validate(adminValidation.bodyAdminData), adminController.register);

module.exports = router;

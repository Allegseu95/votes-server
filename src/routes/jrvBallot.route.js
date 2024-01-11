const { Router } = require('express');
const { verifyToken } = require('../middlewares');
const { jrvBallotController } = require('../controllers');

const router = Router();

router.get('/', verifyToken, jrvBallotController.getAll);

module.exports = router;

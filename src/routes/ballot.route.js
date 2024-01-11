const { Router } = require('express');
const { verifyToken, validate } = require('../middlewares');
const { ballotValidation } = require('../validations');
const { ballotController } = require('../controllers');

const router = Router();

router.get('/', verifyToken, ballotController.getAllBallots);

router.post('/', verifyToken, validate(ballotValidation.bodyBallot), ballotController.createBallot);

router.put(
  '/:id',
  verifyToken,
  validate(ballotValidation.paramsId),
  validate(ballotValidation.bodyBallot),
  ballotController.updateBallot
);

router.delete(
  '/:id',
  verifyToken,
  validate(ballotValidation.paramsId),
  ballotController.deleteBallot
);

module.exports = router;

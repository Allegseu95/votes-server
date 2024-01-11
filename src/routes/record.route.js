const { Router } = require('express');
const { verifyToken, validate } = require('../middlewares');
const { recordValidation } = require('../validations');
const { recordController } = require('../controllers');

const router = Router();

router.get('/pendings', verifyToken, recordController.getPendingRecords);

router.get('/approves', verifyToken, recordController.getApproveRecords);

router.get(
  '/update/:id/:state',
  verifyToken,
  validate(recordValidation.params),
  recordController.updateRecord
);

module.exports = router;

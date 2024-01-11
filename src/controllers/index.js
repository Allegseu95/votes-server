const { requestController } = require('./request.controller');
const { userController } = require('./user.controller');
const { ballotController } = require('./ballot.controller');
const { candidateController } = require('./candidate.controller');
const { jrvController } = require('./jrv.controller');
const { jrvBallotController } = require('./jrvBallot.controller');
const { adminController } = require('./admin.controller');
const { recordController } = require('./record.controller');

module.exports = {
  requestController,
  userController,
  ballotController,
  candidateController,
  jrvController,
  jrvBallotController,
  adminController,
  recordController
};

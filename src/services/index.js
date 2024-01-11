const { requestService } = require('./request.service');
const { userService } = require('./user.service');
const { ballotService } = require('./ballot.service');
const { candidateService } = require('./candidate.service');
const { jrvService } = require('./jrv.service');
const { jrvBallotService } = require('./jrvBallot.service');
const { adminService } = require('./admin.service');
const { recordService } = require('./record.service');

module.exports = {
  requestService,
  userService,
  ballotService,
  candidateService,
  jrvService,
  jrvBallotService,
  adminService,
  recordService
};

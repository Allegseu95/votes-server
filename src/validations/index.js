const { requestValidation } = require('./request.validation');
const { userValidation } = require('./user.validation');
const { ballotValidation } = require('./ballot.validation');
const { candidateValidation } = require('./candidate.validation');
const { jrvValidation } = require('./jrv.validation');
const { adminValidation } = require('./admin.validation');
const { recordValidation } = require('./record.validation');

module.exports = {
  requestValidation,
  userValidation,
  ballotValidation,
  candidateValidation,
  jrvValidation,
  adminValidation,
  recordValidation
};

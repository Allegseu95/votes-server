const { jrvBallotService } = require('../services');
const { handler } = require('../utils');

const getAll = async (req, res) => {
  try {
    const data = await jrvBallotService.getAll();
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  jrvBallotController: {
    getAll
  }
};

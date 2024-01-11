const { ballotService } = require('../services');
const { handler } = require('../utils');

const getAllBallots = async (req, res) => {
  try {
    const data = await ballotService.getAllBallots();
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const createBallot = async (req, res) => {
  try {
    const data = await ballotService.createBallot(req.body);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const updateBallot = async (req, res) => {
  try {
    const data = await ballotService.updateBallot(req.body, req.params.id);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const deleteBallot = async (req, res) => {
  try {
    const data = await ballotService.deleteBallot(req.params.id);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  ballotController: {
    getAllBallots,
    createBallot,
    updateBallot,
    deleteBallot
  }
};

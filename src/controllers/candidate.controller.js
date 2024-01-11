const { candidateService } = require('../services');
const { handler } = require('../utils');

const getAllCandidates = async (req, res) => {
  try {
    const data = await candidateService.getAllCandidates();
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const createCandidate = async (req, res) => {
  try {
    const data = await candidateService.createCandidate(req.body);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const updateCandidate = async (req, res) => {
  try {
    const data = await candidateService.updateCandidate(req.body, req.params.id);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const deleteCandidate = async (req, res) => {
  try {
    const data = await candidateService.deleteCandidate(req.params.id);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  candidateController: {
    getAllCandidates,
    createCandidate,
    updateCandidate,
    deleteCandidate
  }
};

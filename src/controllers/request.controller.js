const { requestService } = require('../services');
const { handler } = require('../utils');

const getAllRequests = async (req, res) => {
  try {
    const data = await requestService.getAllRequests();
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const approveRequest = async (req, res) => {
  try {
    const data = await requestService.approveRequest(req.params.id, req.body);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const deleteRequest = async (req, res) => {
  try {
    const data = await requestService.deleteRequest(req.params.id);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  requestController: {
    getAllRequests,
    approveRequest,
    deleteRequest
  }
};

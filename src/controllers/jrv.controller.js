const { jrvService } = require('../services');
const { handler } = require('../utils');

const getAllJrvs = async (req, res) => {
  try {
    const data = await jrvService.getAllJrvs();
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const createJrv = async (req, res) => {
  try {
    const data = await jrvService.createJrv(req.body);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const updateJrv = async (req, res) => {
  try {
    const data = await jrvService.updateJrv(req.body, req.params.id);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const deleteJrv = async (req, res) => {
  try {
    const data = await jrvService.deleteJrv(req.params.id);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  jrvController: {
    getAllJrvs,
    createJrv,
    updateJrv,
    deleteJrv
  }
};

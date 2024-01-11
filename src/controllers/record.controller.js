const { recordService } = require('../services');
const { handler } = require('../utils');

const getPendingRecords = async (req, res) => {
  try {
    const data = await recordService.getPendingRecords();
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const getApproveRecords = async (req, res) => {
  try {
    const data = await recordService.getApproveRecords();
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const updateRecord = async (req, res) => {
  try {
    const data = await recordService.updateRecord(req.params.id, req.params.state);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  recordController: {
    getPendingRecords,
    getApproveRecords,
    updateRecord
  }
};

const { adminService } = require('../services');
const { handler } = require('../utils');

const login = async (req, res) => {
  try {
    const data = await adminService.login(req.body);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

const register = async (req, res) => {
  try {
    const data = await adminService.register(req.body);
    handler.success(res, data);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  adminController: {
    login,
    register
  }
};

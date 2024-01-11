const { userService } = require('../services');
const { handler } = require('../utils');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    handler.success(res, users);
  } catch (e) {
    handler.error(res, e);
  }
};

const updateUser = async (req, res) => {
  try {
    const userUpdated = await userService.updateUser(req.params.userId, req.body);
    handler.success(res, userUpdated);
  } catch (e) {
    handler.error(res, e);
  }
};

module.exports = {
  userController: {
    getAllUsers,
    updateUser
  }
};

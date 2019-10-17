const getById = require('./getById');
const createUser = require('./createUser');
const deleteUser = require('./deleteUser');
const findAllUsers = require('./findAllUsers');
const updateUserByParams = require('./updateUserByParams');
const findUserLogin = require('./findUserLogin');

module.exports = {
  getById,
  createUser,
  updateUserByParams,
  deleteUser,
  findAllUsers,
  findUserLogin,
};

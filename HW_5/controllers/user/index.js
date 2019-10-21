const findAllUsers = require('./findAllUsers');
const getById = require('./getById');
const createUser = require('./createUser');
const loginUser = require('./loginUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const getUserWHouseById = require('./getUserWHouseById');


module.exports = {
  findAllUsers,
  getById,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserWHouseById,
};

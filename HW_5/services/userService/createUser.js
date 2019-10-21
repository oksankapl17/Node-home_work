const dataBase = require('../../dataBase').getInstance();

module.exports = async (userToCreate) => {
  const UserModel = dataBase.getModel('User');

  return UserModel.create(userToCreate);
};

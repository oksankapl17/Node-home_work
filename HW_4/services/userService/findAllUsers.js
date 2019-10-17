const dataBase = require('../../dataBase').getInstance();

module.exports = async () => {
  const UserModel = dataBase.getModel('User');
  await UserModel.findAll();
};

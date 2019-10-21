const dataBase = require('../../dataBase').getInstance();

module.exports = async (email, password) => {
  const UserModel = dataBase.getModel('User');
  const userExist = await UserModel.findOne({ where: { email, password } });

  return userExist;
};

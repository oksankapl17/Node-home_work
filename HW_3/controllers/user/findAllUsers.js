const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
    const UserModel = dataBase.getModel('User');
    const users = await UserModel.findAll();

    res.json(users);
  } catch (e) {
    res.end('Error with AllUsers');
  }
};

const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
    const userToCreate = req.body;
    const UserModel = dataBase.getModel('User');

    await UserModel.create(userToCreate);
    return res.render('register');
  } catch (e) {
    return res.json(e.message);
  }
};

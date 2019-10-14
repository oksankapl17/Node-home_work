const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
    const userToUpdate = req.body;
    const UserModel = dataBase.getModel('User');
    const { id } = req.params;

    await UserModel.update(userToUpdate, { where: { id } });

    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};

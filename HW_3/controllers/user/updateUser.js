const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
    const userToUpdate = req.body;
    const UserModel = dataBase.getModel('User');
    await UserModel.update(userToUpdate, { where: { id: req.params.id } });

    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};

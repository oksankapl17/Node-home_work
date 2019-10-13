const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const UserModel = dataBase.getModel('User');
    const isUserPresent = await UserModel.findByPk(id);

    if (!isUserPresent) {
      throw new Error(`User with ${id} is not present`);
    }
    req.user = isUserPresent;
    next();
  } catch (e) {
    res.json(e.message);
  }
};

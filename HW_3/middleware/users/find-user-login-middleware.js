const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const UserModel = dataBase.getModel('User');
    const userExist = await UserModel.findOne({ where: { email, password } });

    if (!userExist) {
      throw new Error('Password or email is invalid');
    }

    req.user = userExist;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};

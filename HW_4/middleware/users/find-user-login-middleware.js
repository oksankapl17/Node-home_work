const { userService } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await userService.findUserLogin(email, password);

    if (!userExist) {
      throw new Error('Password or email is invalid');
    }

    req.user = userExist;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};

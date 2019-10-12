const {userValidator} = require('../../validators');

module.exports = (req, res, next) => {
  try {
    const user = req.body;
    userValidator.newUserValidator(user);
    next();

  } catch (e) {
    res.status(404).json(e.message);
  }
};
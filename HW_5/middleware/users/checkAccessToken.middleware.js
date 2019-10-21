const { tokenVerificator } = require('../../helpers');

module.exports = (req, res, next) => {
  const token = req.get('Authorization');

  if (!token) {
    next(new Error('Empty token'));
  }

  const userFromToken = tokenVerificator(token);

  req.user = userFromToken;
  next();
};

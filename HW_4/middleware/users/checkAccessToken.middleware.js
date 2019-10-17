const { tokenVerificator } = require('../../helpers');

module.exports = (req, res, next) => {
  const token = req.get('Authorization');

  if (!token) {
    next(new Error('Empty token'));
  }
  try {
    const userFromToken = tokenVerificator(token);
    req.user = userFromToken;
    next();
  } catch (e) {
    return res.json(e.message);
  }
};

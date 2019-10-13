const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const query = `SELECT * FROM user WHERE id = ${id}`;
    const [isUserPresent] = await provider.promise().query(query);

    if (!isUserPresent.length) {
      throw new Error(`User with ${id} is not present`);
    }

    req.user = isUserPresent;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};

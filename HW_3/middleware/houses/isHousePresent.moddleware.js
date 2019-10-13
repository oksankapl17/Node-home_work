const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const query = `SELECT * FROM house WHERE id = ${id}`;
    const [isHousePresent] = await provider.promise().query(query);

    if (!isHousePresent.length) {
      throw new Error(`House with ${id} is not present`);
    }

    req.house = isHousePresent;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};

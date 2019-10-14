const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const houseModel = dataBase.getModel('House');

    const isHousePresent = await houseModel.findByPk(id);

    if (!isHousePresent) {
      throw new Error(`House with ${id} is not present`);
    }

    req.house = isHousePresent;
    next();
  } catch (e) {
    res.json(e.message);
  }
};

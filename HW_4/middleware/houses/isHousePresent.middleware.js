const { houseService } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const isHousePresent = await houseService.findByPk(id);

    if (!isHousePresent) {
      throw new Error(`House with ${id} is not present`);
    }

    req.house = isHousePresent;
    next();
  } catch (e) {
    res.json(e.message);
  }
};

const { houseService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const houses = await houseService.findAllHouses();

    res.json(houses);
  } catch (e) {
    return res.json(e.message);
  }
};

const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
    const houseModel = dataBase.getModel('House');
    const houses = await houseModel.findAll();

    res.json(houses);
  } catch (e) {
    res.end('Error with AllHouses');
  }
};

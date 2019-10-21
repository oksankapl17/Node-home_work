const dataBase = require('../../dataBase').getInstance();

module.exports = async (id) => {
  const houseModel = dataBase.getModel('House');

  const house = await houseModel.findByPk(id);

  return house && house.dataValues;
};

const dataBase = require('../../dataBase').getInstance();

module.exports = async (houseToCreate) => {
  const HouseModel = dataBase.getModel('House');

  return HouseModel.create(houseToCreate);
};

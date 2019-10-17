const dataBase = require('../../dataBase').getInstance();

module.exports = async () => {
  const HouseModel = dataBase.getModel('House');
  await HouseModel.findAll();
};

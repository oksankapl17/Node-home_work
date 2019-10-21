const dataBase = require('../../dataBase').getInstance();
const getById = require('./getById');

module.exports = async (id) => {
  const HouseModel = await dataBase.getModel('House');

  const houses = await HouseModel.findAll({
    where: {
      user_id: id,
    },
  });
  const user = await getById(id);

  user.houses = houses;

  return user;
};

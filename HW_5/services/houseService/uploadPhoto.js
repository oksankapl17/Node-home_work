const dataBase = require('../../dataBase').getInstance();

module.exports = async (photo) => {
  const HousePhotoModel = dataBase.getModel('HousePhoto');

  await HousePhotoModel.create(photo);
};

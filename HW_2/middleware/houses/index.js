const checkHouseValidityMiddleware = require ('./checkHouseValidity.middleware');
const isHousePresentMiddleware = require ('./isHousePresent.moddleware');
const findHouseLoginMiddleware = require ('./findHouseLogin.middleware');

module.exports = {
  checkHouseValidityMiddleware,
  isHousePresentMiddleware,
  findHouseLoginMiddleware
};
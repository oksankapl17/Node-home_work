const {houseValidator} = require('../../validators');

module.exports = (req, res, next) => {
  try {
    const house = req.body;

    houseValidator.newHouseValidator(house);

    next()
  } catch (e) {
    res.status(404).json(e.message);
  }
};
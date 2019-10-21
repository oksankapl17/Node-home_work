const { houseService } = require('../../services');
const { compareIdValidator } = require('../../validator');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await houseService.isHousePresent(id);

    if (!house) {
      return res.status(404).end('House not found');
    }

    const { user_id } = house;
    const { id: userFromToken } = req.user;

    compareIdValidator(user_id, userFromToken);

    await houseService.deleteHouse(id);

    return res.json('Ok');
  } catch (e) {
    return res.json(e.message);
  }
};

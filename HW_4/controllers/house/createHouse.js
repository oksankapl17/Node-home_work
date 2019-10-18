const { houseService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const houseToCreate = req.body;
    const { id } = req.user;
    houseToCreate.user_id = id;

    await houseService.createHouse(houseToCreate);

    res.json('house good');
  } catch (e) {
    res.json(e.message);
  }
};

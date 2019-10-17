const { houseService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const patchHouseObject = req.body;
    const { id } = req.params;

    await houseService.updateHouse({ id }, patchHouseObject);

    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};

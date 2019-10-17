const { houseService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    await houseService.deleteHouse(id);

    return res.json('Ok');
  } catch (e) {
    return res.json(e.message);
  }
};

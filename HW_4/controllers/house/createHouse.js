const { houseService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const houseToCreate = req.body;

    await houseService.createHouse(houseToCreate);

    return res.render('house');
  } catch (e) {
    return res.json(e.message);
  }
};

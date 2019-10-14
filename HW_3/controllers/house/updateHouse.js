const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
    const houseToUpdate = req.body;
    const houseModel = dataBase.getModel('House');
    const { id } = req.params;

    await houseModel.update(houseToUpdate, { where: { id } });

    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};

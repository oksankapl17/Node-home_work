const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
    const houseToCreate = req.body;
    const houseModel = dataBase.getModel('House');

    await houseModel.create(houseToCreate);

    return res.render('house');
  } catch (e) {
    return res.json(e.message);
  }
};

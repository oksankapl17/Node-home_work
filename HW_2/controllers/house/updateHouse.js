const {provider} = require('../../database');

module.exports = async (req, res) => {
  try {
    const house = req.body;
    const query = `UPDATE house SET city = '${house.city}', square = '${house.square}', price = '${house.price}' WHERE id = ${req.params.id}`;

    await provider.promise().query(query);
    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};
const {provider} = require('../../dataBase');

module.exports = async (req, res) => {

  try {
  const {city, square, price} = req.body;
  const query = `INSERT INTO house (city, square, price) VALUE ('${city}','${square}','${price}')`;

    await provider.promise().query(query);
  } catch (e) {
    throw new Error('Error CreateHouse');
  }
  return res.render('house');

};
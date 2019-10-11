const { provider } = require('../../database');

module.exports = async (req, res ,next) => {

  try {
    const {city, square, price} = req.body;
    const query = `SELECT * FROM house WHERE city = '${city}' and square = '${square}' and price = '${price}'`;

    const [HouseLogin] = await provider.promise().query(query);

    if (!HouseLogin.length) {
      throw new Error('House Login Error')
    }

    req.house = HouseLogin;
    next();
  } catch (e) {
    res.status(400).json(e.message)
  }
};
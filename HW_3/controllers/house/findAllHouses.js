const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
  try {
    const allHouses = 'SELECT * FROM house';
    const newVar = await provider.promise().query(allHouses);

    res.json(newVar);
  } catch (e) {
    res.end('Error with AllUsers');
  }
};

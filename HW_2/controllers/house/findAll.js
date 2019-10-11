const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
  const house = req.body;

  const allHouses =  'SELECT * FROM house';

  try {
    const newVar = await provider.promise().query(allHouses);
    res.json(newVar);
  } catch (e) {
    res.end('Error with AllUsers');
  }

};

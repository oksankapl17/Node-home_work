const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
  const user = req.body;

  const allUsers =  'SELECT * FROM user';

  try {
    const newVar = await provider.promise().query(allUsers);
    res.json(newVar);
  } catch (e) {
    res.end('Error whith AllUsers');
  }

};

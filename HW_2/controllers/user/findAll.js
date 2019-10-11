const {provider} = require('../../dataBase');

  module.exports = async (req, res) => {

  try {
    const allUsers =  'SELECT * FROM user';
    const newVar = await provider.promise().query(allUsers);
    res.json(newVar);
  } catch (e) {
    res.end('Error with AllUsers');
  }

};

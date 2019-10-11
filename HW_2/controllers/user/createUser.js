const {provider} = require('../../dataBase');

module.exports = async (req, res) => {

  const {name, email, password} = req.body;
  const query = `INSERT INTO user (name, email, password) VALUE ('${name}','${email}','${password}')`;
  try {
    await provider.promise().query(query);
  } catch (e) {
    throw new Error('Error CreateUser');
  }
  return res.render('register');

};
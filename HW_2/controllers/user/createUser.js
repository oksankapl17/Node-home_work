const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const query = `INSERT INTO user (name, email, password) VALUE ('${name}','${email}','${password}')`;
    await provider.promise().query(query);
  } catch (e) {
    throw new Error('Error CreateUser');
  }
  return res.render('register');
};
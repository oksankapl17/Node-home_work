const { provider } = require('../../database');

module.exports = async (req, res ,next) => {
  try {
    const {email, password} = req.body;
    const query = `SELECT * FROM USER WHERE email = '${email}' and password = '${password}'`;

    const [UserLogin] = await provider.promise().query(query);

    if (!UserLogin.length) {
      throw new Error('Password is not correct')
    }

    req.user = UserLogin;
    next();
  } catch (e) {
    res.status(400).json(e.message)
  }
};
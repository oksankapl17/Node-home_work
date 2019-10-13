const { provider } = require('../../database');

module.exports = async (req, res) => {
  try {
    const user = req.body;
    const q = `UPDATE user SET name = '${user.name}', email = '${user.email}' WHERE id = ${req.params.id}`;

    await provider.promise().query(q);

    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};

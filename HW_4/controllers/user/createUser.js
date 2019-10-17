const { userService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const userToCreate = req.body;

    await userService.createUser(userToCreate);

    return res.json('Ok');
  } catch (e) {
    return res.json(e.message);
  }
};

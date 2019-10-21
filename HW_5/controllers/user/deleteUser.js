const { userService } = require('../../services');
const { compareIdValidator } = require('../../validator');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userFromToken } = req.user;

    compareIdValidator(id, userFromToken);

    await userService.deleteUser(id);

    return res.json('Ok');
  } catch (e) {
    return res.status(400).end();
  }
};

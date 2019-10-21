const { userService } = require('../../services');
const { compareIdValidator } = require('../../validator');

module.exports = async (req, res) => {
  try {
    const patchUserObject = req.body;
    const { id } = req.params;
    const { id: userFromToken } = req.user;

    compareIdValidator(id, userFromToken);

    await userService.updateUserByParams({ id }, patchUserObject);

    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};

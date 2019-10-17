const { userService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const patchUserObject = req.body;
    const { id } = req.params;
    const { id: userFromToken } = req.user;

    if (+id !== userFromToken) {
      throw new Error('Its not your user!');
    }

    await userService.updateUserByParams({ id }, patchUserObject);

    res.json('Ok');
  } catch (e) {
    res.json(e.message);
  }
};

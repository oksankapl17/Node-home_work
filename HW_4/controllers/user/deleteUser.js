const { userService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userFromToken } = req.user;

    if (+id !== userFromToken) {
      throw new Error('Its not your user!');
    }

    await userService.deleteUser(id);

    return res.json('Ok');
  } catch (e) {
    console.log(e);
    return res.status(400).end();
  }
};

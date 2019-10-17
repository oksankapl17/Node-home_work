const { userService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const users = await userService.findAllUsers();

    return res.json(users);
  } catch (e) {
    return res.json(e.message);
  }
};

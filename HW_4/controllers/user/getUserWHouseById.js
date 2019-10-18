
const { userService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserWHouseById(id);

    res.json(user);
  } catch (e) {
    res.json(e.message);
  }
};

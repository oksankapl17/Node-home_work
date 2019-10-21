const { userService } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const isUserPresent = await userService.getById(id);

    if (!isUserPresent) {
      throw new Error(`User with ${id} is not present`);
    }

    req.user = isUserPresent;
    next();
  } catch (e) {
    res.json(e.message);
  }
};

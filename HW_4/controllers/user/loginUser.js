const { tokenizer } = require('../../helpers');

module.exports = (req, res) => {
  const { id } = req.user;
  const tokens = tokenizer({ id });

  res.json(tokens);
};

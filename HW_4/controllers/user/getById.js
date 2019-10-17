module.exports = (req, res) => {
  const { user } = req;

  res.json(user);
};

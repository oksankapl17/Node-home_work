module.exports = (req, res) => {
  const { house } = req;

  res.json(house);
};

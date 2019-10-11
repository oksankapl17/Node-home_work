module.exports = (req, res) => {
  const [house] = req.house;

  res.redirect(`/houses/${house.id}`);
};
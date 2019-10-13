module.exports = (req, res) => {
  const { user } = req;

  res.redirect(`/users/${user.id}`);
};

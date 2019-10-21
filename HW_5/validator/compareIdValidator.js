module.exports = (firstId, secondId) => {
  if (+firstId !== secondId) {
    throw new Error('Its not your user!');
  }
};

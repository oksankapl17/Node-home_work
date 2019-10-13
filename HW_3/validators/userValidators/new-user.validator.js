module.exports = (userObject) => {
  const { email, name, password } = userObject;

  if (!email || !name || !password) {
    throw new Error('User object is not valid');
  }
};

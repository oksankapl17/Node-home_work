const { userService, emailService, filesService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const userToCreate = req.body;
    const file = req.files.avatar;
    if (!file) {
      throw new Error('Please upload avatar for user.');
    }
    const url = await filesService.uploadFile(file, 'users');
    await userService.createUser({ avatar: url, ...userToCreate });
    await emailService.sendEmail(userToCreate.email);

    return res.status(201).json('House successfully created');
  } catch (e) {
    return res.json(e.message);
  }
};

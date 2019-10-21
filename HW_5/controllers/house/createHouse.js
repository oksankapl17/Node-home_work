const { houseService, filesService } = require('../../services');

module.exports = async (req, res) => {
  try {
    const houseToCreate = req.body;
    const { id } = req.user;
    const { photos } = req.files;

    if (!photos) {
      throw new Error('Please upload at least one photo for house.');
    }

    const createdHouse = await houseService.createHouse({ user_id: id, ...houseToCreate });

    // Save all photos
    const urls = await Promise.all(photos.map((photo) => filesService.uploadFile(photo, 'houses')));

    // Save all photo urls to database
    await Promise.all(urls.map((url) => houseService.uploadPhoto({ house_id: createdHouse.id, photo: url })));

    res.status(201).json('House successfully created');
  } catch (e) {
    res.json(e.message);
  }
};

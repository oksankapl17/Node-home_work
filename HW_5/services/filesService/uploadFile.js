const { resolve } = require('path');
const { mkdirSync } = require('fs');

module.exports = async (file, folder) => {
  const {
    md5, name, mv, mimetype,
  } = file;

  if (!['image/jpeg', 'image/png'].includes(mimetype)) {
    throw new Error('Please upload valid image file.');
  }
  const { appRoot } = global;
  const dir = `photos/${folder}/${md5}`;
  const fileExtension = name.split('.').pop();
  const filePath = resolve(appRoot, 'static', dir, `${md5}.${fileExtension}`);
  // Create directory and move it there
  await mkdirSync(resolve(appRoot, 'static', dir), { recursive: true });
  await mv(filePath);
  return `${dir}/${md5}.${fileExtension}`;
};

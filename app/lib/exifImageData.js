/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */

const getExifImageData = exif => async fileName => {
  let result = null;

  await exif
    .open()
    .then(() => exif.readMetadata(fileName, ["-File:all"]))
    .then(data => (result = data.data[0]))
    .then(() => exif.close())
    .catch(error => error);

  return result;
};

module.exports = {
  getExifImageData
};

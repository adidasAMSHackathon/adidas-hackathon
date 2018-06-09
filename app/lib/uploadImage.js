const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const Boom = require("boom");
const uuid = require("uuid/v4");

const fsRename = promisify(fs.rename);

module.exports = async request => {
  // make sure we have an image to work with
  if (
    !request.payload ||
    !request.payload.path ||
    !request.payload.bytes ||
    request.payload.bytes === 0
  ) {
    return Boom.badRequest("No image has been uploaded");
  }

  const { path: tempPath } = request.payload;
  const targetName = `uploads/images/${uuid()}.jpg`;
  const destination = path.join(__dirname, `../public/${targetName}`);

  // move the uplaoded image to it's final destination in the public folder
  await fsRename(tempPath, destination).catch(error => {
    console.error(error);
    return Boom.internal("Error saving the image.");
  });

  return { targetName, destination };
};

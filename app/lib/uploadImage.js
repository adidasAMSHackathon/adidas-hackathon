const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const Boom = require("boom");
const uuid = require("uuid/v4");

const fsWrite = promisify(fs.writeFile);

module.exports = async (request, server) => {
  // make sure we have an image to work with
  if (!request.payload.base64) {
    return Boom.badRequest("No image has been uploaded");
  }

  const imagePath = `uploads/${uuid()}.jpg`;
  const systemImagePath = path.join(__dirname, `../${imagePath}`);

  // save the image to the server
  await fsWrite(systemImagePath, request.payload.base64, "base64").catch(
    error => console.error(error)
  );

  return {
    imagePath,
    systemImagePath
  };
};

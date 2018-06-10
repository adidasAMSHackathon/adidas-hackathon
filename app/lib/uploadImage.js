const fsExtra = require("fs-extra");
const path = require("path");
const Boom = require("boom");
const uuid = require("uuid/v4");

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

  const { path: tempSystemImagePath } = request.payload;
  const imagePath = `uploads/${uuid()}.jpg`;
  const systemImagePath = path.join(__dirname, `../${imagePath}`);

  // move the uplaoded image to it's final destination in the public folder
  await fsExtra.move(tempSystemImagePath, systemImagePath).catch(error => {
    if (error) console.log(error);
    process.exit(1);
  });

  return {
    imagePath,
    systemImagePath
  };
};

const Hapi = require("hapi");
const path = require("path");
const vision = require("@google-cloud/vision");
const exiftool = require("node-exiftool");
const exiftoolBin = require("dist-exiftool");
// const visionGenerators = require("./lib/googleVisionGenerators");
const exifGenerator = require("./lib/exifImageData");
require("dotenv").config();

// terminate the service if the google cloud credentials environment variable is not set
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.log("'GOOGLE_APPLICATION_CREDENTIALS' not found in environment.");
  process.exit();
}

// create a new instance of the vision client to be shared across the service
// const client = new vision.ImageAnnotatorClient();
const exif = new exiftool.ExiftoolProcess(exiftoolBin);

// google cloud vision
// const getImageProperties = visionGenerators.getImagePropertiesGenerator(client);
// const getImageLabels = visionGenerators.getImageLabelsGenerator(client);
// const getImageSearches = visionGenerators.getImageSearchesGenerator(client);
// const getImageDocumentText = visionGenerators.getImageDocumentTextGenerator(
//   client
// );
// const getImageText = visionGenerators.getImageTextGenerator(client);

// exif image data
const getExifData = exifGenerator.getExifImageData(exif);

const fileName = path.join(__dirname, "../static/images/gps.JPG");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", error => {
  console.log(error);
  process.exit(1);
});

server.route({
  method: "GET",
  path: "/",
  handler: async () => {
    const promises = [
      // getImageProperties(fileName),
      // getImageLabels(fileName)
      // getImageSearches(fileName)
      // getImageDocumentText(fileName)
      // getImageText(fileName)
      getExifData(fileName)
    ];

    const results = await Promise.all(promises).catch(errors =>
      console.error(errors)
    );

    return results;
  }
});

init();

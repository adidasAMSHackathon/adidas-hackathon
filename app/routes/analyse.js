const generateCloudVisionFunctions = require("./../lib/googleVisionGenerators");
const vision = require("@google-cloud/vision");
const uploadImage = require("./../lib/uploadImage");
require("dotenv").config();

// terminate the service if the google cloud credentials environment variable is not set
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.log("'GOOGLE_APPLICATION_CREDENTIALS' not found in environment.");
  process.exit(1);
}

// create a new instance of the vision client to be shared across the service
const client = new vision.ImageAnnotatorClient();

module.exports = server => ({
  method: "POST",
  path: "/analyse",
  config: {
    payload: {
      output: "file",
      parse: true
    },
    handler: async request => {
      // upload the image so we can work on it
      const { imagePath, systemImagePath } = await uploadImage(request, server);

      const gcf = generateCloudVisionFunctions(client, systemImagePath);

      // collection of all the data fetches we need from cloud vision
      const promises = [
        gcf.getImageProperties(),
        gcf.getImageLabels(),
        gcf.getImageSearches(),
        gcf.getImageDocumentText(),
        gcf.getImageText()
      ];

      // await all promises
      const results = await Promise.all(promises).catch(errors => errors);

      const response = {};
      [
        "imageUrl",
        "colors",
        "labels",
        "searches",
        "documentText",
        "ocr"
      ].forEach((label, index) => {
        if (index === 0) {
          response[label] = `${process.env.URI ||
            server.info.uri ||
            ""}/${imagePath}`;
        } else {
          response[label] = results[index - 1];
        }
      });

      return response;
    }
  }
});

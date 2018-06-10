const generateCloudVisionFunctions = require("./../lib/googleVisionGenerators");
const vision = require("@google-cloud/vision");
const uploadImage = require("./../lib/uploadImage");
const getWeather = require("./../lib/getWeather");
const getLocation = require("./../lib/getLocation");
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

      // generate cloud vision functions (inject client and systemImagePath)
      const gcf = generateCloudVisionFunctions(client, systemImagePath);

      // collection of all the data fetches we need from cloud vision
      // and also the current weather and location
      const promises = [
        gcf.getImageProperties(),
        gcf.getImageLabels(),
        gcf.getImageSearches(),
        gcf.getImageDocumentText(),
        gcf.getImageText(),
        getWeather(),
        getLocation()
      ];

      // await all promises
      const results = await Promise.all(promises).catch(errors => errors);

      // add labels to the data for the response
      const response = {};
      [
        "imageUrl",
        "colors",
        "labels",
        "searches",
        "documentText",
        "ocr",
        "temperature",
        "location"
      ].forEach((label, index) => {
        if (index === 0) {
          response[label] = `${process.serviceUrl}/${imagePath}`;
        } else {
          response[label] = results[index - 1];
        }
      });

      return response;
    }
  }
});

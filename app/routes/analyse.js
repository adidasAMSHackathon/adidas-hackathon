require("dotenv").config();

// terminate the service if the google cloud credentials environment variable is not set
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.log("'GOOGLE_APPLICATION_CREDENTIALS' not found in environment.");
  process.exit(1);
}

const vision = require("@google-cloud/vision");
const visionGenerators = require("./../lib/googleVisionGenerators");
const uploadImage = require("./../lib/uploadImage");

// create a new instance of the vision client to be shared across the service
const client = new vision.ImageAnnotatorClient();

// google cloud vision functions
const generateCloudVisionFunctions = require("./../lib/googleVisionGenerators");

module.exports = () => ({
  method: "POST",
  path: "/analyse",
  config: {
    payload: {
      output: "file",
      parse: true
    },
    handler: async request => {
      // upload the image so we can work on it
      const targetName = await uploadImage(request);

      const gcf = generateCloudVisionFunctions(client, targetName);

      const promises = [
        gcf.getImageProperties(),
        gcf.getImageLabels(),
        gcf.getImageSearches(),
        gcf.getImageDocumentText(),
        gcf.getImageText()
      ];

      // await all promises
      const results = await Promise.all(promises).catch(err => err);

      // return {
      //   imageURL: `${server.info.uri}/${targetName}`
      // };

      return results;
    }
  }
});

const Hapi = require('hapi');
const path = require('path');
const vision = require('@google-cloud/vision');
const visionGenerators = require('./lib/googleVisionGenerators');
require('dotenv').config();

// terminate the service if the google cloud credentials environment variable is not set
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.log("'GOOGLE_APPLICATION_CREDENTIALS' not found in environment.");
  process.exit();
}

// create a new instance of the vision client to be shared across the service
const client = new vision.ImageAnnotatorClient();

// google cloud vision
const getImageProperties = visionGenerators.getImagePropertiesGenerator(client);

const fileName = path.join(__dirname, '../static/images/adidas-shoe.jpeg');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

server.route({
  method: 'GET',
  path: '/',
  handler: () => {
    const imagePropertiesPromise = getImageProperties(fileName);

    Promise.all([
      imagePropertiesPromise,
    ]).then((result) => {
      console.log(result);
    }).catch((errors) => {
      console.error(errors);
    });

    return 'Hi';
  },
});

init();

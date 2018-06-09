const Hapi = require('hapi');
const vision = require('@google-cloud/vision');
require('dotenv').config();

// terminate the service if the google cloud credentials environment variable is not set
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.log("'GOOGLE_APPLICATION_CREDENTIALS' not found in environment.");
  process.exit();
}

// create a new instance of the vision client to be shared across the service
process.client = new vision.ImageAnnotatorClient();
const { getImageProperties } = require('./lib/googleVision');

const filename = '/static/images/adidas-shoe.jpeg';

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
  handler: (request, h) => {
    const imagePropertiesPromise = getImageProperties(filename);

    Promise.all([
      imagePropertiesPromise,
    ]).then((result) => {
      console.log(result);
    });

    return 'Hi';
  },
});

init();

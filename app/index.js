const vision = require('@google-cloud/vision');

process.client = new vision.ImageAnnotatorClient();

const Hapi = require('hapi');

const filename = '/static/images/adidas-shoe.jpeg';

const { getImageProperties } = require('./lib/googleVision');

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
  },
});

init();

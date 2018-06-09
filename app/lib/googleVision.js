const getImageProperties = (fileName) => {
  process.client
    .imageProperties(fileName)
    .then((results) => {
      const properties = results[0].imagePropertiesAnnotation;
      const { colors } = properties.dominantColors;
      colors.forEach(color => console.log(color));
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};

const getImageLabels = (fileName) => {
  process.client
    .labelDetection(fileName)
    .then((results) => {
      const labels = results[0].labelAnnotations;
      console.log('Labels:');
      labels.forEach(label => console.log(label));
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};

const getImageSearches = (fileName) => {
  process.client
    .webDetection(fileName)
    .then((results) => {
      const { webDetection } = results[0];

      if (webDetection.webEntities.length) {
        console.log(`Web entities found: ${webDetection.webEntities.length}`);
        webDetection.webEntities.forEach((webEntity) => {
          console.log(`  Description: ${webEntity.description}`);
          console.log(`  Score: ${webEntity.score}`);
        });
      }
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};

const getImageText = (fileName) => {
  process.client
    .documentTextDetection(fileName)
    .then((results) => {
      const { fullTextAnnotation } = results[0];
      console.log(fullTextAnnotation.text);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};

module.exports = {
  getImageProperties,
  getImageLabels,
  getImageSearches,
  getImageText,
};


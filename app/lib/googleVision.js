const getImagePropertiesGenerator = client => (fileName) => {
  client
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

const getImageLabelsGenerator = client => (fileName) => {
  client
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

const getImageSearchesGenerator = client => (fileName) => {
  client
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

const getImageDocumentTextGenerator = client => (fileName) => {
  client
    .documentTextDetection(fileName)
    .then((results) => {
      const { fullTextAnnotation } = results[0];
      console.log(fullTextAnnotation.text);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};

const getImageTextGenerator = client => (fileName) => {
  client
    .textDetection(fileName)
    .then((results) => {
      const { textAnnotations } = results[0];
      console.log('Text:');
      textAnnotations.forEach(text => console.log(text));
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};

module.exports = {
  getImagePropertiesGenerator,
  getImageLabelsGenerator,
  getImageSearchesGenerator,
  getImageDocumentTextGenerator,
  getImageTextGenerator,
};


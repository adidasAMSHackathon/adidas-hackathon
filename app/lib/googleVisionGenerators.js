const getImagePropertiesGenerator = client => fileName =>
  client.imageProperties(fileName).then(results => {
    const properties = results[0].imagePropertiesAnnotation;
    const { colors } = properties.dominantColors;

    return colors;
  });

const getImageLabelsGenerator = client => fileName =>
  client.labelDetection(fileName).then(results => {
    const labels = results[0].labelAnnotations;
    console.log("Labels:");

    return labels;
  });

const getImageSearchesGenerator = client => fileName =>
  client.webDetection(fileName).then(results => {
    const { webDetection } = results[0];

    if (webDetection.webEntities.length) {
      console.log(`Web entities found: ${webDetection.webEntities.length}`);

      return webDetection.webEntities;
    }

    return null;
  });

const getImageDocumentTextGenerator = client => fileName =>
  client.documentTextDetection(fileName).then(results => {
    const {
      fullTextAnnotation: { text }
    } = results[0];

    return text;
  });

const getImageTextGenerator = client => fileName =>
  client.textDetection(fileName).then(results => {
    const { textAnnotations } = results[0];

    return textAnnotations;
  });

module.exports = {
  getImagePropertiesGenerator,
  getImageLabelsGenerator,
  getImageSearchesGenerator,
  getImageDocumentTextGenerator,
  getImageTextGenerator
};

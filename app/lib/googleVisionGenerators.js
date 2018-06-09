const getImagePropertiesGenerator = client => fileName =>
  client.imageProperties(fileName).then(results => {
    const properties = results[0].imagePropertiesAnnotation;
    const { colors } = properties.dominantColors;

    return colors.slice(0, 5).map(c => {
      const { color } = c;

      return [
        color.red,
        color.green,
        color.blue,
        color.alpha === null ? 0 : c.alpha
      ];
    });
  });

const getImageLabelsGenerator = client => fileName =>
  client
    .labelDetection(fileName)
    .then(results =>
      results[0].labelAnnotations.map(label => label.description)
    );

const getImageSearchesGenerator = client => fileName =>
  client.webDetection(fileName).then(results => {
    const { webDetection } = results[0];

    if (webDetection.webEntities.length) {
      console.log(`Web entities found: ${webDetection.webEntities.length}`);

      return webDetection.webEntities.map(entity => entity.description);
    }

    return null;
  });

const getImageDocumentTextGenerator = client => fileName =>
  client.documentTextDetection(fileName).then(results => {
    if (results[0].fullTextAnnotation) {
      const {
        fullTextAnnotation: { text }
      } = results[0];
      return text;
    }
    return null;
  });

const getImageTextGenerator = client => fileName =>
  client.textDetection(fileName).then(results => {
    console.log(results);
    const { textAnnotations } = results[0];

    return textAnnotations
      .slice(1, textAnnotations.length - 1)
      .map(ocr => ocr.description);
  });

module.exports = {
  getImagePropertiesGenerator,
  getImageLabelsGenerator,
  getImageSearchesGenerator,
  getImageDocumentTextGenerator,
  getImageTextGenerator
};

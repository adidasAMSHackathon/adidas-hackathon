const generateCloudVisionFunctions = (client, fileName) => ({
  //
  getImageProperties: () =>
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
        ].join(",");
      });
    }),

  getImageLabels: () =>
    client
      .labelDetection(fileName)
      .then(results =>
        results[0].labelAnnotations.map(label => label.description)
      ),

  getImageSearches: () =>
    client.webDetection(fileName).then(results => {
      const { webDetection } = results[0];

      if (webDetection.webEntities.length) {
        return webDetection.webEntities.map(entity => entity.description);
      }

      return null;
    }),

  getImageDocumentText: () =>
    client.documentTextDetection(fileName).then(results => {
      if (results[0].fullTextAnnotation) {
        const {
          fullTextAnnotation: { text }
        } = results[0];
        return text;
      }
      return null;
    }),

  getImageText: () =>
    client.textDetection(fileName).then(results => {
      const { textAnnotations } = results[0];

      const annotations = textAnnotations
        .slice(1, textAnnotations.length - 1)
        .map(ocr => ocr.description);

      return annotations.length > 0 ? annotations : null;
    })
});

module.exports = generateCloudVisionFunctions;
